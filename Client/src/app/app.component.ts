import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {

  constructor(private userService : UserService){}
  verify=false;
  log=true;
  title = 'e-mart';

  ngOnInit(): void {
    this.isLoggedin();
  }

  isLoggedin(){
    //this.verify=this.userService.login;
    //this.log=this.userService.log;
    console.log(this.userService.log);
  }
}
