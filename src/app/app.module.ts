import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantManagementComponent } from './catalogos/restaurantes/restaurantManagement.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './common/service/ApiService';
import { HttpModule } from '@angular/http';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantManagement', component: RestaurantManagementComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
