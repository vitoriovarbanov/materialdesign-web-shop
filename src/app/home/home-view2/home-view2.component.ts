import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view2',
  templateUrl: './home-view2.component.html',
  styleUrls: ['./home-view2.component.css']
})
export class HomeView2Component implements OnInit {
  displayedViews = [
    { src: '../../../assets/health1.jpg'},
    { src: '../../../assets/health2.jpg'},
    { src: '../../../assets/health3.jpg'},
    { src: '../../../assets/health4.jpg'},
    { src: '../../../assets/health5.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
