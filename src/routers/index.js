import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import userRouter from './auth.js';
import productRouter from './products.js';

const router = Router();

router.use('/user', userRouter);
router.use('/products', productRouter);

export default router;
