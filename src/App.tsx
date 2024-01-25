import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/molecules/ScrollToTop";
import Category from "./pages/Category";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Modals from "./modals/Modals";
import { useEffect } from "react";
import { setIsUserLoggedIn } from "./store/auth/authSlice";
import Account from "./pages/Account";
import PrivateRoutes from "./hoc/PrivateRoutes";
import Checkout from "./pages/Checkout";
import { HelmetProvider } from "react-helmet-async";
import PaymentSuccess from "./pages/PaymentSuccess";
import { setIsMobileDevice } from "./store/cart/cartSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);

  /** ---> adding accessToken to redux state from localStorage */
  useEffect(() => {
    const token = localStorage.getItem("@accessToken");
    if (token) dispatch(setIsUserLoggedIn(true));
  }, []);

  /** ---> checking is mobile or small size devices. */
  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobileDevice(window.innerWidth < 768));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`max-w-[1250px] mx-auto ${
        isCartOpen && "h-screen overflow-y-hidden"
      }`}
    >
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Modals />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/s" element={<Search />} />
            <Route path="/prn/:name/prid/:id" element={<Product />} />
            <Route
              path="/cn/:subcname/cid/:cid/:subcid"
              element={<Category />}
            />
            <Route element={<PrivateRoutes />}>
              <Route path="/account" element={<Account />}>
                <Route path="/account/orders" />
                <Route path="/account/addresses" />
                <Route path="/account/wallet" />
              </Route>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};

export default App;
