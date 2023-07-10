import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newRegistration: User=new User;
  constructor(private loginservice:LoginService, private route:Router) {
   }

  ngOnInit():void {
  }

  public registerNow(){
    // console.log(this.newRegistration);
    // if(this.newRegistration.firstname || this.newRegistration.lastname||this.newRegistration.contactNumber||this.newRegistration.email||this.newRegistration.password === null||undefined)
    // {
    // }
    let resp=this.loginservice.UserRegistration(this.newRegistration);
    resp.subscribe((user:any)=>
    {
    if (user) 
    {
      console.log("user="+user);
      console.log("Submitted Successfully!");
      this.route.navigate(['']);
    }
  },(error)=>{alert("Registration failed!"+"please enter proper details.");})
  }
}
