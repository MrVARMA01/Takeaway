import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componants/header/header.component';
import { HomeComponent } from './componants/home/home.component';
import { SearchComponent } from './componants/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './componants/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantpageComponent } from './componants/restaurantpage/restaurantpage.component';
import { LoginComponent } from './componants/login/login.component';
import { RegisterComponent } from './componants/register/register.component';
import { ProfileComponent } from './componants/profile/profile.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OrdersComponent } from './componants/orders/orders.component';
import { OrderPageComponent } from './componants/order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartComponent,
    RestaurantpageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    OrdersComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
