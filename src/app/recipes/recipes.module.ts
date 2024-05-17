import { NgModule } from "@angular/core";
import { recipes } from "./recipes.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations : [
        recipes,
        EditRecipeComponent,
        RecipeDetailsComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeStartComponent
    ],
    imports : [
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class recipesModule {}