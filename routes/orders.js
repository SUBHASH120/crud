import express from 'express';
import { getAllOrders, getOrdersById, createOrders, updateOrders, deleteOrders } from '../controllers/orders.js';
const router = express.Router();
router.get('/orders',getAllOrders);
router.get('/orders/:id',getOrdersById);
router.post('/orders', createOrders);
router.put('/orders/:id',updateOrders);
router.delete('/orders/:id',deleteOrders);
export default router;