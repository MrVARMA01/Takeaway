import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/models/orders';
import { Restaurant } from 'src/app/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http:HttpClient) { }

  public getRestaurantsList(){
    return this.http.get("http://localhost:8002/api/a2/auth/restaurants");
  }
  public AddRestaurant(restaurant:Restaurant):Observable<any>{
    return this.http.post<any>("http://localhost:8002/api/a2/auth/restaurant",restaurant,{responseType:'text'as'json'});
  }
  public deleteRestaurant(Id:number)
  {
    return this.http.delete("http://localhost:8002/api/a2/auth/delete/"+Id);
  }
  public getRestaurantById(id:number):Observable<any>{
    return this.http.get("http://localhost:8002/api/a2/auth/restaurant-by-id/"+id);
  }
  
  

  public getMenu(id:number)
  {
    return this.http.get("http://localhost:8002/api/a2/auth/menu/"+id);
  }



  public getMyOrders(email:string)
  {
    return this.http.get("http://localhost:8002/api/a2/auth/my-orders/"+email);
  }
  public addToOrders(order:Orders):Observable<any>
  {
    return this.http.post("http://localhost:8002/api/a2/auth/add-to-orders",order,{responseType:'text'as'json'});
  }
}
