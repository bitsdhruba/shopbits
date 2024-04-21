export const getCategories = () => "https://dummyjson.com/products/categories";
export const getProducts = (skip) =>
  `https://dummyjson.com/products?limit=10&skip=${skip}`;

export const getDetail = (id) => `https://dummyjson.com/products/${id}`;

export const getProdonCategory = (category) =>
  `https://dummyjson.com/products/category/${category}`;
