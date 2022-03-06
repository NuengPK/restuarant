import { Component, OnInit } from '@angular/core';

let tot = Math.random()

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
 allowAddMenuItem = false;
 menuItemCreationStatus = "ไม่มีการเพิ่มเมนูรายการ"
 menuItemName = "";
 menuItemCreation = false;
 menuItemNameTrim = "";
 menuList = ["ข้าวมันไก่","ข้าวหมูแดง"]
  constructor() {
    setTimeout (()=>{this.allowAddMenuItem = true},tot*1000)
   }

  ngOnInit(): void {
  }
  onUpdeteMenuName(evt: Event){
    this.menuItemName = (<HTMLInputElement>evt.target).value
    console.log(this.menuItemName)
    console.log(evt)
  }
  onCreateMenuItem(){
    this.menuItemNameTrim = this.menuItemName.trim()
    this.menuList.push(this.menuItemName);
    this.menuItemCreation = true
    this.menuItemCreationStatus = "รายการเมนู "+this.menuItemName+" ได้ถูกเพิ่มขึ้นเเล้ว"
    // if(this.menuItemNameTrim.length>0){//
    //   this.menuItemCreation = true
    //   this.menuItemCreationStatus = "รายการเมนู "+this.menuItemName+" ได้ถูกเพิ่มขึ้นเเล้ว"
    // } else this.menuItemCreation = false
  }
}
//console.log("timeTest : ",tot*1000)
