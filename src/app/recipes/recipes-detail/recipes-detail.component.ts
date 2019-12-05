import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: [ './recipes-detail.component.css' ],
})
export class RecipesDetailComponent implements OnInit {
  recipe: RecipeModel;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) {
  }

  onAddIngredientToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
}
