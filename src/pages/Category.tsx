import { useParams } from "react-router-dom";
import CategoryDetails from "../components/CategoryDetails";
import CategorySideBar from "../components/CategorySideBar";
import CategoryTopBar from "../components/CategoryTopBar";
import ProductCard from "../components/ProductCard";
import FilterDropdown from "../components/molecules/FilterDropdown";
import { axiosInstance } from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { ICategory, IProduct } from "../interfaces";
import { useAppSelector } from "../store/hooks";
import Loader from "../components/molecules/Loader";
import { Helmet } from "react-helmet-async";

const Category = () => {
  const { cid, subcid, subcname } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const isMobile = useAppSelector((state) => state.cart.isMobile);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    if (subcid) {
      getProductsBySubCategory();
    }
  }, [subcid]);

  useEffect(() => {
    getCategories();
    getSubCategories();
  }, [cid]);

  const getProductsBySubCategory = async () => {
    try {
      const res = await axiosInstance.get(`/products/sub-category/${subcid}`);
      if (res.status === 200) {
        setProducts(res.data.products);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSubCategories = async () => {
    try {
      const res = await axiosInstance.get(`/categories/${cid}`);
      if (res.status === 200) {
        setSubCategories(res.data.category.subCategories);
        setSelectedSubCategory(res.data.category.subCategories[0]._id);
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[5.5rem] md:mt-[6.5rem] mb-10">
      <Helmet>
        <title>Buy {subcname?.split("-").join(" ")} Online | Blinkit</title>
      </Helmet>
      {/* ---> Category page header <--- */}
      {!isMobile && <CategoryTopBar categories={categories} />}
      {isMobile && (
        <div className="w-full z-40 fixed top-14 border-y border-zinc-200 px-2 py-2 bg-white">
          <h1 className="text-xs text-zinc-700 font-semibold capitalize">
            Buy {subcname?.split("-").join(" ")} Online
          </h1>
        </div>
      )}
      {/* ---> Category page body <--- */}
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="w-full md:px-5 lg:px-20 ">
            <div className="w-full h-full flex ">
              {/* ---> Categories side bar <--- */}
              <CategorySideBar
                subCategories={subCategories}
                selectedSubCategory={selectedSubCategory}
                setSelectedSubCategory={setSelectedSubCategory}
              />
              {/* ---> Products cards <--- */}
              <div className="w-full   bg-blue-50">
                {/* ---> Heading and filters <--- */}
                {!isMobile && (
                  <div className="w-full h-10 flex justify-between items-center px-3 bg-white border border-l-0 border-t-0 border-zinc-200">
                    <h3 className="text-sm font-semibold text-zinc-700 capitalize">
                      Buy {subcname?.split("-").join(" ")} Online
                    </h3>
                    <div className="flex gap-5 items-center">
                      <h6 className="text-xs text-zinc-400">Sort By</h6>
                      {/* ---> Filter Dropdown <--- */}
                      <FilterDropdown />
                    </div>
                  </div>
                )}

                {/* ---> Mapping cards <--- */}
                <div className="w-full flex justify-center items-center flex-wrap">
                  <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-3 p-2 ">
                    {products.map((item) => {
                      return (
                        <ProductCard
                          key={item._id}
                          width="8rem"
                          product={item}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---> Category Details <--- */}
          <CategoryDetails />
        </>
      )}
    </div>
  );
};

export default Category;
