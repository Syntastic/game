import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Score } from '../models';
import { Player } from '../models/player';
import { players } from '../models/players';

@Injectable({ providedIn: 'root' })
export class PlayerStateService {
  public players$: Observable<Player[]>;
  private state$ = new BehaviorSubject<Player[]>(undefined);

  public constructor() {
    this.players$ = this.state$.asObservable();

    this.state$.next(
      players.map((p) => {
        return new Player(p.id, p.name);
      })
    );
  }

  public getPlayers(): Player[] {
    return this.state$.value;
  }

  public setActive(playerId: number, active: boolean): void {
    const player = this.findPlayer(playerId);
    player.setActive(active);
  }

  public assignScore(playerId: number, score: Score): void {
    const whatever = [...this.state$.value];
    const player = whatever.find((x) => x.id === playerId);
    player.setScore(score);

    this.state$.next(whatever);
  }

  private findPlayer(id: number): Player {
    return this.state$.value.find((x) => x.id === id);
  }

  private others(id: number): Player[] {
    return this.state$.value.filter((x) => x.id !== id);
  }
}
