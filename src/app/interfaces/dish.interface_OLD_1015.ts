
export interface Dish extends Ingredient{
    name:string;
    ingredients:Ingredient[];

    
}

export interface Ingredient{
    name:string
    qty:number
}
