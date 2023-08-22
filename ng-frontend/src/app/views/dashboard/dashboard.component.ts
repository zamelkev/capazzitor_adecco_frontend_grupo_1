import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  user: any = this.authService.userData;
  // user: User | any;
  
  constructor(public authService: AuthService) { 
    
    console.log(this.user);

    this.user = this.user = {
      uid: this.user.uid,
      displayName: this.user.displayName,
      email: this.user.email,
      role: this.user.role,
      photoURL: this.user.photoURL,
      emailVerified: this.user.emailVerified,
    };

    // console.log(this.user);
   }
  ngOnInit(): void {}

}
