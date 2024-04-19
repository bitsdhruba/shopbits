import { Link } from "react-router-dom";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <div className="h-[300px] sm:h-[400px] w-[184px] sm:w-[268px] rounded-lg shadow-slate-400 shadow-md">
        <div className="">
          <Link to={`/ProductDetail/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover aspect-square"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-medium mt-3">
            <Link to={`/ProductDetail/${product.id}`}>
              {product.title.length > 17
                ? product.title.slice(0, 17)
                : product.title}
            </Link>
          </h1>

          <span className="text-md bg-green-500 text-white px-2 mt-3 rounded-md">
            {product.rating}
          </span>
          <p className="mt-2">
            <span className="text-lg font-bold ">$ {product.price}</span>
            <span className="text-md  text-green-500 ml-3">
              {product.discountPercentage} % off
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
