import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
   
  constructor(public userService:UserService) { }
   
  User:any;
  ngOnInit(): void {
    this.userDetails();
  }

  userDetails(){
      this.userService.getUser().subscribe((res)=>{
      this.User=res;
    });
  }
}
