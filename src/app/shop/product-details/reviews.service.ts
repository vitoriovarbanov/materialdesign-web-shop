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

  createPostReviewRequest(category,id,reviewText,rating){
    const firestore = firebase.firestore();
    const col = firestore.collection(category)
    const query = col.where('index','==',Number(id));
    query.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var docRef = this.firestoreDatabase.collection(category).doc(doc.id);
          docRef.update({
            reviews: firebase.firestore.FieldValue.arrayUnion({text: reviewText, rating})
        });
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }
}
