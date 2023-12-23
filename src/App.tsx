import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/molecules/ScrollToTop";
import Category from "./pages/Category";
import { useAppSelector } from "./store/hooks";
import Cart from "./components/Cart";

const App = () => {
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);

  return (
    <div
      className={`max-w-[1250px] mx-auto ${
        isCartOpen && "h-screen overflow-y-hidden"
      }`}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        {isCartOpen && <Cart />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/s" element={<Search />} />
          <Route path="/prn/:name/prid/:id" element={<Product />} />
          <Route path="/cn/:subcname/cid/:cid/:subcid" element={<Category />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
