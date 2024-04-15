import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = []

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers() {
    this._userService.getListUsers().subscribe((data) => {
      console.log(data);
      this.listUsers = data.listUsers; 
    });
  }
}