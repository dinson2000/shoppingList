import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppinggListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService{
    // recipeSelected=new Subject<Recipe>();
    recipesChanged=new Subject<Recipe[]>();
  //  private recipes:Recipe[]=[
  //       new Recipe('A Test Recipe','This is a simple test','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
  //       [
  //         new Ingredients("Meat",1),
  //         new Ingredients("French",2)
  //       ]),
  //       new Recipe('Big Fat Burger','This is a simple test','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
  //       [
  //         new Ingredients("Buns",2),
  //         new Ingredients("Patty",1)
  //       ]),
  //     ];
  private recipes:Recipe[]=[];
      constructor(private slService:ShoppinggListService){}
      setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients:Ingredients[]){
      this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe){
      this.recipes[index]=newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }

}