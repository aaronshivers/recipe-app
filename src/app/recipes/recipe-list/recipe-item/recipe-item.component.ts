import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: [ './recipe-item.component.css' ],
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;
  @Input() index: number;

  constructor(private recipeService: RecipeService) {
  }
}
