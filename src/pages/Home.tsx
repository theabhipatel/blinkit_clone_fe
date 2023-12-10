import HomeScreenCategoriesPoster from "../components/HomeScreenCategoriesPoster";
import HomeScreenPoster from "../components/HomeScreenPoster";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <main className="w-full px-20 pt-16">
      <HomeScreenPoster />
      <HomeScreenCategoriesPoster />
      <div className="flex flex-wrap p-5 gap-5">
        {[...new Array(20)].map(() => (
          <ProductCard />
        ))}
      </div>
    </main>
  );
};

export default Home;
