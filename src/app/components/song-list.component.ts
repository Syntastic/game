import { Component } from '@angular/core';
import { SongProvider } from '../services/song.provider';

@Component({
  selector: 'app-song-list',
  styleUrls: ['./song-list.component.scss'],
  templateUrl: './song-list.component.html',
})
export class SongListComponent {
  public songs = this.songProvider.getSongs();

  public constructor(private songProvider: SongProvider) {}
}
