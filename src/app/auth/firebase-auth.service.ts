import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  signedIn$ = new BehaviorSubject(null)

  constructor(public afAuth: AngularFireAuth,
    private router: Router) {
      this.afAuth.authState.subscribe((user)=>{
        if(user){
          console.log(user)
          localStorage.setItem('photoUrl', user.photoURL)
          this.signedIn$.next(true)
        }else{
          this.signedIn$.next(false)
        }
      })
  }



  async AuthLogin(provider) {
    return await this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        console.log('You have been successfully logged in!')
        this.router.navigate(['/'])
      }).catch((error) => {
        console.log(error)
      })
  }

  registerUserWithMail(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data)
        this.router.navigate(['auth/login'])
      })
      .catch(err => console.log(err.message))
  }

  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
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
        console.log('Nice, it worked!', result);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.signedIn$.next(false)
      /* localStorage.removeItem('user');
      localStorage.removeItem('firebaseId');
      this.router.navigate(['auth/login']); */
    })
  }

}
