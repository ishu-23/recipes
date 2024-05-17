import { Ingredients } from "../shared/ingredients.model";
import { Recipe } from "./recipe.module";
import {shoppingListSerivce} from '../shopping-list/shopping-list.service';
import { Injectable } from "@angular/core";
import { Subject, Subscribable, Subscription } from "rxjs";

@Injectable()
export class recipeService{

  
  constructor(private shoppingListSerivce:shoppingListSerivce){}

    onRecipeChnaged=new Subject<Recipe[]>();  
    /*recipes:Recipe[]=[
        new Recipe("Burger","most loved fast-food!! ","https://wallpapercave.com/wp/wp1987065.jpg",[new Ingredients("meat",1),new Ingredients("bread",1)]),
        new Recipe("fries", "made with potato", "",[new Ingredients("potato",11),new Ingredients("oil",2)])
      ]*/

      private recipes:Recipe[]=[];

      setRecipes(recipes:Recipe[]){
        console.log(recipes);
        this.recipes=recipes;
        this.onRecipeChnaged.next(recipes);
      }
      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(id:number){
        return this.recipes[id];
      }

      addIngredientToShoppingList(ingredients:Ingredients[]){
        this.shoppingListSerivce.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.onRecipeChnaged.next(this.recipes.slice());
      }
      updateRecipe(index:number,recipe:Recipe){
        this.recipes[index]=recipe;
        this.onRecipeChnaged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.onRecipeChnaged.next(this.recipes.slice());
      }
}