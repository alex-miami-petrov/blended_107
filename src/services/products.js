import { ProductModel } from '../db/model/product.js';

export const getAllProducts = async () => {
  const products = await ProductModel.find();
  return products;
};
