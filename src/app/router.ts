import { Router } from 'express';
import path from 'node:path';
import { listCategories } from './useCases/categories/listCategories';
import { createCategory } from './useCases/categories/createCategory';
import { listProducts } from './useCases/products/listProducts';
import { createProduct } from './useCases/products/createProduct';
import multer from 'multer';
import { listProductsByCategories } from './useCases/categories/listProductsByCategories';


import { listIngredients } from './useCases/ingredients/listIngredients';
import { createIngredients } from './useCases/ingredients/createIngredients';


const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../../', 'uploads'));
    },

    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export const router = Router();

//list Categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

//List products
router.get('/products', listProducts);

//Create products
router.post('/products', upload.single('image'), createProduct);

//Get products by Category
router.get('/categories/:categoryId/products', listProductsByCategories);





//List ingredients
router.get('/ingredients', listIngredients);

//Post ingredients
router.post('/ingredients', createIngredients);

