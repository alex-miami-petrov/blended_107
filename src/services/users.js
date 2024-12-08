import createHttpError from 'http-errors';
import { User } from '../db/model/user.js';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { Session } from '../db/model/session.js';

export const registerUser = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) throw createHttpError(409, 'Email in use');

  const hashCryptedPassword = await bcrypt.hash(payload.password, 10);

  return await User.create({ ...payload, password: hashCryptedPassword });
};

export const loginUser = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) throw createHttpError(401, 'Email or password is invalid');

  const isMatch = await bcrypt.compare(payload.password, user.password);

  if (!isMatch) throw createHttpError(401, 'Email or password is invalid');

  await Session.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await Session.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + 15 * 60 * 1000),
    refreshTokenValidUntil: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });
};
