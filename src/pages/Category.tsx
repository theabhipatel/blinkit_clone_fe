import CategoryDetails from "../components/CategoryDetails";
import CategorySideBar from "../components/CategorySideBar";
import CategoryTopBar from "../components/CategoryTopBar";
import ProductCard from "../components/ProductCard";

const Category = () => {
  return (
    <div className="mt-[6.5rem] mb-10">
      {/* ---> Category page header <--- */}
      <CategoryTopBar />

      {/* ---> Category page body <--- */}
      <div className="w-full px-20  ">
        <div className="w-full h-full flex ">
          {/* ---> Categories side bar <--- */}
          <CategorySideBar />
          {/* ---> Products cards <--- */}
          <div className="w-full   bg-blue-50">
            {/* ---> Heading and filters <--- */}
            <div className="w-full h-10 flex justify-between items-center px-3 bg-white border border-l-0 border-t-0 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-700">
                Buy Fresh Vegetables Online
              </h3>
              <div className="flex gap-5 items-center">
                <h6 className="text-xs">Sort By</h6>
                <div className="w-24 h-5 border rounded-md"></div>
              </div>
            </div>
            {/* ---> Mapping cards <--- */}
            <div className="w-full grid grid-cols-5 gap-2 gap-y-3 p-2 border-r border-b">
              {[...new Array(32)].map(() => {
                return <ProductCard width="8rem" />;
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
