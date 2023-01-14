import { Injectable } from '@angular/core';
import { Song } from '../models';
import { SongBuilder } from '../models/song-builder';

@Injectable({providedIn: 'root'})
export class SongProvider {
  public getSongs(): Song[] {
    return [this.maniac];
  }

  private maniac = new SongBuilder('1')
    .withName('Maniac')
    .fromArtist('Michael Sembello')
    .fromYear(1983)
    .fromCoverArtist('Rising Insane')
    .withFileName('maniac')
    .withVideoUrl(
      'https://www.youtube.com/watch?v=ToPYG-8XuBI&ab_channel=LongBranchRecords'
    )
    .withFirstInterval(7)
    .withSecondInterval(5)
    .build();
}
