import { RecipeModel } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20),
      ]
    ),
    new RecipeModel(
      'Big Fat Burger',
      'What else to you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
