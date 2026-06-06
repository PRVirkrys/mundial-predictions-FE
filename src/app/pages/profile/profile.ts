import { Component, DestroyRef } from '@angular/core';
import { PredictionsList } from '../../shared/components/predictions-list/predictions-list';
import { Auth } from '../../core/services/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile',
  imports: [PredictionsList],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(
    private auth: Auth,
    private destroyRef: DestroyRef,
  ) {}
  userName = '';
  userScore = 0;
  ngOnInit() {
    this.auth.currentUser$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (user) => (
          (this.userName = user ? user.name || '' : ''),
          (this.userScore = user ? user.totalScore || 0 : 0)
        ),
      );
  }
}
