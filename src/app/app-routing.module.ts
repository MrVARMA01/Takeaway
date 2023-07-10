import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { SearchComponent } from './componants/search/search.component';
import { RestaurantpageComponent } from './componants/restaurantpage/restaurantpage.component';
import { LoginComponent } from './componants/login/login.component';
import { ProfileComponent } from './componants/profile/profile.component';
import { RegisterComponent } from './componants/register/register.component';
import { CartComponent } from './componants/cart/cart.component';
import { OrdersComponent } from './componants/orders/orders.component';
import { OrderPageComponent } from './componants/order-page/order-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem',component:SearchComponent},
  {path:'restaurant/:id',component:RestaurantpageComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'my-orders',component:OrdersComponent},
  {path:'order-page',component:OrderPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
