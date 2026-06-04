import { Component } from '@angular/core';
import { UserCard } from '../../shared/components/user-card/user-card';

@Component({
  selector: 'app-ranking',
  imports: [UserCard],
  templateUrl: './ranking.html',
  styleUrl: './ranking.css',
})
export class Ranking {}
