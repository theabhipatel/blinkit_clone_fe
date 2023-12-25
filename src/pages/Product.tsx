import React, { useState, useEffect } from "react";
import { MdArrowRight } from "react-icons/md";
import AddButton from "../components/molecules/AddItemToCartButton";
import { whyShopFromBlinkit } from "../constant";
import DeliveryTime from "../components/molecules/DeliveryTime";
import ImageShowcase from "../components/ImageShowcase";
import { Helmet } from "react-helmet";
import { axiosInstance } from "../utils/axiosInstance";
import { IProduct as GenericIProduct } from "../interfaces";
import { NavLink, useParams } from "react-router-dom";

interface IProduct extends GenericIProduct {
  subCategoryTitle: string;
}

const Product = () => {
  const { id } = useParams();
  const [fetchedProduct, setFetchedProduct] = useState<IProduct>();
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axiosInstance.get(`/products/${id}`);
      if (res.status === 200) {
        setFetchedProduct(res.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>{fetchedProduct?.title}</title>
      </Helmet>
      <div className="w-full flex   mt-16  mb-10 border-b border-zinc-300 ">
        {/* ---> Left Section <--- */}
        <div className="w-[55%]  p-16 pt-0 border-r border-zinc-300">
          {/* ---> Showing Images <--- */}
          {fetchedProduct?.images && (
            <ImageShowcase images={fetchedProduct?.images} />
          )}

          {/* --->Product Details <--- */}
          <div className="mt-5 pt-5 border-t border-zinc-300">
            <h3 className="text-xl font-semibold my-3 ">Product Details</h3>
            {fetchedProduct?.details.map(({ title, description }, index) => (
              <React.Fragment key={index}>
                <h4 className="text-xs font-[500] my-2">{title}</h4>
                <p className="text-xs text-zinc-500 my-2">{description}</p>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ---> Right Section <--- */}
        <div className="w-[45%] ">
          <div className="w-full  sticky top-16 p-10">
            {/* ---> Header Name and Navigation <--- */}
            <div className="border-b border-zinc-300 pb-3">
              <div className="flex gap-1 text-[11px]">
                <NavLink to="/" className="hover:text-primary duration-300">
                  Home
                </NavLink>
                <span>/</span>
                <NavLink to="/" className="hover:text-primary duration-300">
                  {fetchedProduct?.subCategoryTitle}
                </NavLink>
                <span>/</span>
                <span className="text-zinc-400">{fetchedProduct?.title}</span>
              </div>
              <h1 className="text-xl font-bold mt-2">
                {fetchedProduct?.title}
              </h1>
              <div className="mt-2" />
              <DeliveryTime size="L" />

              <span className="text-sm font-[500] text-primary flex items-center mt-2">
                <span>View all by {fetchedProduct?.brand}</span>
                <MdArrowRight className="text-xl" />
              </span>
            </div>
            {/* ---> Price section <--- */}
            <div className="flex justify-between items-center mt-2">
              <div>
                <h4 className="text-[11px] font-[500] text-zinc-500">
                  {fetchedProduct?.unit}
                </h4>
                <h4 className="text-xs">
                  MRP{" "}
                  <span className="font-semibold">{fetchedProduct?.price}</span>
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
