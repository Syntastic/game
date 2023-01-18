import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-checkbox',
  styleUrls: ['./labeled-checkbox.component.scss'],
  templateUrl: './labeled-checkbox.component.html',
})
export class LabeledCheckboxComponent {
  @Input() public label: string;
  @Input() public checked: boolean;
}
