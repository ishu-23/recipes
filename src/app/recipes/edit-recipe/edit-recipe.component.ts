import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {recipeService} from '../recipe.serivce'
import { FormArray, FormControl, FormGroup} from '@angular/forms';
import { Ingredients } from '../../shared/ingredients.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {

  index:number;
  editMode=false;
  recipeForm!:FormGroup;

  constructor(private router:ActivatedRoute, private recipeService:recipeService,private route:Router){}

  ngOnInit(){
    this.router.params.subscribe(
      (params)=>{
        this.index=+params['id'];
        this.editMode = params['id'] !=null;
        this.initForm();
      }
    );
  }
  private initForm(){
    let name='';
    let imagePath='';
    let desc='';
    let recipeingredients=new FormArray([]);
    
    if(this.editMode){
      const recipe=this.recipeService.getRecipe(this.index);
      name=recipe.name;
      imagePath=recipe.imgpath;
      desc=recipe.desc;

      if(recipe['ingredients']){
        console.log("form",recipe);
        for(let Ingredient of recipe.ingredients){
          recipeingredients.push(
            new FormGroup({
              'name': new FormControl(Ingredient.name,Validators.required),
              'amount': new FormControl(Ingredient.amount,Validators.required)
            })
          )
        }
      }
    }
      this.recipeForm=new FormGroup({
        'name': new FormControl(name,Validators.required),
        'imagePath': new FormControl(imagePath,Validators.required),
        'desc':new FormControl(desc,Validators.required),
        'ingredients':recipeingredients
      });
  }
  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.index,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  getControls() {
    //console.log( (this.recipeForm.get('ingredients') as FormArray).controls)
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onCancel(){
    this.route.navigate(['../'],{relativeTo:this.router});
  }
  ondelete(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
