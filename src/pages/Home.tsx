import CategorySlider from "../components/CategorySlider";
import HomeScreenCategoriesPoster from "../components/HomeScreenCategoriesPoster";
import HomeScreenPoster from "../components/HomeScreenPoster";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <main className="w-full px-20 my-16 ">
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
      <HomeScreenCategoriesPoster />
      <CategorySlider />
      <CategorySlider />
      <CategorySlider />
      <CategorySlider />
    </main>
  );
};

export default Home;
