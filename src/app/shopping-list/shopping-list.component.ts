import { Component } from '@angular/core';

import { Ingredients } from '../shared/ingredients.model';
import { shoppingListSerivce } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  
  ingredients:Ingredients[];
  private iChangedSubject:Subscription;
  constructor(private shoppingListSerivce:shoppingListSerivce){}

  ngOnInit() {
    this.ingredients = this.shoppingListSerivce.getIngridents();
    this.iChangedSubject=this.shoppingListSerivce.oningredientAdded.subscribe(
      (ingredients:Ingredients[]) =>{
        this.ingredients=ingredients;
      }
    )
  }
  ngOnDestroy(){
    this.iChangedSubject.unsubscribe();
  }
  onEditItem(index:number){
    this.shoppingListSerivce.onEditingItem.next(index);
  }

}
