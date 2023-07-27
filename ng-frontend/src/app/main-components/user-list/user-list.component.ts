import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  usuarios: any[] = [];
  panelOpenState = false;

  constructor() {
    this.usuarios = this.usuarios = [
    {id: 1, nombreSocial: "User1" },
    {id: 2, nombreSocial: "User2" },
    {id: 3, nombreSocial: "User2" },
    {id: 4, nombreSocial: "User1" },
    {id: 5, nombreSocial: "User2" },
    {id: 6, nombreSocial: "User2" },
  ];
  }

  ngOnInit(): void {
    
  }

}
