import express from 'express';
import { getAllTestProducts, getTestProductsById,  createTestProducts, updateTestProducts, deleteTestProducts} from '../controllers/testproducts.js';
const router = express.Router();
router.get('/testproducts',getAllTestProducts);
router.get('/testproducts/:id',getTestProductsById);
router.post('/testproducts',createTestProducts);
router.put('/testproducts/:id',updateTestProducts);
router.delete('/testproducts/:id',deleteTestProducts);
export default router;