import { songs } from '../services/song.provider';
import { Score } from './score';

const scoreMap = {
  [1]: 30,
  [2]: 15,
  [3]: 5,
};

export class Player {
  public metalhead: boolean;
  public scores: Score[];
  public active: boolean;

  public get totalScore(): number {
    return this.scores.reduce<number>((acc, s) => {
      const score = isNaN(scoreMap[s.level]) ? 0 : scoreMap[s.level];
      return acc + score;
    }, 0);
  }

  public constructor(public id: number, public name: string) {
    this.active = true;
    this.scores = songs.map(({ id: songId }) => ({ songId, level: undefined }));
  }

  public setScore(s: Score): void {
    const score = this.scores.find((x) => x.songId === s.songId);
    score.level = s.level;
  }

  public makeMetal(): void {
    this.metalhead = true;
  }

  public setActive(active: boolean): void {
    this.active = active;
  }
}
