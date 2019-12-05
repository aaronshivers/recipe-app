import { IngredientModel } from '../shared/ingredient-model';

export class RecipeModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public imageUrl: string,
    public ingredients: IngredientModel[],
  ) {
  }
}
