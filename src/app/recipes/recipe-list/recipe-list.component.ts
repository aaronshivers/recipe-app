import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipes: RecipeModel[] = [
    new RecipeModel('test recipe', 'this is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new RecipeModel('another test recipe', 'this is also a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  @Output() currentRecipe = new EventEmitter<RecipeModel>();

  onSelectRecipe(recipe: RecipeModel) {
    this.currentRecipe.emit(recipe);
  }
}
