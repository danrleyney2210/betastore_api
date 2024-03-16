import { Request, Response } from 'express';
import { Ingredients } from '../../models/Ingredients';

export async function listIngredients(req: Request, res: Response) {
  let name = {};

  if (req.query.name) {
    const nameRegex = new RegExp(String(req?.query?.name), 'i');
    name = { name: nameRegex };
  }

  try {
    const ingredients = await Ingredients.find(name);

    res.status(200).json(ingredients);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}