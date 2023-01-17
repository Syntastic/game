import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  styleUrls: ['./answer.component.scss'],
  templateUrl: './answer.component.html',
})
export class AnswerComponent {
  @Input() public name: string;
  @Input() public artist: string;
  @Input() public coverArtist: string;
}
