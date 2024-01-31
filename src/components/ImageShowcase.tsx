import { useState, FC } from "react";

interface IProps {
  images: string[];
}

const ImageShowcase: FC<IProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div>
      <div className="w-full sm:w-[80%] md:w-[90%] lg:w-[60%] mx-auto h-[20rem] ">
        <img
          src={images[activeImage]}
          alt="balaji sev"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="  flex gap-3 mt-5 overflow-x-auto hide-scrollbar  px-4 pb-3">
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(index)}
              className={`min-w-[5rem] h-20 border cursor-pointer rounded-md overflow-hidden ${
                activeImage === index ? "border-primary" : "border-zinc-200"
              }`}
            >
              <img
                src={item}
                alt="products-images"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageShowcase;
