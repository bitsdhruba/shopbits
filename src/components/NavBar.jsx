import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-[#231942] text-[#E0B1CB] fixed top-0 z-10">
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto px-3 h-20">
        <NavLink to="/">
          <h1 className="text-2xl font-lg">ShopBits</h1>
        </NavLink>
        <ul className="flex">
          <NavLink to="/">
            <li className="mx-3 hidden sm:block">Home</li>
          </NavLink>
          <NavLink to="/cart">
            <li className="mx-3">
              <BsCart3 className="text-3xl" />
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
