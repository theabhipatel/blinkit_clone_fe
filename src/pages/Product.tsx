import { MdArrowRight } from "react-icons/md";
import AddButton from "../components/molecules/AddButton";
import { whyShopFromBlinkit } from "../constant";
import DeliveryTime from "../components/molecules/DeliveryTime";
import ImageShowcase from "../components/ImageShowcase";

const details = [
  {
    title: "Key Features",
    desc: "Made from choicest ingredients blended in traditional spices Spicy and scrumptious tea-time accompaniment Perfect snack to savour crunchiness in every bite and satiate hunger pangs in a jiffy",
  },
  {
    title: "Unit",
    desc: "200 g",
  },
  {
    title: "Shelf Life",
    desc: "4 months",
  },
  {
    title: "Country Of Origin",
    desc: "India",
  },
  {
    title: "Customer Care Details",
    desc: "Email: info@blinkit.com",
  },
  {
    title: "Return Policy",
    desc: "This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
  },
  {
    title: "Seller",
    desc: "Moonstone Ventures LLP",
  },
  {
    title: "Seller FSSAI",
    desc: "13323999000008",
  },
  {
    title: "Disclaimer",
    desc: "Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.",
  },
];

const Product = () => {
  return (
    <>
      <div className="w-full flex   mt-16  mb-10 border-b border-zinc-300 ">
        {/* ---> Left Section <--- */}
        <div className="w-[55%]  p-16 pt-0 border-r border-zinc-300">
          {/* ---> Showing Images <--- */}
          <ImageShowcase />
          {/* --->Product Details <--- */}
          <div className="mt-5 pt-5 border-t border-zinc-300">
            <h3 className="text-xl font-semibold my-3 ">Product Details</h3>
            {details.map(({ title, desc }) => (
              <>
                <h4 className="text-xs font-[500] my-2">{title}</h4>
                <p className="text-xs text-zinc-500 my-2">{desc}</p>
              </>
            ))}
          </div>
        </div>

        {/* ---> Right Section <--- */}
        <div className="w-[45%] ">
          <div className="w-full  sticky top-16 p-10">
            {/* ---> Header Name and Navigation <--- */}
            <div className="border-b border-zinc-300 pb-3">
              <div className="flex gap-1 text-[11px]">
                <span className="hover:text-primary duration-300">Home</span>
                <span>/</span>
                <span className="hover:text-primary duration-300">
                  Bhujia & Mixtures
                </span>
                <span>/</span>
                <span className="text-zinc-400">Balaji Ratlami Sev</span>
              </div>
              <h1 className="text-xl font-bold mt-2">Balaji Ratlami Sev</h1>
              <div className="mt-2" />
              <DeliveryTime size="L" />

              <span className="text-sm font-[500] text-primary flex items-center mt-2">
                <span>View all by Balaji</span>
                <MdArrowRight className="text-xl" />
              </span>
            </div>
            {/* ---> Price section <--- */}
            <div className="flex justify-between items-center mt-2">
              <div>
                <h4 className="text-[11px] font-[500] text-zinc-500">200 g</h4>
                <h4 className="text-xs">
                  MRP <span className="font-semibold">₹40</span>
                </h4>
                <h5 className="text-xxs text-zinc-400">
                  (Inclusive of all taxes)
                </h5>
              </div>
              <div>
                <AddButton />
              </div>
            </div>
            {/* ---> Why shop from blinkit? <--- */}
            <div className="flex flex-col gap-3 mt-3">
              <h3 className="text-base font-[500] text-zinc-700">
                Why shop from blinkit?
              </h3>
              {whyShopFromBlinkit.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="h-11" />
                  <div className="text-[11px] leading-4">
                    <h4>{item.title}</h4>
                    <p className="text-zinc-500 leading-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
