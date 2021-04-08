import { Component, OnInit } from '@angular/core';
import { ProductsService, SportsFitnessProducts } from '../products.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  products
  sportsFitnessProducts

  constructor(private srvc: ProductsService) {
    this.srvc.getSportFitnessProducts()
      .subscribe((data: SportsFitnessProducts) => {
        this.products = data
        console.log(this.products)
      })
  }

  ngOnInit(): void {
  }

  lowValue: number = 0;
  highValue: number = 10;

  // used to build an array of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  addItemsToCart() {
    this.srvc.productsInCart
      .subscribe(data => this.sportsFitnessProducts = data)
    this.srvc.productsInCart.next(this.sportsFitnessProducts + 1)
  }
}
