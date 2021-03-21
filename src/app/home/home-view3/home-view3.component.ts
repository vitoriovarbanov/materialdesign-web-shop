import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-view3',
  templateUrl: './home-view3.component.html',
  styleUrls: ['./home-view3.component.css']
})
export class HomeView3Component implements OnInit {
  status = true

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  displayComment(e) {
    const pElements = Array.from(this.elRef.nativeElement.querySelectorAll('p'));
    for (const p of pElements) {
      console.log(p['id'])
      console.log(e)
      if (Number(p['id']) === e) {
        p['className'] = 'visible-content'
      }else{
        p['className'] = 'hidden-content'
      }
      console.log(p['className'])
    }
  }
}
