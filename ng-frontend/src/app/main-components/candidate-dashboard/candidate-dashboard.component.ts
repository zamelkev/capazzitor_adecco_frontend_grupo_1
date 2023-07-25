import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent implements OnInit {
  user!: User;
  constructor(public authService: AuthService) {
    this.user = this.user = {
              uid: 1,
              displayName: "",
              email: "",
              rol: "Candidato",
              photoURL: "",
              emailVerified: true,
              token: "",
          };
  }
  ngOnInit(): void {}
}