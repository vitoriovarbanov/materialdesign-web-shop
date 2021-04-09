import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FoodProducts } from '../products.service'
import { PageEvent } from '@angular/material/paginator';
import { SortByPipe } from '../sort-by.pipe'
@Component({
  selector: 'app-food-beverages',
  templateUrl: './food-beverages.component.html',
  styleUrls: ['./food-beverages.component.css']
})
export class FoodBeveragesComponent implements OnInit {
  products
  foodBeveragesInCart: number;
  sumInCart: number;
  sortCriteria: string = 'default'

  constructor(private srvc: ProductsService) {
    this.srvc.getFoodBeveragesProducsts()
      .subscribe((data: FoodProducts) => {
        this.products = data
      })
      this.srvc.productsInCart$.subscribe(data=>{
        this.foodBeveragesInCart = data
      })
      /* this.srvc.cartItemsSum.subscribe(data=>{
        this.sumInCart = data
      }) */
  }

  ngOnInit(): void {
  }

  //PAGINATOR SETTINGS,VISIBLE ITEMS PER PAGES
  lowValue: number = 0;
  highValue: number = 10;

  // used to build an array of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  addItemsToCart(e) {
    this.srvc.updateCart(e)
    this.srvc.productsInCart$.subscribe(data=>{
      this.foodBeveragesInCart = data
    })
    this.srvc.cartItemsSum$.subscribe(data=>{
      this.sumInCart = data
    })
    /* this.srvc.productsInCart
      .subscribe(data => {
        this.foodBeveragesInCart = Number(localStorage.getItem('cartItems'))
      })
    this.srvc.sumInCartt
      .subscribe(data => {
        this.sumInCart = Number(localStorage.getItem('cartSum'))
      })
    this.srvc.productsInCart.next(Number(localStorage.getItem('cartItems')))
    this.srvc.sumInCartt.next(Number(localStorage.getItem('cartSum'))) */
  }

  sortItems(e) {
    this.sortCriteria = e;
  }

}
