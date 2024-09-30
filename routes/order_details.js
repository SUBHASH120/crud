import express from 'express';
import { getAllOrderDetails, getOrderDetailsById, createOrderDetails, updateOrderDetails, deleteOrderDetails } from '../controllers/order_details.js';
const router = express.Router();
router.get('/order_details',getAllOrderDetails);
router.get('/order_details/:id',getOrderDetailsById);
router.post('/order_details',createOrderDetails);
router.put('/order_details/:id',updateOrderDetails);
router.delete('/order_details/:id',deleteOrderDetails);
export default router;