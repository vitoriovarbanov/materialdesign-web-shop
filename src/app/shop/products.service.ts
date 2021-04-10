import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase  from 'firebase/app'



export interface FoodProducts {
  price: { doubleValue: number };
  productName: { stringValue: string };
  index: { integerValue: number }
}[]

export interface SportsFitnessProducts {
  price: { doubleValue: number };
  productName: { stringValue: string };
  index: { integerValue: number }
}[]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  databaseUrl: string = 'https://health-web-shop.firebaseio.com'
  test
  productsInCart$ = new BehaviorSubject(Number(localStorage.getItem('cartItems')))
  cartItemsSum$ = new BehaviorSubject(Number(localStorage.getItem('cartSum')))


  constructor(private http: HttpClient, private firestoreDb: AngularFirestore) { }

  getFoodBeveragesProducsts() {
    return this.http.get<FoodProducts>('https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/foodbeverages')
      .pipe(map(data => {
        return data['documents'].map(x => x['fields'])
      }))
  }

  getSportFitnessProducts() {
    return this.http.get<SportsFitnessProducts>('https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/sports')
      .pipe(map(data => {
        return data['documents'].map(x => x['fields'])
      }))
  }

  //INCREASING COUNTER & SUM WHEN ADDING NEW ITEMS IN CART
  count: any
  sum: any
  updateCart(priceOfItem,nameOfItem) {
    let str_sum = localStorage.getItem("cartSum");
    let str_count = localStorage.getItem("cartItems");
    //get a numeric value from str_count, put it in count
    if (str_count == null || str_count == "null" || str_sum == null || str_sum == "null") {
      this.count = 0;
    } else {
      this.count = parseInt(str_count);
      this.sum = parseInt(str_sum)
    } // end if
     // Add a new document in collection "users"
     this.firestoreDb.collection("users").doc(localStorage.getItem('uid')).update({
      cartItems: firebase.firestore.FieldValue.arrayUnion({priceOfItem,nameOfItem,quantity:this.count})//[],
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    //increment count
    this.sum += priceOfItem;
    this.count++;
    //display count
    //store count
    localStorage.setItem("cartSum", this.sum);
    localStorage.setItem("cartItems", this.count);
    this.productsInCart$.next(this.count)
    this.cartItemsSum$.next(this.sum)
  }

}
