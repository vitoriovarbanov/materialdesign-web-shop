import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { take } from 'rxjs/operators';

interface User {
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  signedIn$ = new BehaviorSubject(null)
  newUser: boolean;

  constructor(public afAuth: AngularFireAuth,
    private router: Router, private firestoreDatabase: AngularFirestore) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        //console.log(user)
        this.signedIn$.next(true)
        if (user.photoURL) {
          localStorage.setItem('photoUrl', user.photoURL)
        }
        this.firestoreDatabase.doc(`users/${user.uid}`).valueChanges()
          .pipe(take(1)).subscribe(data=>{
            console.log(data)
            this.newUser = data['newUser']
            console.log(this.newUser)
          })
        if (this.newUser === true) {
          this.signedIn$.next(false)
        }
        return this.firestoreDatabase.doc(`users/${user.uid}`).valueChanges()
      } else {
        this.signedIn$.next(false)
      }
    })
  }

  async AuthLogin(provider) {
    return await this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!')
        this.router.navigate(['/'])
        return this.updateUserData(result.user, result.additionalUserInfo.isNewUser)
      }).catch((error) => {
        console.log(error)
      })
  }

  registerUserWithMail(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.router.navigate(['auth/login'])
        console.log(data)
        return this.updateUserData(data.user, data.additionalUserInfo.isNewUser)
      })
      .catch(err => console.log(err.message))
  }

  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
        this.signedIn$.next(true)
        /*  this.newUser = false;
         this.getUserFirebase()
           .subscribe((data) => {
             const arr = Object.entries(data)
             const userLocalStorage = JSON.parse(localStorage.getItem('user'))
             if (userLocalStorage) {
               const userEmail = userLocalStorage.email;
               const userDatabaseMail = arr.find(x => x[1].email === userEmail)
               if (!userDatabaseMail) {
                 this.signedin$.next(false)
               } else {
                 let id = userDatabaseMail[0]
                 localStorage.setItem('firebaseId', id)
                 this.id.next(localStorage.getItem('firebaseId'))
               }
             }
           }) */
        this.router.navigate(['/'])
        console.log('Nice, it worked!');
        return this.updateUserData(result.user, result.additionalUserInfo.isNewUser)
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.signedIn$.next(false)
      localStorage.clear();
      this.router.navigate(['/']);
    })
  }

  updateUserData({ uid, email, displayName, photoURL }: User, newUser) {
    //Sets user data to firestore on login with google/ register
    const userRef: AngularFirestoreDocument<User> = this.firestoreDatabase.doc(`users/${uid}`)

    const data = {
      uid,
      email,
      displayName,
      photoURL,
      newUser
    }
    return userRef.set(data, { merge: true })
  }

}
