const parseCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory = (category) =>
    ['books', 'electronics', 'clothing', 'other'].includes(category);

  if (!isCategory(category)) return;
  return category;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseFloat(number);

  if (Number.isNaN(parsedNumber)) {
    return;
  }
  return parsedNumber;
};
export const parseFilterParams = (query) => {
  const { category, minPrice, maxPrice } = query;

  const parsedCategory = parseCategory(category);
  const parsedMin = parseNumber(minPrice);
  const parsedMax = parseNumber(maxPrice);
  return {
    category: parsedCategory,
    minPrice: parsedMin,
    maxPrice: parsedMax,
  };
};
