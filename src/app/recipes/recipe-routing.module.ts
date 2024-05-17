import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { recipes } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";

const routes: Routes = [
    {
        path: 'recipes', component: recipes, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: EditRecipeComponent },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: EditRecipeComponent }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class recipeRoutingModule { }