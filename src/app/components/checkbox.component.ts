import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() public color: string;
  @Input() public checked: boolean;
}
