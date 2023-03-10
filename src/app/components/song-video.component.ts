import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, withLatestFrom } from 'rxjs';

import { SongProvider } from '../services/song.provider';

@Component({
  templateUrl: './song-video.component.html',
})
export class SongVideoComponent implements OnInit {
  public url$: Observable<string>;

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private songProvider: SongProvider
  ) {}

  public ngOnInit(): void {
    const songId$ = this.route.parent.paramMap.pipe(
      map((paramMap) => paramMap.get('name'))
    );

    this.url$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      withLatestFrom(songId$),
      map(([video, songId]) => {
        const s = this.songProvider.getSong(songId);

        return `${prefix}${s.fileName}-${video}.mp4`;
      })
    );
  }

  @HostListener('window:keydown.esc')
  public onVideoEnded(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}

const prefix = 'assets/';
