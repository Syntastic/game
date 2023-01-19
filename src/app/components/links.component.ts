import { Component } from '@angular/core';
import { SongProvider } from '../services';

@Component({
  styleUrls: ['./links.component.scss'],
  templateUrl: './links.component.html',
})
export class LinksComponent {
  public songs = this.songProvider.songList;

  public constructor(private songProvider: SongProvider) {}

  public onClick(url: string): void {
    window.open(url);
  }
}
