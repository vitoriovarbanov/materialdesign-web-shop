import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  databaseUrl = 'https://health-web-shop.firebaseio.com'
  test
  constructor(private http: HttpClient) {}


  getFoodBeveragesProducsts(){
    return this.http.get('https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/foodbeverages')
      .pipe(map(data=>{
        return data['documents'].map(x=>x['fields'])
      }))
  }
}
