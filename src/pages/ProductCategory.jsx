import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../Loader/Spinner";
import ProductInfo from "../components/product/ProductInfo";
import NavigateButton from "../components/NavigateButton";
import BreadCrumb from "../components/BreadCrumb";
import { AppContext } from "../Context/AppContext";

const ProductCategory = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  const { fetchProdcategory, prodcategory, load } = useContext(AppContext);

  useEffect(() => {
    fetchProdcategory(category);
  }, [location.pathname]);

  return (
    <div className="mt-20 max-w-[1200px] mx-auto">
      <BreadCrumb />
      <NavigateButton />
      <div>
        <h1 className="text-2xl text-center my-6 capitalize">
          Products on {category}
        </h1>
        <div className="mb-8">
          {load ? (
            <Spinner />
          ) : (
            <div className="flex flex-wrap gap-3 sm:gap-8 justify-evenly">
              {prodcategory?.map((product) => {
                return <ProductInfo product={product} key={product.id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
