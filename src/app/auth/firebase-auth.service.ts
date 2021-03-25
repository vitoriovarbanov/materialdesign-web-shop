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

  logout() {
    return this.afAuth.signOut().then(() => {
      this.signedIn$.next(false)
      /* localStorage.removeItem('user');
      localStorage.removeItem('firebaseId');
      this.router.navigate(['auth/login']); */
    })
  }

}
