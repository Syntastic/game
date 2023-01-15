import { Song } from './song';

export class SongBuilder {
  private name: string;
  private artist: string;
  private year: number;
  private coverArtist: string;
  private fileName: string;
  private url: string;
  private originalUrl: string;

  constructor(private id: string) {}

  public withName(name: string): SongBuilder {
    this.name = name;
    return this;
  }

  public fromArtist(artist: string): SongBuilder {
    this.artist = artist;
    return this;
  }

  public fromYear(year: number): SongBuilder {
    this.year = year;
    return this;
  }

  public fromCoverArtist(artist: string): SongBuilder {
    this.coverArtist = artist;
    return this;
  }

  public withFileName(name: string): SongBuilder {
    this.fileName = name;
    return this;
  }

  public withVideoUrl(url: string): SongBuilder {
    this.url = url;
    return this;
  }

  public withOriginalVideoUrl(url: string): SongBuilder {
    this.originalUrl = url;
    return this;
  }

  public build(): Song {
    return new Song(
      this.id,
      this.name,
      this.fileName,
      this.artist,
      this.year,
      this.coverArtist,
      this.url,
      this.originalUrl
    );
  }
}
