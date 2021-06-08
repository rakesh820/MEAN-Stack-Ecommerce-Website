import { User } from './../../Models/user.model';
import { UserService } from './../../Services/user.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  contact: number;
  street: string;
  city: string;
  state: string;
  constructor(private userService: UserService) { }
   a:any;
  ngOnInit() {}

  addUser() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      contact: this.contact,
      street: this.street,
      city: this.city,
      state: this.state,
    } 
    this.userService.postUser(user).subscribe((res)=>{});
    alert("You have registered successfully!!")
  }
}

