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

  user: User | any = this.authService.user$;
  // userData: Observable<any> | User | any = defer(() => from(this.authService.getUserData as unknown as Observable<User>));;
  // userData: User | any = this.authService.userData;
  // user: User | any = new User(this.userData.uid, this.userData.email, this.userData.displayName, this.userData.password, this.userData.role, this.userData.photoURL, this.userData.emailVerified);
  
  constructor(public authService: AuthService) { 

    // this.user = this.authService.userData;
    // console.log(this.user);
    // console.log(this.userData);
    // this.userData = this.getUserData(this.user.uid);
    // console.log(this.userData);
    this.user = {
      uid: "",
      displayName: "",
      email: "",
      emailVerified: false,
      role: "",
      photoURL: "",
    }
    console.log(this.user);

  }

  ngOnInit():void {
  }

}
