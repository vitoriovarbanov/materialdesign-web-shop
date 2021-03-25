import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(public afAuth: AngularFireAuth,
    private router: Router) { }

  /* async loginWithGoogle(){
      await  this.afAuth.signInWithPopup(provider)
      this.router.navigate(['admin/list']);
  } */

  // Auth logic to run auth providers
  async AuthLogin(provider) {
    return await this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

  registerUserWithMail(email: string, password: string){
    this.afAuth.createUserWithEmailAndPassword(email,password)
        .then(data=>{
          console.log(data)
          this.router.navigate(['auth/login'])
        })
        .catch(err=>console.log(err.message))
  }

}
