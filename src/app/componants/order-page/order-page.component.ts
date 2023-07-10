import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {

  customer= new FormGroup(
    {
      name: new FormControl("",[Validators.required,Validators.minLength(2)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      cno: new FormControl("",[Validators.required,Validators.minLength(10)]),
      date: new FormControl("",[Validators.required,Validators.nullValidator]),
      time: new FormControl("",[Validators.required,Validators.nullValidator])
    })
  
    constructor(){
    }

    show()
    {
      console.log(this.customer.controls['name'].value);
    }

    placeOrder()
    {
      
    }

}
