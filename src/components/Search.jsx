import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Loader/Spinner";
import ProductInfo from "./product/ProductInfo";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const url = `https://dummyjson.com/products/search?q=${search}`;

  const [searchProd, setSearchProd] = useState();
  const [load, setLoad] = useState(false);

  const fetchSearch = async () => {
    setLoad(true);
    try {
      const { data } = await axios.get(url);
      setSearchProd(data.products);
      setLoad(false);
    } catch (error) {
      console.log(error, "something went wrong !");
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [search]);

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search phone"
          onChange={searchHandler}
          className="rounded-full w-4/5 h-10 py-2 px-4 border-2 border-[#BE95C4] shadow-lg shadow-[#E0B1CB] mt-4 focus:outline-none focus:ring-1 focus:ring-[#5E548E] focus:border-[#5E548E] placeholder-[#9F86C0]"
        />
      </div>
      <div className="my-6">
        {search.length > 3 && (
          <div className="flex flex-wrap gap-3 sm:gap-8 justify-evenly">
            {load ? (
              <Spinner />
            ) : (
              searchProd?.map((product) => {
                return <ProductInfo product={product} key={product.id} />;
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
