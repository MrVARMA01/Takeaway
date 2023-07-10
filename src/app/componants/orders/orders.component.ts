import { Component } from '@angular/core';
import { RestaurantServiceService } from 'src/app/services/restaurant/restaurant-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {


  constructor(private rs:RestaurantServiceService){

  }
  ngOnInit(){
  }
}
