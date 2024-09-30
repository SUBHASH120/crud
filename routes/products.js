import express from 'express';
import { getAllProducts, getProductsById, createProducts } from '../controllers/products.js';
const router = express.Router();
router.get('/products',getAllProducts);
router.get('/products/:id',getProductsById);
router.post('/products', createProducts);
export default router;