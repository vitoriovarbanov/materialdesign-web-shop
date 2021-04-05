import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  showClose = false;
  signedIn;
  userPhoto = new BehaviorSubject(null);
  photo;
  checkProfilePicture

  @HostListener('window:click', ['$event.target'])
  onClick(e) {
    if (e.textContent === 'menu') {
      this.showClose = true
    } else {
      this.showClose = false
    }
  }

  constructor(public authService: FirebaseAuthService) {
    this.authService.signedIn$
      .subscribe(data => {
        this.signedIn = data
        if (this.signedIn === true) {
          //debugger;
          this.checkProfilePicture = localStorage.getItem('photoURL')
          if(this.checkProfilePicture === 'null'){
            this.userPhoto.next('../../assets/profile-pic/profile.svg')
          }else{
            this.userPhoto.next(this.checkProfilePicture)
          }

          this.userPhoto.subscribe(value => {
            this.photo = value
            /* this.photo = JSON.parse(this.photo)
            if(this.photo === null){
              this.userPhoto.next('../../assets/profile-pic/profile.svg')
            } */
            console.log(this.photo)
          });
        }
      })

  }

  ngOnInit(): void {
  }

  logoutUser() {
    this.authService.logout()
  }

}
