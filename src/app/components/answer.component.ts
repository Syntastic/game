import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-answer',
  styleUrls: ['./answer.component.scss'],
  templateUrl: './answer.component.html',
})
export class AnswerComponent {
  @Input() public name: string;
  @Input() public artist: string;
  @Input() public coverArtist: string;
  @Output() public ready = new EventEmitter();
  public show1: boolean;
  public show2: boolean;

  public click = new Subject<void>();

  public onClick(): void {
    console.log('???');
    this.show1 = true;
  }
}
