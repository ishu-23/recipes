import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';
import {recipeService} from '../recipe.serivce'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes:Recipe[];
  subscription:Subscription;

  constructor(private recipeService:recipeService, private router:Router,private route:ActivatedRoute){}
  
  ngOnInit(){
    this.recipes=this.recipeService.getRecipes();
    this.subscription=this.recipeService.onRecipeChnaged.subscribe(
      (recipes:Recipe[]) =>{
        this.recipes=recipes;
      }
    )
  }
  onAddRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
