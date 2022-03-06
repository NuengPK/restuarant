import { Component } from "@angular/core";

@Component({
  selector:'app-food-menu-item',
  templateUrl:'./food-menu-item.component.html',
  styleUrls:['./food-menu-item.component.css']
})

export class FoodMenuItem {
foodMenuId = 1;
randomNum = 0;
arrayIcon = ['fish','shrimp','bacon','drumstick','carrot']
randomNumIcon = this.arrayIcon[Math.floor(Math.random() * this.arrayIcon.length)]
//foodMenuStatus = "Available";
foodMenuStatus = Math.random() > 0.5 ?"Available":"Not Available";
color = ""
getFoodMenuStatus(){
return  this.foodMenuStatus
  // if(this.randomNum > 0.8){
  //   this.randomNumIcon = "fish"
  // }else if(this.randomNum > 0.6){
  //   this.randomNumIcon = "shrimp"
  // }else if(this.randomNum > 0.4){
  //   this.randomNumIcon = "bacon"
  // }else if(this.randomNum > 0.2){
  //   this.randomNumIcon = "drumstick"
  // }else{ this.randomNumIcon = "carrot"  }

  // console.log(this.randomNumIcon)
}
getColor() {
  // if(this.foodMenuStatus === "Available"){
  // this.color = "green"
  // } else {this.color = "red"}
  return this.foodMenuStatus === "Available" ? "green":"gray";//this.color
}
}

