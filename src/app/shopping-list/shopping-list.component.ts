import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 15),
    new IngredientModel('grapes', 4),
  ];

  constructor() { }

  ngOnInit() {
  }

}
