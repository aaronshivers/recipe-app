import {
  Component, ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { IngredientModel } from '../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: [ './shopping-list-edit.component.css' ]
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  @Output() ingredient = new EventEmitter<IngredientModel>();

  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(ingredientName, ingredientAmount);
    this.ingredient.emit(newIngredient);
  }
}
