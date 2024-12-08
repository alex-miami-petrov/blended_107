import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  postProductController,
  updateProductController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  productsSchema,
  updateProductsSchema,
} from '../validation/products.js';
import { validateId } from '../middlewares/validateId.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', validateId, ctrlWrapper(getProductByIdController));
router.post(
  '/',
  validateBody(productsSchema),
  ctrlWrapper(postProductController),
);

router.patch(
  '/:productId',
  validateId,
  validateBody(updateProductsSchema),
  ctrlWrapper(updateProductController),
);
router.delete('/:productId', validateId, ctrlWrapper(deleteProductController));

export default router;
