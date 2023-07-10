import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User=new User;
  data:any;
  key!:any;


  constructor(private loginservice:LoginService, private route:Router) { }
  ngOnInit(){

  }


  public loginnow()
  {
    let resp=this.loginservice.login(this.user);
    resp.subscribe((data)=>
    {
      console.log("User Token : "+data);
      if (data) 
    {
      console.log("  Login Successful !  ");
      this.route.navigate(['']);
    }
    },(error)=>{alert("Login Failed!  "+"please try again.");
  }); 
  this.key=true; 

  }


  public logout(){
    this.key=false;
  }
}
