import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  user!: User;
  constructor(public authService: AuthService) {
    this.user = this.user = {
              uid: 1,
              displayName: "",
              email: "",
              rol: "Admin",
              photoURL: "",
              emailVerified: true,
              token: "",
          };
  }
}
