import { Link, useLocation } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";

const BreadCrumb = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <div className="mt-22 py-3 flex items-center px-2">
      <Link to="/">
        <IoHomeOutline className="text-3xl mx-3" />
      </Link>
      {pathname.length > 0 &&
        pathname.map((path, i) => {
          return pathname.length > 1 ? (
            pathname[0] && (
              <Link to={`/${pathname[0]}`} key={i}>
                <span className="text-xl flex items-center mx-1 capitalize text-[#5E548E]">
                  {path} <GrNext />
                </span>
              </Link>
            )
          ) : (
            <span
              className="text-xl flex items-center mx-1 capitalize text-[#9F86C0]"
              key={i}
            >
              {path} <GrNext />
            </span>
          );
        })}
    </div>
  );
};

export default BreadCrumb;
