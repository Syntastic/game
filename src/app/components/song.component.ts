import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Song } from '../models';
import { SongProvider } from '../services';

@Component({
  selector: 'app-song',
  styleUrls: ['./song.component.scss'],
  templateUrl: './song.component.html',
})
export class SongComponent implements OnInit {
  public videoPlaying: boolean;

  public song$: Observable<Song>;

  public constructor(
    private route: ActivatedRoute,
    private songProvider: SongProvider
  ) {}

  public ngOnInit(): void {
    this.song$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('name')),
      map((x) => this.songProvider.getSong(x))
    );
  }

  public videoStart(): void {
    this.videoPlaying = true;
  }

  public onSongEnded(): void {
    this.videoPlaying = false;
  }
}
