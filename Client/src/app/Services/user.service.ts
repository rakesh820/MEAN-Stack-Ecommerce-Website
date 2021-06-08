import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
     email:string;
     password:string;
     login:boolean;
     log:boolean;
     mail="abc@gmail.com";

  postUser(user){
    var headers=new HttpHeaders();
     headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/User",user,{headers:headers});
  }

  getUser(){
    return this.http.get("http://localhost:3000/User/"+this.mail);
  }

  updateUser(user,email){
    var headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
      return this.http.patch("http://localhost:3000/User/"+email,user,{headers:headers});
  }

  send(login){
      var headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
      return this.http.post("http://localhost:3000/Signin",login,{headers:headers}).pipe(map((res:Response)=>res.json()));
  }

}
