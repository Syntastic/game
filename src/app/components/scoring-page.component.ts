import { Component } from '@angular/core';
import { ColDef, ValueGetterParams } from 'ag-grid-community';
import { Player } from '../models/player';
import { PlayerStateService } from '../services';

@Component({
  selector: 'app-scoring-page',
  styleUrls: ['./scoring-page.component.scss'],
  templateUrl: './scoring-page.component.html',
})
export class ScoringPageComponent {
  public colDefs: ColDef[] = [
    { field: 'name', headerName: 'Name' },
    ...Array.from({ length: 10 }, (_, i) => i + 1).map((x) => {
      const id = x.toString();
      return {
        caption: `Song #${id}`,
        valueGetter: (params: ValueGetterParams) => {
          const p = params.data as Player;
          return p.scores.find((s) => s.songId === id)?.level;
        },
      };
    }),
  ];
  public rows = this.playerStateService.getPlayers();

  public constructor(private playerStateService: PlayerStateService) {}
}
