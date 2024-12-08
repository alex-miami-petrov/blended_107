import createHttpError from 'http-errors';
import { User } from '../db/model/user.js';

export const registerUser = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) throw createHttpError(409, 'Email in use');

  return user;
};
