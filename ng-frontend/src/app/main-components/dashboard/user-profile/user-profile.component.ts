import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User | any = this.authService.userData;

  constructor(public authService: AuthService, private router: Router,) {
    if (!this.user) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }

}
