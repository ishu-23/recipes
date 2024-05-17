import { Ingredients } from "../shared/ingredients.model";
import { ReactiveFormsModule } from "@angular/forms";

export class Recipe{
   public name:string;
   public desc:string;
   public imgpath:string;
   public ingredients:Ingredients[];

   constructor(name:string,desc:string,imgpath:string,ingredients:Ingredients[]){
    this.name=name;
    this.desc=desc;
    this.imgpath=imgpath;
    this.ingredients=ingredients;
   }

}