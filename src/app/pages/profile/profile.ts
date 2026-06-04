import { Component } from '@angular/core';
import { PredictionsList } from '../../shared/components/predictions-list/predictions-list';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-profile',
  imports: [PredictionsList],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(private auth: Auth) {}

  userName = '';
  ngOnInit() {
    this.auth.userName$.subscribe((name) => (this.userName = name));
  }
}
