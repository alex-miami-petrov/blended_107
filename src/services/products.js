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
export const updateProduct = async (id, payload) => {
  const product = ProductModel.findByIdAndUpdate(id, payload, { new: true });
  return product;
};

export const deleteProduct = async (id) => {
  const product = await ProductModel.findByIdAndDelete(id);
  return product;
};
