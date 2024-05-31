import axios from "axios";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/api";
import { Link } from "react-router-dom";
import Spinner from "../../Loader/Spinner";

const Category = () => {
  const [category, setCategory] = useState();
  const [load, setLoad] = useState(false);

  const fetchCategory = async () => {
    setLoad(false);
    try {
      const { data } = await axios.get(getCategories());
      setCategory(data);
      setLoad(false);
    } catch (error) {
      console.log(error, "something went wrong !");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="mt-20 max-w-[1200px] mx-auto">
      {load ? (
        <div className="mt-22">
          <Spinner />{" "}
        </div>
      ) : (
        <div className="p-2">
          <div className="flex flex-col items-center">
            <Link to="/Products">
              <h1 className="text-2xl text-[#5E548E] mb-6 p-2 text-center rounded-lg border-2 border-[#9F86C0] shadow-md shadow-[#E0B1CB]">
                View All Products
              </h1>
            </Link>
            <h1 className="text-2xl text-[#5E548E] my-6">
              Browse All Categories
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-center sm:gap-8 my-12">
            {category?.map((item, i) => {
              return (
                <Link to={`/Category/${item.slug}`} key={i}>
                  <div className="w-[373px] h-[120px] rounded-lg bg-gradient-to-t from-[#E0B1CB] shadow-lg shadow-slate-300 transition ease-in-out duration-300 hover:scale-105 hover:shadow-slate-400 ">
                    <div className="w-full h-full flex flex-col hover:justify-end transition ease-in-out duration-700 hover:scale-105">
                      <h1 className="text-2xl text-[#5E548E] m-4 font-mono font-medium">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
