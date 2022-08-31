import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  userList: any[] = [];
  isLoading = true;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {

    setTimeout(() => {

      this._userService.getUsers().subscribe(users => {
        for (let user of users) {
          user.imgUrl = "https://picsum.photos/300/250"
        }

        this.userList = users;
      })      
      this.isLoading = false;
    }, 500);
    

  }

}
