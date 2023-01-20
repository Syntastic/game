import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Score } from '../models';
import { PlayerStateService } from '../services';

@Component({
  selector: 'app-scoring-page',
  styleUrls: ['./scoring-page.component.scss'],
  templateUrl: './scoring-page.component.html',
})
export class ScoringPageComponent {
  public rows$ = this.playerStateService.players$.pipe(
    map((players) => players.sort((a, b) => b.totalScore - a.totalScore))
  );

  public constructor(private playerStateService: PlayerStateService) {}

  public onScoreChanged(e: [number, Score]): void {
    this.playerStateService.assignScore(e[0], e[1]);
  }
}
