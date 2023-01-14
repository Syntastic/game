const prefix = 'assets/';
export class Song {
  private playing: number = 1;

  public constructor(
    public id: string,
    public name: string,
    public fileName: string,
    public artist: string,
    public year: number,
    public coverArtist: string,
    public videoUrl: string,
    public firstInterval: number,
    public secondInterval: number
  ) {}

  public get active(): string {
    const vid = `${prefix}${this.fileName}-${this.playing}.mp4`;

    return vid;
  }

  public onLast(): boolean {
    return this.playing === 3;
  }

  public next(): void {
    const interval =
      this.playing === 1 ? this.firstInterval : this.secondInterval;

    setTimeout(() => {
      if (this.playing < 3) this.playing++;
    }, interval * 1000);
  }

  public getNextVideo(): string {
    const vid = `${this.fileName}-${this.playing}`;

    return vid;
  }
}
