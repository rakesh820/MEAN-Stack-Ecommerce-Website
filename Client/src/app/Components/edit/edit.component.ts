import { UserService } from '../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService]
})
export class EditComponent implements OnInit {

  constructor(private userService:UserService) { }
  
  user:any;

  name:string;
  email:string;
  password:string;
  contact:string;
  street: string;
  city: string;
  state: string;
  
  ngOnInit(): void {
    //this.getdetails();
  }
  
  //getdetails(){
    //this.userService.getUser().subscribe((res)=>{
    //     this.user=res;
   // });
 // }

  edit() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      contact: this.contact,
      street: this.street,
      city: this.city,
      state: this.state,
    } 
    this.userService.updateUser(user,this.email).subscribe((res)=>{
      if(res=="Updated"){
          alert("Details Updated Successfully!!");
      }
      else{
        alert("Server Error!!");
      }
    });
  }
}
