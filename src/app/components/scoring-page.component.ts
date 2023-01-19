import { Component } from '@angular/core';
import { ColDef, ValueGetterParams } from 'ag-grid-community';
import { Level, Score } from '../models';
import { Player } from '../models/player';
import { PlayerStateService } from '../services';
import { songs } from '../services/song.provider';

@Component({
  selector: 'app-scoring-page',
  styleUrls: ['./scoring-page.component.scss'],
  templateUrl: './scoring-page.component.html',
})
export class ScoringPageComponent {
  public rows$ = this.playerStateService.players$;

  public constructor(private playerStateService: PlayerStateService) {}

  public onScoreChanged(e: [number, Score]): void {
    this.playerStateService.assignScore(e[0], e[1]);
  }
}
