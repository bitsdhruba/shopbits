import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ProductCategory from "./pages/ProductCategory";
import Products from "./components/product/Products";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category/:category" element={<ProductCategory />} />
        <Route path="/Products" element={<Products />} />
        <Route
          path="/Products/ProductDetail/:productId"
          element={<ProductDetail />}
        />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
