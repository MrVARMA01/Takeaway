import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantServiceService } from 'src/app/services/restaurant/restaurant-service.service';

@Component({
  selector: 'app-restaurantpage',
  templateUrl: './restaurantpage.component.html',
  styleUrls: ['./restaurantpage.component.css']
})
export class RestaurantpageComponent implements OnInit{

  restaurant:any;
  items:any;
  constructor(private route:ActivatedRoute,private rs:RestaurantServiceService){
  }
  
  ngOnInit(){
    this.route.params.subscribe((params:any) =>{
      console.log("params:- "+params);
        if(params['id'])
        {
        let reponese1=this.rs.getRestaurantById(params['id']);
        reponese1.subscribe((data)=>this.restaurant=data)
        }
        console.log("rid:= "+ this.restaurant);

        let responce2= this.rs.getMenu(params['id']);
        responce2.subscribe((data)=>this.items=data);
      console.log(this.items);
    })
  }

  public addToCart(m:any,r:any)
    {
      
    }

}
