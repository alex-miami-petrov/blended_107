import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllProductsController,
  getProductByIdController,
  postProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', ctrlWrapper(getProductByIdController));
router.post('/', ctrlWrapper(postProductController));

export default router;
