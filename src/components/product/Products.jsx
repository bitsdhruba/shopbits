import { useContext, useEffect, useState } from "react";
import Spinner from "../../Loader/Spinner";
import ProductInfo from "./ProductInfo";
import Pagination from "../Pagination";
import { AppContext } from "../../Context/AppContext";
import NavigateButton from "../NavigateButton";
import BreadCrumb from "../BreadCrumb";
import Search from "../Search";

const Products = () => {
  const { load, products, fetchProducts, skip } = useContext(AppContext);

  useEffect(() => {
    fetchProducts(skip);
  }, [skip]);

  return (
    <div className="mt-20 max-w-[1200px] mx-auto">
      <BreadCrumb />
      <NavigateButton />
      <Search />
      <div className="my-8 min-h-[50vh]">
        {load ? (
          <Spinner />
        ) : (
          <div className="flex flex-wrap gap-3 sm:gap-8 justify-evenly">
            {products?.map((product) => {
              return <ProductInfo product={product} key={product.id} />;
            })}
          </div>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
