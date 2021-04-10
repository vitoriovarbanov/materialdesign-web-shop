import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-display-cart-items',
  templateUrl: './display-cart-items.component.html',
  styleUrls: ['./display-cart-items.component.css']
})
export class DisplayCartItemsComponent implements OnInit {

  constructor(private srvc: ProductsService) {
    const test = this.srvc.getUserCurrentItemsInCart()
    test.subscribe(data=>console.log(data))
  }

  ngOnInit(): void {
  }

}
