import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import Spinner from "../../Loader/Spinner";
import ProductInfo from "./ProductInfo";

const RelatedProduct = ({ detail }) => {
  const { fetchProdcategory, prodcategory, load } = useContext(AppContext);

  useEffect(() => {
    fetchProdcategory(detail?.category);
  }, [detail?.category]);

  return (
    <div className="my-6 border-t-2 border-slate-300">
      <h1 className="text-2xl sm:text-3xl text-center my-6 capitalize">
        You may also Like
      </h1>
      <div className="mb-20">
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
  );
};

export default RelatedProduct;
