import express from 'express';
import { getAllCustomers, getCustomerById, createCustomers, updateCustomer, deleteCustomer } from '../controllers/customers.js';
const router = express.Router();
router.get('/customers',getAllCustomers);
router.get('/customers/:id',getCustomerById);
router.post('/customers',createCustomers);
router.put('/customers/:id',updateCustomer);
router.delete('/customers/:id',deleteCustomer);
export default router;

