import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-food-beverages',
  templateUrl: './food-beverages.component.html',
  styleUrls: ['./food-beverages.component.css']
})
export class FoodBeveragesComponent implements OnInit {
  products

  constructor(private srvc: ProductsService) {
     this.srvc.getFoodBeveragesProducsts()
      .subscribe(data=>{
        this.products = data
        console.log(this.products)
      })
  }

  ngOnInit(): void {
  }

}
