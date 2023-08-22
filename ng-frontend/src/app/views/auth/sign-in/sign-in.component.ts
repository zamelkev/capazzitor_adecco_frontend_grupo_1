import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  loginForm: FormGroup;
  user: User | any = this.authService.user$;
  
  constructor(
    public authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      role: new FormControl(),
      displayName: new FormControl(),
      email: new FormControl(),
      photoURL: new FormControl(),
      password: new FormControl(),
      emailVerified: new FormControl(),
    });
  }
  ngOnInit() { }
  async onLoginSubmit() {
    const response = await this.authService.SignIn(this.loginForm.value);
  }
}
