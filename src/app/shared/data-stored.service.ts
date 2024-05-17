import { HttpClient } from "@angular/common/http";
import { recipeService } from "../recipes/recipe.serivce";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.module";
import { map } from "rxjs/operators";
import { recipes } from "../recipes/recipes.component";

@Injectable({providedIn:'root'})
export class dataStoredService{
    constructor(private recipeService:recipeService,private http:HttpClient){}
    saveData(){
        const recipes=this.recipeService.getRecipes();
        this.http.put('https://recipe-book-cd880-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(
            data =>{
                console.log("recipes",data);
            }
        )
    }

    getData(){
        this.http.get<Recipe[]>('https://recipe-book-cd880-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
            map(
                recipes =>{
                    return recipes.map(recipe =>{
                        return {...recipe,ingredients:recipe.ingredients ? recipe.ingredients :[]}
                });
                }
            )
        )
        .subscribe(
            data =>{
                this.recipeService.setRecipes(data);
                console.log("data",data);
            }
        )
    }
}