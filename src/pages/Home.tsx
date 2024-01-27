import CategorySlider from "../components/CategorySlider";
import HomeScreenCategoriesPoster from "../components/HomeScreenCategoriesPoster";
import HomeScreenPoster from "../components/HomeScreenPoster";
import { Helmet } from "react-helmet-async";
import { axiosInstance } from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { ICategory, IProduct } from "../interfaces";
import Loader from "../components/molecules/Loader";

const Home = () => {
  const [dairyProducts, setDairyProducts] = useState<IProduct[]>([]);
  const [vegetablesAndFruitsProducts, setVegetablesAndFruitsProducts] =
    useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);

  useEffect(() => {
    getCategories();
    getDairyProducts();
    getVegetablesAndFruitsProducts();
  }, []);

  const getDairyProducts = async () => {
    try {
      const res = await axiosInstance.get(
        "/products/category/6582c1964460ca5037b2304e"
      );
      if (res.status === 200) {
        setDairyProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVegetablesAndFruitsProducts = async () => {
    try {
      const res = await axiosInstance.get(
        "/products/category/6582c57beae03687384b458c"
      );
      if (res.status === 200) {
        setVegetablesAndFruitsProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      if (res.status === 200) {
        setCategories(res.data.categories);
        setIsCategoriesLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full my-16 ">
      <Helmet>
        <title>Everything delivered in minutes | Blinkit</title>
        <meta
          name="keywords"
          content="Buy Grocery Online, Online Grocery, Grofers, Groffers, Groferss, blinkit grofers, blinkit, blink it, Grocery Store, Online Grocery Shopping, Online Grocery Store, Online Supermarket, Free Delivery, Great Offers, Best Prices"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Shop online for groceries and get your order delivered at your doorstep in minutes. Enjoy instant delivery with blinkit"
          data-react-helmet="true"
        />
        <meta
          name="og:title"
          content="Everything delivered in minutes | Blinkit"
          data-react-helmet="true"
        />
        <meta
          name="og:description"
          content="Shop online for groceries and get your order delivered at your doorstep in minutes. Enjoy instant delivery with blinkit"
          data-react-helmet="true"
        />
      </Helmet>
      <HomeScreenPoster />
      {/* ---> Shop by category */}
      {isCategoriesLoading ? (
        <div className="w-full h-[30vh] flex justify-center items-center ">
          <Loader />
        </div>
      ) : (
        <>
          <h2 className="mt-2 text-base font-bold pl-2 md:hidden">
            Shop by category
          </h2>
          <HomeScreenCategoriesPoster categories={categories} />
        </>
      )}

      <div className="w-full md:px-10 lg:px-20">
        <CategorySlider categoryTitle="Bestsellers" products={dairyProducts} />

        <CategorySlider
          categoryTitle="Dairy & Breads"
          products={dairyProducts}
        />
        <CategorySlider
          categoryTitle="Fruits & Vegetables"
          products={vegetablesAndFruitsProducts}
        />
      </div>
      {/* <CategorySlider />
      <CategorySlider /> */}
    </main>
  );
};

export default Home;
