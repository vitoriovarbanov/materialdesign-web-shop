import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  showClose = false;
  signedIn: boolean = false;

  @HostListener('window:click', ['$event.target'])
  onClick(e){
    if(e.textContent === 'menu'){
      this.showClose = true
    }else{
      this.showClose = false
    }
  }

  constructor(private authService: FirebaseAuthService) {
    this.authService.signedIn$
      .subscribe(data=>{
        this.signedIn = data
        console.log(data)
      })
  }

  ngOnInit(): void {
  }

  logoutUser(){
    this.authService.logout()
  }

}
