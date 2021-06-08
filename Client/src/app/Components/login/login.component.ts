import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) {}
   
  email:string;
  password:string;
  login;
  log;
  ngOnInit(): void {
  }
  
  sendLogin(){
    const login = {
      email: this.email,
      password: this.password
    }
    this.login=true;
    this.log=false;
    this.login=this.userService.login;
    this.log=this.userService.log
    this.userService.send(login).subscribe(data => {});
    alert("You have successfully Signed in!!");
  }
}
