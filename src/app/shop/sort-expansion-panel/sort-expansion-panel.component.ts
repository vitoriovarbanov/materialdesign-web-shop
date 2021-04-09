import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sort-expansion-panel',
  templateUrl: './sort-expansion-panel.component.html',
  styleUrls: ['./sort-expansion-panel.component.css']
})
export class SortExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  sortCriteriaDef:string = 'default'
  sortCriteriaLowHigh:string = 'lowtohigh'
  sortCriteriaHighLow:string = 'hightolow'
  @Output() sortItemsLowHigh = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  sortLowToHigh(sortCriteria){
    this.sortItemsLowHigh.emit(sortCriteria)
  }

}
