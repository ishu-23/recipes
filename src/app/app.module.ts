import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { recipes } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { dropdownDirective } from './shared/dropdown.directive';
import { shoppingListSerivce } from './shopping-list/shopping-list.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { recipeService } from './recipes/recipe.serivce';
import { HttpClientModule } from '@angular/common/http';
import { recipesModule } from './recipes/recipes.module';
import { shoppingListModule } from './shopping-list/shoppingList.module';
import { shoppingListRoutingModule } from './shopping-list/shopping-list-routing.module';
import { recipeRoutingModule } from './recipes/recipe-routing.module';
import { AuthComponent } from './auth/auth.component';
import { loadingSpinner } from './shared/loadding-spinner/loadding.spinner';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    //recipes,
    //RecipeListComponent,
    //RecipeDetailsComponent,
    //RecipeItemComponent,
   // ShoppingListComponent,
    //ShoppingEditComponent,
    dropdownDirective,
    AuthComponent,
    //EditRecipeComponent
    loadingSpinner
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    recipesModule,
    shoppingListModule,
    shoppingListRoutingModule ,
    recipeRoutingModule],
  providers: [shoppingListSerivce, recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
