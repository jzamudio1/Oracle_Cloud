import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  @Input()
  public displayColumn: string[] = [];
  @Input()
  public data: any[] = [];

}
