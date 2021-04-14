import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient, private firestoreDatabase: AngularFirestore) { }

  createPostReviewRequest(category,id){
    /* return this.http.get('https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/sports')
      .pipe(map(data => {
        const arr = data['documents'].map(x => x['fields'])
        return arr.find(x=>x.index.integerValue=id)
      })) */

    const firestore = firebase.firestore();
    const col = firestore.collection('sports')
    console.log(col)
    const query = col.where('index','==',Number(id));
    query.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }
}
