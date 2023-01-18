import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  styleUrls: ['./grid-component.scss'],
  templateUrl: './grid-component.html',
})
export class GridComponent {
  @Input() public rowData: any[];
  @Input() public colDefs: ColDef[];
}
