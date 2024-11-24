import { ProductModel } from '../db/model/product.js';

export const getAllProducts = async () => {
  const products = await ProductModel.find();
  return products;
};

export const getProductById = async (id) => {
  const product = await ProductModel.findById(id);
  return product;
};

export const createProduct = async (data) => {
  const product = ProductModel.create(data);
  return product;
};
