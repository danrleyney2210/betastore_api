import { Request, Response } from 'express';
import { Ingredients } from '../../models/Ingredients';

export async function createIngredients(req: Request, res: Response) {
  try {
    const { price, name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    // Verifica se já existe um ingrediente com o mesmo nome
    const existingIngredient = await Ingredients.findOne({ name });
    if (existingIngredient) {
      return res
        .status(400)
        .json({ error: 'An ingredient with this name already exists' });
    }

    const ingredients = await Ingredients.create({
      price,
      name,
    });

    res.status(201).json(ingredients);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}