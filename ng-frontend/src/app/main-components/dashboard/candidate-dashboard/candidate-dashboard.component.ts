import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent implements OnInit {
  
  user: User | any = this.authService.user$;
  panelOpenState = false;
  
  constructor(public authService: AuthService) {  }

  // user!: User;
  // constructor(public authService: AuthService) {
  //   this.user = this.user = {
  //             uid: 1,
  //             displayName: "",
  //             email: "",
  //             role: "candidato",
  //             photoURL: "",
  //             emailVerified: true,
  //         };
  // }
  ngOnInit(): void {}
}