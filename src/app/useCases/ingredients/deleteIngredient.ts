import { Request, Response } from 'express';
import { Ingredients } from '../../models/Ingredients';

export async function deleteIngredient(req: Request, res: Response) {
  try {
    const ingredientId = req.query.id;

    if (ingredientId) {
      const result = await Ingredients.deleteOne({ _id: ingredientId });

      if (result.deletedCount && result.deletedCount > 0) {
        res.status(200).json({ message: 'Ingredient deleted successfully' });
      } else {
        res.status(404).json({ message: 'Ingredient not found' });
      }
    } else {
      res.status(400).json({ message: 'Invalid ingredient ID' });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}