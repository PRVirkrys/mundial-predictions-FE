import { Match } from './match.model';
import { User } from './user.model';

export interface Prediction {
  id: number;
  user: User;
  match: Match;
  predictedHomeGoals: number | null;
  predictedAwayGoals: number | null;
  correctWinner: boolean | null;
  correctScore: boolean | null;
}
