import express from 'express';
import { getJoins,  createJoins} from '../controllers/joins.js';
const router = express.Router();
router.get('/joins',getJoins);
router.post('/joins',createJoins);
export default router;