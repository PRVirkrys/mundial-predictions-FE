import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Match } from '../../../core/models/match.model';
import { Prediction } from '../../../core/models/prediction.model';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PredictionService } from '../../../core/services/prediction.service';
import { Auth } from '../../../core/services/auth';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-prediction-form',
  imports: [LucideAngularModule, DatePipe, FormsModule],
  templateUrl: './prediction-form.html',
  styleUrl: './prediction-form.css',
})
export class PredictionForm {
  constructor(
    private predictionService: PredictionService,
    private auth: Auth,
  ) {}

  @Input({ required: true }) match!: Match;
  @Input() prediction: Prediction | null = null;
  //poner output aqui de event saved para un toast o algo asi
  @Output() predictionSaved: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('predictionModal')
  predictionModal!: ElementRef<HTMLDialogElement>;

  openModal(): void {
    this.predictionModal.nativeElement.showModal();
  }

  userHomeGoals: number | null = null;
  userAwayGoals: number | null = null;

  savePrediction() {
    if (this.userHomeGoals === null || this.userAwayGoals === null) {
      return; //esto saca de la funcion
      //aqui podrai agregar un mensaje de error con los inputs
    } else {
      const user: User = this.auth.getCurrentUser();
      this.predictionService
        .createPrediction(user.id, this.match.id, this.userHomeGoals, this.userAwayGoals)
        .subscribe({
          next: () => {
            console.log(`Prediddcion guardada`);
            this.predictionModal.nativeElement.close();
            this.predictionSaved.emit();
          },
          error: () => {
            console.log('Error al guardar la prediccion');
          },
        });
    }
  }
}
