const prefix = 'assets/';

export class Song {
  public constructor(
    public id: string,
    public name: string,
    public fileName: string,
    public artist: string,
    public year: number,
    public coverArtist: string,
    public videoUrl: string,
    public originalUrl: string
  ) {}

  public getVideo(video: string): string {
    return `${prefix}${this.fileName}-${video}.mp4`;
  }
}
