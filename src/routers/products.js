import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllProductsController } from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));

export default router;
