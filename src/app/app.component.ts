import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';
import { ProductsService } from './shop/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  itemsCart
  constructor(private elementRef: ElementRef, private router: ActivatedRoute, private srvc: ProductsService) {}

  ngAfterViewInit() {
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'wheat';
  }
}
