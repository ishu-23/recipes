import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports : [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class shoppingListModule {}