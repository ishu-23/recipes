import { Component, ViewChild, viewChild} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import {shoppingListSerivce} from '../shopping-list.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
   
  editedItem:Ingredients;
  editMode=false;
  editedIngridentIndex:number;
  @ViewChild('f', { static: false }) shoppingListForm :NgForm;

  constructor(private shoppingListSerivce:shoppingListSerivce){}

  ngOnInit(){
    this.shoppingListSerivce.onEditingItem.subscribe(
      (index)=>{
        this.editMode=true;
        this.editedIngridentIndex=index;
        this.editedItem=this.shoppingListSerivce.getIngridentByIndex(index);
        this.shoppingListForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        }
        )
      }
    )
  }

  onAddItem(form:NgForm){
    const value=form.value;
    console.log("form",form.value);
    const newIngredient= new Ingredients(value.name,value.amount);
    if(this.editMode){
      this.shoppingListSerivce.updateIngrident(this.editedIngridentIndex,newIngredient);
    }
    else{
      this.shoppingListSerivce.addIngredient(newIngredient);
    }
    this.editMode=false;
    this.shoppingListForm.reset();
  }
  onClear(){
    this.shoppingListForm.reset();
  }

  onDelete(){
    this.shoppingListSerivce.deleteIngrident(this.editedIngridentIndex);
    this.onClear();
  }
}

