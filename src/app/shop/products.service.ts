import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

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
  databaseUrl = 'https://health-web-shop.firebaseio.com'
  test
  productsInCart = new BehaviorSubject(Number(localStorage.getItem('cartItems')))

  constructor(private http: HttpClient) {
    this.productsInCart.subscribe(data=>console.log(data))
  }

  getFoodBeveragesProducsts() {
    return this.http.get<FoodProducts>('https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/foodbeverages')
      .pipe(map(data => {
        return data['documents'].map(x => x['fields'])
      }))
  }

  getSportFitnessProducts(){
    return this.http.get<SportsFitnessProducts>('https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/sports')
      .pipe(map(data => {
        return data['documents'].map(x => x['fields'])
      }))
  }
}
