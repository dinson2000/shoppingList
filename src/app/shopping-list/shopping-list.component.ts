import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppinggListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients:Ingredients[]=[];
  private idChangeSub:Subscription
  constructor(private slService:ShoppinggListService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredient();
    this.idChangeSub=this.slService.ingredientChanges.subscribe(
      (ingredients:Ingredients[])=>{
        this.ingredients=ingredients;
      }
    );
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.idChangeSub.unsubscribe();
  }
  
}
