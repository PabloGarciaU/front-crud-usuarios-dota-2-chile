import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = [];
  loading: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers() {
    this.loading = true;

    this._userService.getListUsers().subscribe(
      (data) => {
        this.listUsers = data.listUsers;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    );
  }

  deleteUser(id: number) {
    this.loading = true;
    this._userService.deleteUser(id).subscribe(() => {
      this.getListUsers();
    })
  }

}