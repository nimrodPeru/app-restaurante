import { Component, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //name:string = 'ceviche';
  name = 'cevihe';
  //status = true;
  dish : Dish
 
  dishes_1 = [
    "Arroz con Pollo",
    "Cebiche",
    "Tacu tacu",
    "pollo a la brasa"
  ]
 
  dishes_old= [{
    name:"ceviche", ingredients:[{name:"pescado",cantidad:"2"},{name:"limon",cantidad:"3"}]
  },{
    name:"pollo a la brasa",ingredients:{name:"aji panka",cantidad:"2"}
  }
  ]

  dishes= [{
    name:"ceviche", ingredients:[{name:"pescado",cantidad:"2"},{name:"limon",cantidad:"3"}]
  },{
    name:"pollo a la brasa", ingredients:[{name:"pollo",cantidad:"1"},{name:"aderezo",cantidad:"10"}]
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
