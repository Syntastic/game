import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Level } from '../models';
import { Player } from '../models/player';

@Injectable({ providedIn: 'root' })
export class PlayerStateService {
  private state$ = new BehaviorSubject<Player[]>(undefined);

  public getPlayers(): Player[] {
    return this.state$.value;
  }

  public setActive(playerId: number, active: boolean): void {
    const player = this.findPlayer(playerId);
    player.setActive(active);
  }

  public assignScore(playerId: number, songId: string, level: Level): void {
    const player = this.findPlayer(playerId);
    player.setScore(songId, level);
  }

  private findPlayer(id: number): Player {
    return this.state$.value.find((x) => x.id === id);
  }
}
