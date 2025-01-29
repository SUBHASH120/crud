import express from 'express';
import { getAllProducts, getProductsById, createProducts, updateProducts, deleteProducts } from '../controllers/products.js';
const router = express.Router();
router.get('/products',getAllProducts);
router.get('/products/:id',getProductsById);
router.post('/products', createProducts);
router.put('/products/:id',updateProducts);
router.delete('/products/:id',deleteProducts);
export default router;