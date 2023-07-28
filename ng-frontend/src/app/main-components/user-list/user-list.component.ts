import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: any[] = [];
  panelOpenState = false;
  userService?: any;
  

  constructor(userService: UserService) {
    this.users = this.users = [
      {id: 1, nombreSocial: "User1" },
      {id: 2, nombreSocial: "User2" },
      {id: 3, nombreSocial: "User2" },
      {id: 4, nombreSocial: "User1" },
      {id: 5, nombreSocial: "User2" },
      {id: 6, nombreSocial: "User2" },
    ];
  
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.users = users;
    })
  }

  async onClickDelete(user: any) {
    const response = await this.userService.deleteUser(user);
    console.log(response);
  }

}
