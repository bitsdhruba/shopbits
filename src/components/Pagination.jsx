import { useContext } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { skip, setSkip } = useContext(AppContext);

  const pagenav = (pn) => {
    setSkip(pn);
  };

  const pageno = (i) => {
    setSkip(i * 10);
  };

  return (
    <div className="py-3 px-2 rounded-xl shadow-lg shadow-[#E0B1CB] my-8 flex justify-between">
      {skip > 0 && (
        <button
          className="w-8 h-8 rounded-full border-2 border-[#9F86C0] mr-2 hover:shadow-md hover:shadow-[#BE95C4] hover:border-[#5E548E]"
          onClick={() => pagenav(skip - 10)}
        >
          <MdNavigateBefore className="text-2xl text-center text-[#5E548E]" />
        </button>
      )}

      {[...Array(10)].map((_, i) => {
        return (
          <button
            key={i}
            className={
              i === skip / 10
                ? "w-8 h-8 rounded-full border-2 border-[#9F86C0] bg-[#e0b1cbc9]"
                : "w-8 h-8 rounded-full border-2 border-[#9F86C0] hover:shadow-md hover:shadow-[#BE95C4] hover:border-[#5E548E]"
            }
            onClick={() => pageno(i)}
          >
            {i + 1}
          </button>
        );
      })}

      {skip < 90 && (
        <button
          className="w-8 h-8 rounded-full border-2 border-[#9F86C0] ml-2 hover:shadow-md hover:shadow-[#BE95C4] hover:border-[#5E548E]"
          onClick={() => pagenav(skip + 10)}
        >
          <MdNavigateNext className="text-2xl text-center text-[#5E548E]" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
