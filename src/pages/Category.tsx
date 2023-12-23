import { useParams } from "react-router-dom";
import CategoryDetails from "../components/CategoryDetails";
import CategorySideBar from "../components/CategorySideBar";
import CategoryTopBar from "../components/CategoryTopBar";
import ProductCard from "../components/ProductCard";
import FilterDropdown from "../components/molecules/FilterDropdown";
import { axiosInstance } from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { IProduct } from "../interfaces";

const Category = () => {
  const { cid, subcid, subcname } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  useEffect(() => {
    if (subcid) {
      getProductsBySubCategory();
    }
  }, [subcid]);

  useEffect(() => {}, []);

  useEffect(() => {
    getSubCategories();
  }, [cid]);

  const getProductsBySubCategory = async () => {
    try {
      const res = await axiosInstance.get(`/products/sub-category/${subcid}`);
      if (res.status === 200) {
        setProducts(res.data.products);
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

  return (
    <div className="mt-[6.5rem] mb-10">
      {/* ---> Category page header <--- */}
      <CategoryTopBar />

      {/* ---> Category page body <--- */}
      <div className="w-full px-20  ">
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
            <div className="w-full h-10 flex justify-between items-center px-3 bg-white border border-l-0 border-t-0 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-700">
                Buy {subcname} Online
              </h3>
              <div className="flex gap-5 items-center">
                <h6 className="text-xs text-zinc-400">Sort By</h6>
                {/* ---> Filter Dropdown <--- */}
                <FilterDropdown />
              </div>
            </div>
            {/* ---> Mapping cards <--- */}
            <div className="w-full grid grid-cols-5 gap-2 gap-y-3 p-2 border-r border-b">
              {products.map((item) => {
                return (
                  <ProductCard key={item._id} width="8rem" product={item} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* ---> Category Details <--- */}
      <CategoryDetails />
    </div>
  );
};

export default Category;
