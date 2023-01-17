import { Injectable } from '@angular/core';
import { Song } from '../models';
import { SongBuilder } from '../models/song-builder';

@Injectable({ providedIn: 'root' })
export class SongProvider {
  public getSongs(): Song[] {
    return this.songs;
  }

  public getSong(id: string): Song {
    return this.songs.find((x) => x.id === id);
  }

  public getNextRoute(id: string): string {
    const i = parseInt(id);
    return i === this.songs.length ? 'game' : `..//${i + 1}`;
  }

  private maniac = new SongBuilder('4')
    .withName('Maniac')
    .fromArtist('Michael Sembello')
    .fromYear(1983)
    .fromCoverArtist('Rising Insane')
    .withFileName('maniac')
    .withVideoUrl('https://www.youtube.com/watch?v=ToPYG-8XuBI')
    .withOriginalVideoUrl('https://www.youtube.com/watch?v=evyKPVS_M7E')
    .build();

  private whatIsLove = new SongBuilder('2')
    .withName('What Is Love')
    .fromArtist('Haddaway')
    .fromYear(1993)
    .fromCoverArtist('Leo Moracchioli feat. Priscila Serrano')
    .withFileName('what_is_love')
    .withVideoUrl('https://www.youtube.com/watch?v=DKo9ok2829M')
    .withOriginalVideoUrl('https://www.youtube.com/watch?v=HEXWRTEbj1I')
    .build();

  private gimme = new SongBuilder('3')
    .withName('Gimme! Gimme! Gimme!')
    .fromArtist('ABBA')
    .fromYear(1979)
    .fromCoverArtist('Feuerschwanz ')
    .withFileName('gimme_gimme_gimme')
    .withVideoUrl('https://www.youtube.com/watch?v=KEl5Gi9l528')
    .withOriginalVideoUrl('https://www.youtube.com/watch?v=XEjLoHdbVeE')
    .build();

  private blindingLights = new SongBuilder('1')
    .withName('Blinding Lights')
    .fromArtist('The Weeknd')
    .fromYear(2019)
    .fromCoverArtist('Rising Insane')
    .withFileName('blinding_lights')
    .withVideoUrl('https://www.youtube.com/watch?v=LYi541YEwIY')
    .withOriginalVideoUrl('https://www.youtube.com/watch?v=4NRXx6U8ABQ')
    .build();

  private houseRisingSun = new SongBuilder('5')
    .withName('House of the Rising Sun')
    .fromArtist('The Animals')
    .fromYear(1964)
    .fromCoverArtist('Leo Moracchioli')
    .withFileName('house_rising_sun')
    .withVideoUrl('https://www.youtube.com/watch?v=cLwwRVjEDGU')
    .withOriginalVideoUrl('https://www.youtube.com/watch?v=N4bFqW_eu2I')
    .build();

  private takeOnMe = new SongBuilder('6')
    .withName('Take On Me')
    .fromArtist('A-ha')
    .fromYear(1984)
    .fromCoverArtist('Leo Moracchioli')
    .withFileName('take_on_me')
    .withVideoUrl('https://www.youtube.com/watch?v=NBiQPZxd81s')
    .withOriginalVideoUrl('https://www.youtube.com/watch?v=djV11Xbc914')
    .build();

  private songs = [
    this.blindingLights,
    this.whatIsLove,
    this.gimme,
    this.maniac,
    this.houseRisingSun,
    this.takeOnMe,
  ];
}
