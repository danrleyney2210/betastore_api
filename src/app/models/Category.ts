import { Schema, model } from 'mongoose';

export const Category = model('Category', new Schema({
  name: {
    type: String,
    require: true
  }
}));