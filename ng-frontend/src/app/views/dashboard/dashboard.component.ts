import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CandidateDashboardComponent } from 'src/app/main-components/dashboard/candidate-dashboard/candidate-dashboard.component';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  // user!: User;
  user: User | any = this.authService.user$;
  constructor(public authService: AuthService) { 
    this.user = this.user = {
      uid: 1,
      displayName: "",
      email: "",
      role: "candidate",
      photoURL: "",
      emailVerified: true,
    };
   }
  ngOnInit(): void {}

}
