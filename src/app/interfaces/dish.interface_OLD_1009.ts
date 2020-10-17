//creo mi propia variable
interface Notify{
    dish: Dish;
    status:boolean;
}
export interface DishStructure extends Ingredient{
    name:string;
    ingredients:Ingredient;
    getIngredients():string[];
    prepare():boolean;
    notify(): Notify
    
}

export interface Ingredient{
    name:string
}
export class Dish implements DishStructure{
    name:string;
    ingredients:Ingredient;
    constructor(){
        this.name = 'generico'
    }
    getIngredients():string[]{
        return ['']
    }
    prepare():boolean{
        return true;
    }
    notify():Notify{
        return{
            dish:{} as DishStructure,
            status:true,
        }
    }
 
}