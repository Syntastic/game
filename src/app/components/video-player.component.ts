import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject, combineLatest, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-video-player',
  styleUrls: ['./video-player.component.scss'],
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  @Input() public url: string;
  @Output() public ended = new EventEmitter();
  public url$ = new BehaviorSubject<SafeUrl>(undefined);

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.url) {
      this.url$.next(this.url);
    }
  }
}
