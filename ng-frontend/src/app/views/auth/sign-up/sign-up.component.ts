import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/roles.model';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(
    public authService: AuthService
  ) { }

  // userRole: Roles = 1;

  ngOnInit() { }
}
