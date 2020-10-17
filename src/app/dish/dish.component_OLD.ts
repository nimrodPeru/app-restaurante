import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  //name:string = 'cevichito de app-hijo';
  //@Input() name:string = 'cevichito de app-hijo';
  private _name;
  get name():string{
    return this._name;
  }
  @Input() set name(value:string){
    this._name = value //this.generateName(value)
    //console.log('::->',value)
    console.log('::->',this._name)
  }
 
  /*mal
  private _name;

  set name(value:string){
    this._name = value;
    console.log('::-<>',this._name)
  }
  */
  
  constructor() { }

  ngOnInit(): void {
  }
  generateName(name:string){
    return `el nombre es: ${name}`
  }
}
