import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  postProductController,
  updateProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', ctrlWrapper(getProductByIdController));
router.post('/', ctrlWrapper(postProductController));

router.patch('/:productId', ctrlWrapper(updateProductController));
router.delete('/:productId', ctrlWrapper(deleteProductController));

export default router;
