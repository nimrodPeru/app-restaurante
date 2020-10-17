import { Component, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish.interface';
import * as dishesJson from './../../assets/dishes.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //name:string = 'ceviche';
  name = 'ceviche';
  //status = true;
  dish : Dish;

  dishes : Dish[] = dishesJson;



  constructor() { 
    this.dishes
    console.log(this.dishes);
  }

  ngOnInit(): void {
  }

}
