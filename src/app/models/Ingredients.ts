import { model, Schema } from 'mongoose';

export const Ingredients = model(
  'Ingredients',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  }),
);