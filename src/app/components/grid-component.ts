import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Score } from '../models';
import { Player } from '../models/player';
import { songs } from '../services/song.provider';

@Component({
  selector: 'app-grid',
  styleUrls: ['./grid-component.scss'],
  templateUrl: './grid-component.html',
})
export class GridComponent implements OnInit {
  @Input() public players: Player[];
  @Input() public showScores: boolean;
  @Input() public showActive: boolean;
  @Output() public scoreChanged = new EventEmitter<[number, Score]>();

  public colDefs: ColDef[];

  public ngOnInit(): void {
    this.colDefs = [
      { headerName: 'Name', width: 100 },
      ...(this.showScores ? this.scoreColumns : []),
      ...(this.showActive ? [{ headerName: 'Active', width: 100 }] : []),
    ];
  }

  public scoreColumns = [
    ...songs.map((x) => {
      return {
        headerName: `Song #${x.id}`,
        width: 150,
      };
    }),
    { headerName: 'Total', width: 100 },
  ];
}
