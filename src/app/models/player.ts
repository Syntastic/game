import { songs } from '../services/song.provider';
import { Level, Score } from './score';

export class Player {
  public metalhead: boolean;
  public scores: Score[];
  public active: boolean;

  public constructor(public id: number, public name: string) {
    this.scores = songs.map(({ id: songId }) => ({ songId, level: undefined }));
  }

  public setScore(songId: string, level: Level): void {
    const score = this.scores.find((x) => x.songId === songId);
    score.level = level;
  }

  public makeMetal(): void {
    this.metalhead = true;
  }

  public setActive(active: boolean): void {
    this.active = active;
  }
}
