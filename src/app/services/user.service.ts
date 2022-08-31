import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://gorest.co.in/public/v2/users";
  token: string = "96ae102093f4a010a7b0f139ae21c152682fd291fb26b135fc0e91aae4132854";

  constructor(private http : HttpClient) { }


  getUsers() :Observable<any>{
    return this.http.get<any>(this.url,{headers:{Authorization: "Bearer " + this.token}});
  }

  getUser(id : number):Observable<any>{
    return this.http.get<any>(this.url + `/${id}` ,{headers:{Authorization: "Bearer " + this.token}});
  }
}
