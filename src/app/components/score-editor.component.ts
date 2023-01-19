import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Level, Score } from '../models';

@Component({
  selector: 'app-score-editor',
  styleUrls: ['./score-editor.component.scss'],
  templateUrl: './score-editor.component.html',
})
export class ScoreEditorComponent {
  @Input() public score: Score;
  @Output() public scoreChanged = new EventEmitter<Score>();

  public onHardClick(): void {
    this.scoreChanged.emit({ ...this.score, level: Level.hard });
  }
  public onMediumClick(): void {
    this.scoreChanged.emit({ ...this.score, level: Level.medium });
  }
  public onEasyClick(): void {
    this.scoreChanged.emit({ ...this.score, level: Level.easy });
  }
}
