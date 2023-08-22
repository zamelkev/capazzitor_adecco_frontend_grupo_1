import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  
  constructor(public authService: AuthService) { 
    console.log(this.user);
    
    this.user = this.user = {
      uid: this.user.uid,
      displayName: this.user.uid,
      email: "",
      role: this.user.role,
      photoURL: this.user.photoURL,
      emailVerified: true,
    };
   }
  ngOnInit(): void {}

}
