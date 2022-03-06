import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodMenuItem } from './food-menu-item/food-menu-item.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodMenuItem,
    FoodMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
