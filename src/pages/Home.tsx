import CategorySlider from "../components/CategorySlider";
import HomeScreenCategoriesPoster from "../components/HomeScreenCategoriesPoster";
import HomeScreenPoster from "../components/HomeScreenPoster";

const Home = () => {
  return (
    <main className="w-full px-20 my-16 ">
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
