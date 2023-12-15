const CategorySideBar = () => {
  return (
    <div className="min-w-[13rem] h-[80vh] sticky top-[6.5rem] border border-t-0 border-zinc-200 pt-5 hide-scrollbar overflow-y-auto">
      {[...new Array(12)].map((_, index) => {
        return (
          <div
            key={index}
            className={`w-full h-14 flex items-center pl-3 gap-3 border-l-4 ${
              index == 1
                ? "border-l-primary bg-green-100"
                : "border-l-white hover:border-l-green-100"
            }  border-b border-b-zinc-200 hover:bg-green-100 duration-300 cursor-pointer`}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-md">
              <img
                src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702463308432-3"
                alt="categories"
                className=" object-cover"
              />
            </div>

            <h4 className="text-xs ">Fresh Vegetables</h4>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySideBar;
