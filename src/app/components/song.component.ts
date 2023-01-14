import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { getSong, Song } from '../models';

@Component({
  selector: 'app-song',
  styleUrls: ['./song.component.scss'],
  templateUrl: './song.component.html',
})
export class SongComponent implements OnInit, OnDestroy {
  // @Input() public name: string;
  public video: string;

  public song: Song;

  private onDestroy$ = new Subject<void>();

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        takeUntil(this.onDestroy$)
      )
      .subscribe((x) => {
        this.song = getSong(x);
      });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
