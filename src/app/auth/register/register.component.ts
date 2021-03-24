import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassowords } from '../validators/match-passowords';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    password: new FormControl('', [Validators.required]),
    confirmPass: new FormControl('', [Validators.required])
  }, { validators: [this.matchPassword.validate]})

  constructor(private matchPassword: MatchPassowords) { }

  ngOnInit(): void {
  }

  onRegisterClick(){
    console.log(`form`)
    // TO DO !!!!!!!!!
  }
}
