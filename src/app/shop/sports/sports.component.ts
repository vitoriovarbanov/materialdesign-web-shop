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
  sportsFitnessProducts = Number(localStorage.getItem('cartItems'))
  count

  constructor(private srvc: ProductsService) {
    this.srvc.getSportFitnessProducts()
      .subscribe((data: SportsFitnessProducts) => {
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
        this.sportsFitnessProducts = Number(localStorage.getItem('cartItems'))
      })
    this.srvc.productsInCart.next(Number(localStorage.getItem('cartItems')))
  }
}
