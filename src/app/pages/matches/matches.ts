import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatchCard } from '../../shared/components/match-card/match-card';
import { MatchService } from '../../core/services/match.service';
import { PredictionService } from '../../core/services/prediction.service';
import { Match } from '../../core/models/match.model';
import { Prediction } from '../../core/models/prediction.model';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-matches',
  imports: [MatchCard],
  templateUrl: './matches.html',
  styleUrl: './matches.css',
})
export class Matches implements OnInit {
  matches: Match[] = [];
  predictionByUser: Prediction[] = [];

  constructor(
    private matchService: MatchService,
    private predictionService: PredictionService,
    private cdr: ChangeDetectorRef,
    private auth: Auth,
  ) {}

  userId: number | null = null;

  ngOnInit() {
    this.matchService.getMatches().subscribe((data: Match[]) => {
      this.matches = data;
      this.cdr.detectChanges();
    });

    this.auth.refreshCurrentUser();
    this.auth.currentUser$.subscribe((user) => {
      this.userId = user ? user.id : null;
      if (user) this.loadUserPredictions(user.id);
      else this.predictionByUser = [];
    });
  }

  loadUserPredictions(userId: number) {
    this.predictionService.getPredictionsByUser(userId).subscribe((data: Prediction[]) => {
      this.predictionByUser = data;
      this.cdr.detectChanges();
    });
  }

  getPredictionForMatch(matchId: number): Prediction | null {
    return this.predictionByUser.find((p) => p.match.id == matchId) ?? null;
  }

  predictionSaved() {
    if (this.userId) {
      this.loadUserPredictions(this.userId);
    }
  }
}
