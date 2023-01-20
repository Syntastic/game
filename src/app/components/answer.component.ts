import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-answer',
  styleUrls: ['./answer.component.scss'],
  templateUrl: './answer.component.html',
})
export class AnswerComponent implements OnChanges {
  @Input() public name: string;
  @Input() public artist: string;
  @Input() public coverArtist: string;
  @Output() public ready = new EventEmitter();
  public show1: boolean;
  public show2: boolean;
  public clicks: number = 0;
  public click = new Subject<void>();

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.name) this.clicks = 0;
  }

  public onClick(): void {
    console.log('???');
    this.clicks++;
    this.show1 = true;
    if (this.clicks >= 3) this.ready.emit();
  }
}
