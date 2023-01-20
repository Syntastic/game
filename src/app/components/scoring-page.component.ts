import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { saveAs } from 'file-saver';

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

  public onExportClick(): void {
    this.playerStateService.players$
      .pipe(
        take(1),
        map((data) => {
          return new File([JSON.stringify(data, null, 2)], 'data.json');
        })
      )
      .subscribe((x) => {
        saveAs(x);
      });
  }
}
