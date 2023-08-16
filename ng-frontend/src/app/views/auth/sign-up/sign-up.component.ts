import { Component, Injectable, OnInit } from '@angular/core';
import { User, Role } from 'src/app/models/user.model';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(
    public authService: AuthService,
    // public userRole: Roles
  ) { }

  ngOnInit() { }
}
