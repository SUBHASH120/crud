import express from 'express';
import { getImages, createImages, upload } from '../controllers/images.js'
const router = express.Router();
router.get('/images',getImages);
router.post('/images',upload.single('profile_image'),createImages);
export default router;