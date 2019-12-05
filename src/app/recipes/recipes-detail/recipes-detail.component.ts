import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: [ './recipes-detail.component.css' ]
})
export class RecipesDetailComponent {
  @Input() currentRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  onAddIngredientToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.currentRecipe.ingredients);
  }
}
