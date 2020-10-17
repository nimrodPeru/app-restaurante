import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish.interface';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  //name:string = 'cevichito de app-hijo';
  //@Input() name:string = 'cevichito de app-hijo';
  private _name;
  private _totalIngredients;
 @Input() set dish(value:Dish){
  this._name=this.generateName(value.name);
  this._totalIngredients=value.ingredients.length
  console.log('::',value)
 }
 get name():Dish{
    return this._name;
 }
 get totalIngredients():number{
   return this._totalIngredients;
 }
  /*
  private _name;
  get name():string{
    return this._name;
  }
  @Input() set name(value:string){
    this._name = value //this.generateName(value)
    //console.log('::->',value)
    console.log('::->',this._name)
  }
*/
  
  constructor() { }

  ngOnInit(): void {
  }
  generateName(name:string){
    return `el nombre es: ${name}`
  }
}
