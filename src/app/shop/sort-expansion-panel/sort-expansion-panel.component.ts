import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-expansion-panel',
  templateUrl: './sort-expansion-panel.component.html',
  styleUrls: ['./sort-expansion-panel.component.css']
})
export class SortExpansionPanelComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
