import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FoodProducts } from '../products.service'
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-food-beverages',
  templateUrl: './food-beverages.component.html',
  styleUrls: ['./food-beverages.component.css']
})
export class FoodBeveragesComponent implements OnInit {
  products
  panelOpenState = false;
  foodBeveragesInCart

  constructor(private srvc: ProductsService) {
     this.srvc.getFoodBeveragesProducsts()
      .subscribe((data: FoodProducts)=>{
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

  addItemsToCart(){
    this.srvc.productsInCart
      .subscribe(data=>this.foodBeveragesInCart=data)
    this.srvc.productsInCart.next(this.foodBeveragesInCart+1)
  }

}
