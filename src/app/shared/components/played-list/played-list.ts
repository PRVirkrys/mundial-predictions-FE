import { Component } from '@angular/core';
import { MatchCard } from '../match-card/match-card';

@Component({
  selector: 'app-played-list',
  imports: [MatchCard],
  templateUrl: './played-list.html',
  styleUrl: './played-list.css',
})
export class PlayedList {}
