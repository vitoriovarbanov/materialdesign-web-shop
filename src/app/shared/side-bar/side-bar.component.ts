import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  showClose = false;

  @HostListener('window:click', ['$event.target'])
  onClick(e){
    if(e.textContent === 'menu'){
      this.showClose = true
    }else{
      this.showClose = false
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
