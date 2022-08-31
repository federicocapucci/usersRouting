import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id : number;
  email = "";
  gender = "";  
  name = "";
  status = ""; 
  imgURL = "https://picsum.photos/200/150"
  isLoading : boolean = true;


  constructor(private aRoute: ActivatedRoute, private _userService : UserService) {
    this.id = parseInt(this.aRoute.snapshot.paramMap.get('id') || "0");

   }
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this._userService.getUser(this.id).subscribe(data => {
      
      console.log(data);
      
      ({name: this.name, email: this.email, status: this.status, gender: this.gender} = data);
      
        this.isLoading = false  

      });
  }

}
