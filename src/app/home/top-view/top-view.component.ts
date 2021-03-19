import { Component, OnInit, HostListener } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.css']
})
export class TopViewComponent implements OnInit {
  scrHeight: any;
  scrWidth: any;
  tiles: Tile[];

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if(this.scrWidth<900){
      this.tiles = [
        { text: 'One', cols: 2, rows: 3, color: '#64DD17' },
        { text: 'Two', cols: 2, rows: 3, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
      ]
    }else{
      this.tiles = [
        { text: 'One', cols: 1, rows: 3, color: '#64DD17' },
        { text: 'Two', cols: 1, rows: 3, color: 'lightgreen' },
        /* { text: 'Three', cols: 1, rows: 1, color: 'lightpink' }, */
      ];
    }
  }
  constructor() {
    this.getScreenSize()
  }

  ngOnInit(): void {

  }

}
