import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import {recipeService} from '../recipe.serivce'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {

   recipe:Recipe;
   id:number;

  constructor(private recipeService:recipeService,private router:ActivatedRoute,private route:Router){}

  ngOnInit(){
    this.router.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    )
  }

  toShoppingList(){
    console.log("in",this.recipe.ingredients);
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
  onEdit(){
    this.route.navigate(['edit'],{relativeTo:this.router});
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['../'],{relativeTo:this.router})
  }

}
