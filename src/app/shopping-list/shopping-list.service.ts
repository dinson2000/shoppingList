// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model';
export class ShoppinggListService{
    ingredientChanges=new Subject<Ingredients[]>();
    startedEditing=new Subject<number>();
   private ingredients:Ingredients[]=[
        new Ingredients('Apples',5),
        new Ingredients('Tomaotes',3),
      ];
      getIngredient(){
        return this.ingredients.slice();
      }
      getIngredients(index:number){
        return this.ingredients[index];
      }
      addIngredient(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientChanges.next(this.ingredients.slice());
      }
      addIngredients(ingredients:Ingredients[]){
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanges.next(this.ingredients.slice());
      }
      updateIngredient(index:number,newIngredient:Ingredients){
        this.ingredients[index]=newIngredient;
        this.ingredientChanges.next(this.ingredients.slice());
      }
      deleteIngredients(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanges.next(this.ingredients.slice())
      }
}