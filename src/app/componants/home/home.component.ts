import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  restaurants:any;
  restaurentData:any;

  constructor(private rs:RestaurantServiceService){}

  ngOnInit(): void {
   
      let responce=this.rs.getRestaurantsList();
      console.log("Responce= "+responce);
      responce.subscribe((data)=>this.restaurants=data);

       // private route:ActivatedRoute,*constructor parameter*
    
  //   this.route.params.subscribe(params =>{
  //     if(params['searchItem'])
  //     this.foods = this.fs.getall().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()))        
  //     else
  //     this.foods=this.fs.getall();
  // })
    }
}
