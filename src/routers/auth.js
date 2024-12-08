import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserController } from '../controllers/users.js';
import { userJoiSchema } from '../validation/user.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(userJoiSchema),
  ctrlWrapper(registerUserController),
);

export default router;
