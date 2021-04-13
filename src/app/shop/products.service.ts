import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { FoodProducts } from './models/FoodProduts';
import { SportsFitnessProducts } from './models/SportsFitnessProducts';
import { ProductsInCart } from './models/ProductsInCart';
import { ProductDetails } from './models/ProductDetails';

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

  getItemDetails(category,productID){
    return this.http.get<ProductDetails>(`https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/${category}`)
      .pipe(map(data => {
        let allItems = data['documents'].map(x => x['fields'])
        let neededItem = allItems.find(x=>Number(x.index.intergerValue = productID));
        return neededItem
      }))

  }

  getUserCurrentItemsInCart() {
    return this.firestoreDb.doc<ProductsInCart>(`users/${localStorage.getItem('uid')}`).valueChanges()
      .pipe(take(1),
        map((data: ProductsInCart) => {
          let arr = []
          if (!data.cartItems) {
            return arr
          }
          let unique = data.cartItems
            .map(e => e['nameOfItem'])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(obj => data.cartItems[obj])
            .map(e => data.cartItems[e]);
          unique.map(x => x.quantity = 0)
          let duplicateIds = data.cartItems
            .map(e => e['nameOfItem'])
            .map((e, i, final) => final.indexOf(e) !== i && i)
            .filter(obj => data.cartItems[obj])
            .map(e => data.cartItems[e]["nameOfItem"])
          let duplicate = data.cartItems.filter(obj => duplicateIds.includes(obj.nameOfItem));
          for (const iterator of duplicate) {
            let findSingleItems = unique.find(x => x.nameOfItem === iterator.nameOfItem)
            if (findSingleItems) {
              findSingleItems.quantity++
            }
          }
          unique.map(x => {
            if (x.quantity === 0) {
              return x.quantity = 1
            }
          })
          return unique
        }))
  }

  emptyCartFunctionUpdate() {
    return this.firestoreDb.doc<ProductsInCart>(`users/${localStorage.getItem('uid')}`).valueChanges()
      .pipe(take(1),map((data)=>{
        if(!data.cartItems){
          return []
        }
      }))
  }

  validateCartSubtotalSum() {
    return this.firestoreDb.doc<ProductsInCart>(`users/${localStorage.getItem('uid')}`).valueChanges()
      .pipe(take(1),map((data)=>{
         let subTotal = 0;
         if(!data.cartItems){
           subTotal = 0
         }else{
           data.cartItems.forEach(el=>{
             subTotal += el.priceOfItem
           })
         }
         return subTotal
      }))
  }

  //INCREASING COUNTER & SUM WHEN ADDING NEW ITEMS IN CART
  count: any
  sum: any
  addedItems: number = 1;
  updateCart(priceOfItem, nameOfItem, productIndex) {
    let str_sum = localStorage.getItem("cartSum");
    let str_count = localStorage.getItem("cartItems");
    //get a numeric value from str_count, put it in count
    if (str_count == null || str_count == "null" || str_sum == null || str_sum == "null") {
      this.count = 0;
    } else {
      this.count = parseInt(str_count);
      this.sum = Number(str_sum)
    }

    // Add a new document in collection "users"
    this.firestoreDb.collection("users").doc(localStorage.getItem('uid')).update({
      cartItems: firebase.firestore.FieldValue.arrayUnion({ priceOfItem, nameOfItem, productIndex, quantity: this.addedItems++ })//[],
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    //

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
