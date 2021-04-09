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
  foodBeveragesInCart = Number(localStorage.getItem('cartItems'))
  sumInCart = Number(localStorage.getItem('cartSum'))
  sortCriteria: string = 'default'

  constructor(private srvc: ProductsService) {
    this.srvc.getFoodBeveragesProducsts()
      .subscribe((data: FoodProducts) => {
        this.products = data
      })
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

  //INCREASING COUNTER & SUM WHEN ADDING NEW ITEMS IN CART
  count: any
  sum: any
  addItemsToCart(e) {
    let str_sum = localStorage.getItem("cartSum");
    let str_count = localStorage.getItem("cartItems");
    //get a numeric value from str_count, put it in count
    if (str_count == null || str_count == "null" || str_sum == null || str_sum == "null") {
      this.count = 0;
    } else {
      this.count = parseInt(str_count);
      this.sum = parseInt(str_sum)
    } // end if
    //increment count
    this.sum += e;
    this.count++;
    //display count
    //store count
    localStorage.setItem("cartSum", this.sum);
    localStorage.setItem("cartItems", this.count);
    this.srvc.productsInCart
      .subscribe(data => {
        this.foodBeveragesInCart = Number(localStorage.getItem('cartItems'))
      })
    this.srvc.sumInCartt
      .subscribe(data => {
        this.sumInCart = Number(localStorage.getItem('cartSum'))
      })
    this.srvc.productsInCart.next(Number(localStorage.getItem('cartItems')))
    this.srvc.sumInCartt.next(Number(localStorage.getItem('cartSum')))
  }


  sortItems(e) {
    this.sortCriteria = e;
  }

}
