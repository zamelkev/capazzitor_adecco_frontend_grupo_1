import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { defer, from, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  user: User | any = this.authService.userData;
  constructor(public authService: AuthService) {
    // console.log(this.user);
    // this.user = this.user = {
    //           uid: 1,
    //           displayName: "",
    //           email: "",
    //           role: "candidate",
    //           photoURL: "",
    //           emailVerified: false,
    //       };
  }
  ngOnInit(): void {}

}
