import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { PlayerStateService } from '../services';

@Component({
  selector: 'app-scoring',
  styleUrls: ['./scoring.component.scss'],
  templateUrl: './scoring.component.html',
})
export class ScoringComponent {
  public colDefs: ColDef[] = [{ field: 'name', headerName: 'Name' }];
  public rows = this.playerStateService.getPlayers();

  public constructor(private playerStateService: PlayerStateService) {}
}
