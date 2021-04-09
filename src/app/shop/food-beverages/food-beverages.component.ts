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
  foodBeveragesInCart = Number(localStorage.getItem('cartItems'))
  count

  constructor(private srvc: ProductsService) {
     this.srvc.getFoodBeveragesProducsts()
      .subscribe((data: FoodProducts)=>{
        this.products = data
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
    let str_count = localStorage.getItem("cartItems");
    //get a numeric value from str_count, put it in count
    if (str_count == null || str_count == "null"){
      this.count = 0;
    } else {
      this.count = parseInt(str_count);
    } // end if
    //increment count
    this.count++;
    //display count
    //store count
    localStorage.setItem("cartItems", this.count);
    this.srvc.productsInCart
      .subscribe(data=>{
        this.foodBeveragesInCart = Number(localStorage.getItem('cartItems'))
      })
    this.srvc.productsInCart.next(Number(localStorage.getItem('cartItems')))
  }

  sortItems(e){
    /* let items = Array.from(document.getElementsByClassName('card card'));
    console.log(items)
    let sortedItems = items.sort((a,b)=>{
      let firstElement = a.childNodes[4].childNodes[3].firstChild.textContent.split('$')
      let secondElement = b.childNodes[4].childNodes[3].firstChild.textContent.split('$')
      return Number(firstElement[0]) - Number(secondElement[0])
    })
    console.log(sortedItems) */
  }

}
