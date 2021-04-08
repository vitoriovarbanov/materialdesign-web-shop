import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FoodProducts } from '../products.service'
@Component({
  selector: 'app-food-beverages',
  templateUrl: './food-beverages.component.html',
  styleUrls: ['./food-beverages.component.css']
})
export class FoodBeveragesComponent implements OnInit {
  products
  panelOpenState = false;

  constructor(private srvc: ProductsService) {
     this.srvc.getFoodBeveragesProducsts()
      .subscribe((data: FoodProducts)=>{
        this.products = data
        console.log(this.products)
      })
  }

  ngOnInit(): void {
  }

}
