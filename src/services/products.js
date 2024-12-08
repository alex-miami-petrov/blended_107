import { ProductModel } from '../db/model/product.js';

export const getAllProducts = async (filter) => {
  const products = ProductModel.find();

  if (filter.category) {
    products.where('category').equals(filter.category);
  }

  if (filter.minPrice) {
    products.where('price').gte(filter.minPrice);
  }

  if (filter.maxPrice) {
    products.where('price').lte(filter.maxPrice);
  }

  return products;
};

export const getProductById = async (id) => {
  const product = await ProductModel.findById(id);
  return product;
};

export const createProduct = async (data) => {
  const product = await ProductModel.create(data);
  return product;
};
export const updateProduct = async (id, payload) => {
  const product = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return product;
};

export const deleteProduct = async (id) => {
  const product = await ProductModel.findByIdAndDelete(id);
  return product;
};
