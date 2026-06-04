import { Component } from '@angular/core';
import { MatchCard } from '../match-card/match-card';

@Component({
  selector: 'app-match-list',
  imports: [MatchCard],
  templateUrl: './match-list.html',
  styleUrl: './match-list.css',
})
export class MatchList {}
