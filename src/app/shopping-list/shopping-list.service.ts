import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class shoppingListSerivce{
    oningredientAdded =new Subject <Ingredients[]>();
    onEditingItem=new Subject<number>();
    private ingredients:Ingredients[]=[
        new Ingredients("apple",150),new Ingredients("mango",900)
      ]
    
    getIngridents(){
        return this.ingredients.slice();
    }
    
    updateIngrident(index:number,ingredient:Ingredients){
        this.ingredients[index]=ingredient;
        this.oningredientAdded.next(this.ingredients.slice());
    }
    getIngridentByIndex(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        console.log(this.ingredients.slice());
        this.oningredientAdded.next(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.oningredientAdded.next(this.ingredients.slice());
        console.log(ingredients);
    }
    deleteIngrident(index:number){
        this.ingredients.splice(index,1);
        this.oningredientAdded.next(this.ingredients.slice());
    }

}