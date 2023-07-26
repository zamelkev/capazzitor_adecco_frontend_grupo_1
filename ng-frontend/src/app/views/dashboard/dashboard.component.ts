import { Component, OnInit } from '@angular/core';
import { CandidateDashboardComponent } from 'src/app/main-components/candidate-dashboard/candidate-dashboard.component';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user!: User;
  constructor(public authService: AuthService) {
    this.user = this.user = {
              uid: 1,
              displayName: "",
              email: "",
              rol: "Candidato",
              photoURL: "",
              emailVerified: true,
          };
  }
  ngOnInit(): void {}

}
