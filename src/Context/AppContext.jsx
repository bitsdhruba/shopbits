import { createContext, useState } from "react";
import { getProdonCategory, getProducts } from "../api/api";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState();
  const [load, setLoad] = useState(false);

  const fetchProducts = async (skip) => {
    setLoad(true);
    try {
      const { data } = await axios.get(getProducts(skip));
      setProducts(data.products);
      setLoad(false);
    } catch (error) {
      console.log(error, "something went wrong !");
    }
  };

  const [prodcategory, setProdcategory] = useState();

  const fetchProdcategory = async (category) => {
    setLoad(true);

    try {
      const { data } = await axios.get(getProdonCategory(category));
      setProdcategory(data.products);
      setLoad(false);
    } catch (error) {
      console.log(error, "something went wrong !");
    }
  };

  const value = {
    skip,
    setSkip,
    products,
    load,
    fetchProducts,
    fetchProdcategory,
    prodcategory,
  };

  return <AppContext.Provider value={value}> {children}</AppContext.Provider>;
}
