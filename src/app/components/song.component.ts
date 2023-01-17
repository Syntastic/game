import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';

import { Level, Song } from '../models';
import { SongProvider } from '../services';

@Component({
  styleUrls: ['./song.component.scss'],
  templateUrl: './song.component.html',
})
export class SongComponent implements OnInit {
  public videoPlaying: boolean;
  public complete: boolean;

  public hard: boolean;
  public medium: boolean;
  public easy: boolean;

  public song$: Observable<Song>;
  public song: Song;

  private songId$: Observable<string>;

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private songProvider: SongProvider
  ) {}

  public ngOnInit(): void {
    this.songId$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('name'))
    );
    this.songId$
      .pipe(map((x) => this.songProvider.getSong(x)))
      .subscribe((x) => {
        this.song = x;
        this.resetSong();
      });

    this.song$ = this.songId$.pipe(map((x) => this.songProvider.getSong(x)));
  }

  public videoStart(level: Level): void {
    switch (level) {
      case Level.hard:
        this.hard = true;
        break;
      case Level.medium:
        this.medium = true;
        break;
      case Level.easy:
        this.easy = true;
        break;
    }

    this.videoPlaying = true;
  }

  public onSongEnded(): void {
    this.complete = this.hard && this.medium && this.easy;
    this.videoPlaying = false;
  }

  public next(): void {
    this.songId$.pipe(take(1)).subscribe((id) => {
      const i = parseInt(id);
      if (i === this.songProvider.getSongs().length) {
        this.router.navigate(['game']);
      } else {
        this.router.navigate(['..', i + 1], {
          relativeTo: this.route,
        });
      }
    });
  }

  private resetSong(): void {
    this.complete = false;
    this.hard = false;
    this.medium = false;
    this.easy = false;
  }
}
