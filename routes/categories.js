import express from 'express';
import { getAllCategories, getCategoriesById, createCategories, updateCategories, deleteCategories } from '../controllers/categories.js';
const router = express.Router();
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoriesById);
router.post('/categories',createCategories);
router.put('/categories/:id',updateCategories);
router.delete('/categories/:id',deleteCategories);
export default router;