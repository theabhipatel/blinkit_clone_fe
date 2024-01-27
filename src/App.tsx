import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/molecules/ScrollToTop";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Suspense, lazy, useEffect } from "react";
import { setIsUserLoggedIn } from "./store/auth/authSlice";
import PrivateRoutes from "./hoc/PrivateRoutes";
import { HelmetProvider } from "react-helmet-async";
import { setIsMobileDevice } from "./store/cart/cartSlice";
import Loader from "./components/molecules/Loader";

/** ---> Lazy loading  */
const Account = lazy(() => import("./pages/Account"));
const Product = lazy(() => import("./pages/Product"));
const Search = lazy(() => import("./pages/Search"));
const Category = lazy(() => import("./pages/Category"));
const Checkout = lazy(() => import("./pages/Checkout"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const Modals = lazy(() => import("./modals/Modals"));

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
    dispatch(setIsMobileDevice(window.innerWidth < 768));
  }, []);

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
          <Suspense
            fallback={
              <div className="w-full h-[80vh] flex justify-center items-center">
                <Loader />
              </div>
            }
          >
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
          </Suspense>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};

export default App;
