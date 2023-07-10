import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent 
{
  // token:LoginComponent["token"];

  ngOnInit() {
  // console.log(this.token);
  }
}
