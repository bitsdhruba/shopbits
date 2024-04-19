import axios from "axios";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import Spinner from "../../Loader/Spinner";
import ProductInfo from "./ProductInfo";

const Products = () => {
  const [products, setProducts] = useState();
  const [load, setLoad] = useState(false);

  const fetchProducts = async () => {
    setLoad(true);
    try {
      const { data } = await axios.get(getProducts());
      setProducts(data.products);
      setLoad(false);
    } catch (error) {
      console.log(error, "something went wrong !");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-20 max-w-[1200px] mx-auto">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search a category"
          className="rounded-full w-4/5 h-10 py-2 px-4 border-2 border-[#BE95C4] shadow-lg shadow-[#E0B1CB] mt-4 focus:outline-none focus:ring-1 focus:ring-[#5E548E] focus:border-[#5E548E] placeholder-[#9F86C0]"
        />
      </div>
      <div className="my-8">
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
    </div>
  );
};

export default Products;
