import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role, User } from 'src/app/models/user.model';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  
  signupForm: FormGroup;
  user: User | any = this.authService.user$;

  constructor(
    public authService: AuthService,
  ) { 
    this.user.role = { name:'candidate', value:true }

    this.signupForm = new FormGroup({
      role: new FormControl(),
      displayName: new FormControl(),
      email: new FormControl(),
      photoURL: new FormControl(),
      password: new FormControl(),
      emailVerified: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  updateUserRole() {
    switch (this.user) {
      case 'admin':
        this.user.role = { name:'admin', value:true };
        break;
      case 'candidate':
        this.user.role = { name:'candidate', value:true };
        break;
      case 'company':
        this.user.role = { name:'company', value:true };
        break;
      default:
        this.user.role = { name:'', value:false};
        break;
    }
  }

  async onSignupSubmit() {
    const response = await this.authService.SignUp(this.signupForm.value);
  }
}
