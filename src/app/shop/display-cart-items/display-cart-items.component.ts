import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'

@Component({
  selector: 'app-display-cart-items',
  templateUrl: './display-cart-items.component.html',
  styleUrls: ['./display-cart-items.component.css']
})
export class DisplayCartItemsComponent implements OnInit {
  displayedColumns: string[] = ['products', 'price', 'quantity', 'total'];
  itemsInCart

  constructor(private srvc: ProductsService, private firestoreDb: AngularFirestore) {
    this.itemsInCart = this.srvc.getUserCurrentItemsInCart()
  }

  ngOnInit(): void {
  }

  emptyCart() {
    localStorage.setItem("cartItems", '0');
    localStorage.setItem("cartSum", '0');
    this.srvc.productsInCart$.next(0)
    this.srvc.cartItemsSum$.next(0)
    this.firestoreDb.collection("users").doc(localStorage.getItem('uid')).update({
      cartItems: firebase.firestore.FieldValue.delete()
    })
      .then(() => {
        console.log("Items removed from cart");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    this.itemsInCart = this.srvc.emptyCartFunctionUpdate()
  }

}
