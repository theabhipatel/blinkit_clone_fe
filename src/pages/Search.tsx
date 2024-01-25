import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { axiosInstance } from "../utils/axiosInstance";
import useDebounce from "../hooks/useDebounce";
import { IProduct } from "../interfaces";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>();

  const searchText = useDebounce(searchParams.get("q"), 1000);

  /** ---> handling search api */
  useEffect(() => {
    if (searchText) {
      handleSearchProducts();
    } else {
      setProducts([]);
    }
  }, [searchText]);

  const handleSearchProducts = async () => {
    try {
      const res = await axiosInstance.get(`/products/search?q=${searchText}`);
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        {searchText ? (
          <title>Buy {searchText} Online | blinkit </title>
        ) : (
          <title>Search </title>
        )}
      </Helmet>
      {products?.length === 0 ? (
        <div className="w-full h-screen flex flex-col justify-center items-center ">
          <img src="/not-found.webp" alt="not-found-image" className="h-52" />
          <h3 className="text-2xl sm:text-4xl mt-5 font-semibold text-zinc-400">
            Nothing here yet
          </h3>
        </div>
      ) : (
        <div className="w-full min-h-screen px-3 md:px-28 mt-20 mb-10">
          <h2 className="text-sm font-semibold my-5">
            Showing results for "{searchText}"
          </h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-x-3 gap-y-3  ">
              {products?.map((item) => {
                return <ProductCard key={item._id} product={item} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
