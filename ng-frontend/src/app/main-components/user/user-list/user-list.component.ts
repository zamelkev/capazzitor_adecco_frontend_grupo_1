import { Component, NgIterable, OnInit } from '@angular/core';
import { Observer } from '@firebase/util';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: User[] /*| Observable<User[]>*/ | NgIterable<any[]> | null | undefined = [];

  panelOpenState = false;

  constructor(private authService: AuthService) {
    this.users = [
      {
      uid: 1234,
      email: 'prueba@prueba.es',
      displayName: 'Prueba',
      password: '1234',
      role: 'candidate',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      emailVerified: true,
      }
    ];
  }

  ngOnInit(): void {
    this.authService?.getUsers().subscribe( users => {
      this.users = users;
    })
  }

  // async onClickDelete(user: User) {
  //   const response = await this.authService.deleteUser(user);
  //   console.log(response);
  // }

}
