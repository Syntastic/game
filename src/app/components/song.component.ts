import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  delay,
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  take,
  takeUntil,
  timer,
} from 'rxjs';

import { getSong, Song } from '../models';

@Component({
  selector: 'app-song',
  styleUrls: ['./song.component.scss'],
  templateUrl: './song.component.html',
})
export class SongComponent implements OnInit, OnDestroy {
  public video: string;

  public song$: Observable<Song>;
  public startSong$ = new BehaviorSubject<boolean>(false);
  public time: number = 45;
  public points: number = 135;
  private onDestroy$ = new Subject<void>();

  private timer$ = timer(1000, 1000).pipe(take(45));

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.song$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      map((x) => getSong(x)),
      takeUntil(this.onDestroy$)
    );

    this.song$
      .pipe(delay(3000), take(1))
      .subscribe(() => this.startSong$.next(true));

    this.startSong$
      .pipe(
        filter((x) => x),
        switchMap(() => this.timer$)
      )
      .subscribe(() => {
        this.time--;
        this.points = this.time * 3;
      });

    this.timer$.subscribe();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public onVideoEnded(song: Song): void {
    if (song.onLast()) {
      //
      this.startSong$.next(false);
      console.log('song done!');
    } else song.next();
  }
}
