import { useDispatch } from "react-redux";
import { removefromCart } from "../../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removefromCart(item.id));
  };

  return (
    <div className=" shadow-lg p-2 my-3 border-t-2 border-slate-300">
      <div className="flex">
        <div className="w-3/5 flex items-center">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="object-contain aspect-square"
            loading="lazy"
          />
        </div>

        <div className="px-3 flex flex-col justify-center">
          <h1 className="text-2xl font-medium">{item.title}</h1>
          <h1 className="my-2">
            <span className="text-2xl font-medium mt-2">$ {item.price}</span>
            <span className="text-green-500 text-md mx-3">
              {item.discountPercentage} %
            </span>{" "}
            off
          </h1>
          <h1>
            <span className="bg-green-500 text-white text-ms px-1 rounded-md">
              {item.rating}
            </span>{" "}
          </h1>
          <p className="text-md  mt-2">{item.description}</p>
        </div>
      </div>
      <div className="flex justify-evenly my-3 pt-2">
        <button
          onClick={removeItemHandler}
          className="text-[#9F86C0] text-lg p-2 w-[125px] h-[48px] rounded-lg shadow-md shadow-[#BE95C4]"
        >
          Remove Item
        </button>
        <div className="border-r-2 border-slate-400"></div>
        <button className="text-[#9F86C0] text-lg p-2 w-[125px] h-[48px] rounded-lg shadow-md shadow-[#BE95C4]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartItem;
