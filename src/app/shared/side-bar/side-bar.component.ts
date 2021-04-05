import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  showClose = false;
  signedIn;
  userPhoto = new Observable//: string = localStorage.getItem('photoUrl')
  photo;

  @HostListener('window:click', ['$event.target'])
  onClick(e){
    if(e.textContent === 'menu'){
      this.showClose = true
    }else{
      this.showClose = false
    }
  }

  constructor(public authService: FirebaseAuthService) {
    this.authService.signedIn$
      .subscribe(data=>{
        this.signedIn = data
        if(this.signedIn===true){
          this.userPhoto = Observable.create(observer=>{
            observer.next(JSON.stringify(localStorage.getItem('photoURL')))
          })

          this.userPhoto.subscribe(value =>{
            this.photo = value
            this.photo = JSON.parse(this.photo)
            console.log(this.photo)
          } );
        }
      })

  }

  ngOnInit(): void {
  }

  logoutUser(){
    this.authService.logout()
  }

}
