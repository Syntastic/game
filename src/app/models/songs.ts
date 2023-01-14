// export enum Song {
//   maniac,
//   takeOnMe,
//   blindingLights,
//   whatIsLove
// }
const prefix = 'assets/';
export class Song {
  private playing: number = 1;

  public constructor(
    public id: string,
    public name: string,
    public fileName: string,
    public originalArtist: string,
    public year: number,
    public coverArtist: string,
    public videoUrl: string
  ) {}

  public get active(): string {
    const vid = `${prefix}${this.fileName}-${this.playing}.mp4`;

    return vid;
  }

  public next(): void {
    if (this.playing < 3) this.playing++;
  }

  public getNextVideo(): string {
    const vid = `${this.fileName}-${this.playing}`;

    return vid;
  }
}

const maniac = new Song(
  '1',
  'Maniac',
  'maniac',
  'Michael Sembello',
  1983,
  'Rising Insane',
  'https://www.youtube.com/watch?v=ToPYG-8XuBI&ab_channel=LongBranchRecords'
);

export const songs: { [id: string]: Song } = {
  1: maniac,
};

export function getSong(id: string): Song {
  return songs[id];
}
