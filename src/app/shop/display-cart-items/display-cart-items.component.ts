import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-display-cart-items',
  templateUrl: './display-cart-items.component.html',
  styleUrls: ['./display-cart-items.component.css']
})
export class DisplayCartItemsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  itemsInCart

  constructor(private srvc: ProductsService) {
    this.itemsInCart = this.srvc.getUserCurrentItemsInCart()
  }

  ngOnInit(): void {
  }

}
