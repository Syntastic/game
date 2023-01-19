import { Injectable } from '@angular/core';
import { Song } from '../models';
import { SongBuilder } from '../models/song-builder';

@Injectable({ providedIn: 'root' })
export class SongProvider {
  public songList: Song[];

  public constructor() {
    this.songList = songs.map((x, i) => ({ ...x, id: (i + 1).toString() }));
  }

  public getSong(id: string): Song {
    return this.songList.find((x) => x.id === id);
  }
}

const maniac = new SongBuilder('4')
  .withName('Maniac')
  .fromArtist('Michael Sembello')
  .fromYear(1983)
  .fromCoverArtist('Rising Insane')
  .withFileName('maniac')
  .withVideoUrl('https://www.youtube.com/watch?v=ToPYG-8XuBI')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=evyKPVS_M7E')
  .build();

const whatIsLove = new SongBuilder('2')
  .withName('What Is Love')
  .fromArtist('Haddaway')
  .fromYear(1993)
  .fromCoverArtist('Leo Moracchioli feat. Priscila Serrano')
  .withFileName('what_is_love')
  .withVideoUrl('https://www.youtube.com/watch?v=DKo9ok2829M')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=HEXWRTEbj1I')
  .build();

const gimme = new SongBuilder('3')
  .withName('Gimme! Gimme! Gimme!')
  .fromArtist('ABBA')
  .fromYear(1979)
  .fromCoverArtist('Feuerschwanz')
  .withFileName('gimme_gimme_gimme')
  .withVideoUrl('https://www.youtube.com/watch?v=KEl5Gi9l528')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=XEjLoHdbVeE')
  .build();

const blindingLights = new SongBuilder('1')
  .withName('Blinding Lights')
  .fromArtist('The Weeknd')
  .fromYear(2019)
  .fromCoverArtist('Rising Insane')
  .withFileName('blinding_lights')
  .withVideoUrl('https://www.youtube.com/watch?v=LYi541YEwIY')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=4NRXx6U8ABQ')
  .build();

const houseRisingSun = new SongBuilder('5')
  .withName('House of the Rising Sun')
  .fromArtist('The Animals')
  .fromYear(1964)
  .fromCoverArtist('Leo Moracchioli')
  .withFileName('house_rising_sun')
  .withVideoUrl('https://www.youtube.com/watch?v=cLwwRVjEDGU')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=N4bFqW_eu2I')
  .build();

const takeOnMe = new SongBuilder('6')
  .withName('Take On Me')
  .fromArtist('A-ha')
  .fromYear(1984)
  .fromCoverArtist('Leo Moracchioli')
  .withFileName('take_on_me')
  .withVideoUrl('https://www.youtube.com/watch?v=NBiQPZxd81s')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=djV11Xbc914')
  .build();

const basketCase = new SongBuilder('7')
  .withName('Basket Case')
  .fromArtist('Green Day')
  .fromYear(1994)
  .fromCoverArtist('Tommy Johansson')
  .withFileName('basket_case')
  .withVideoUrl('https://www.youtube.com/watch?v=04mbXG-7B4U')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=NUTGr5t3MoY')
  .build();

const numa = new SongBuilder('8')
  .withName('Dragostea Din Tei')
  .fromArtist('O-Zone')
  .fromYear(2003)
  .fromCoverArtist('Feuerschwanz')
  .withFileName('dragostea_din_tei')
  .withVideoUrl('https://www.youtube.com/watch?v=qHhWelSBppY')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=YnopHCL1Jk8')
  .build();

const iwantitthatway = new SongBuilder('9')
  .withName('I Want It That Way')
  .fromArtist('Backstreet Boys')
  .fromYear(1999)
  .fromCoverArtist('UMC feat. From Fall To Spring')
  .withFileName('i_want_it_that_way')
  .withVideoUrl('https://www.youtube.com/watch?v=qHhWelSBppY')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=YnopHCL1Jk8')
  .build();

const myheartwillgoon = new SongBuilder('10')
  .withName('My Heart Will Go On')
  .fromArtist('Celine Dion')
  .fromYear(2007)
  .fromCoverArtist('Dragonforce')
  .withFileName('my_heart_will_go_on')
  .withVideoUrl('https://www.youtube.com/watch?v=LHMB1KtLLyI')
  .withOriginalVideoUrl('https://www.youtube.com/watch?v=3gK_2XdjOdY')
  .build();

export const songs = [
  takeOnMe,
  gimme,
  myheartwillgoon,
  blindingLights,
  whatIsLove,
  iwantitthatway,
  basketCase,
  numa,
  maniac,
  houseRisingSun,
];
