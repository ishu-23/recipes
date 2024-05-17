import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { recipes } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  /*{path:'recipes',component:recipes, children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:EditRecipeComponent},
    {path:':id',component:RecipeDetailsComponent},
    {path:':id/edit',component:EditRecipeComponent}
  ] },*/
  //{path:'shopping-list',component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
