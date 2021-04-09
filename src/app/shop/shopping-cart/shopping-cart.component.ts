import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() itemsInCart
  @Input() itemsSum
  constructor(private srvc: ProductsService) { }

  ngOnInit(): void {
  }

  emptyCart(){
    localStorage.setItem("cartItems", '0');
    localStorage.setItem("cartSum", '0');
    this.srvc.productsInCart$.next(0)
    this.srvc.cartItemsSum$.next(0)
  }
}
