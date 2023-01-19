import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Score } from '../models';
import { Player } from '../models/player';
import { songs } from '../services/song.provider';

@Component({
  selector: 'app-player-row',
  styleUrls: ['./player-row.component.scss'],
  templateUrl: './player-row.component.html',
})
export class PlayerRowComponent {
  @Input() public player: Player;
  @Input() public showScores: boolean;
  @Input() public showActive: boolean;
  @Output() public scoreChanged = new EventEmitter<[number, Score]>();

  public songIds = songs.map((x) => x.id);
}
