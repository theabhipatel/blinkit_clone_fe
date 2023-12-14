import { useState } from "react";

const images = [
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=500,h=500/app/images/products/full_screen/pro_112620.jpg?ts=1685979222",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=500,h=500/app/images/products/sliding_image/112620a.jpg?ts=1687265034",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=500,h=500/app/images/products/sliding_image/112620b.jpg?ts=1625805730",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=500,h=500/app/images/products/sliding_image/112620c.jpg?ts=1625805730",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=500,h=500/app/images/products/sliding_image/112620d.jpg?ts=1625805730",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=500,h=500/app/images/products/sliding_image/112620e.jpg",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=500,h=500/app/images/products/common/customer_care.jpg",
];

const ImageShowcase = () => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div>
      <div className="w-[60%] mx-auto bg-red-500 h-[20rem]">
        <img
          src={images[activeImage]}
          alt="balaji sev"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[80%] mx-auto flex gap-3 mt-5 overflow-x-auto pb-3">
        {images.map((item, index) => (
          <div
            onClick={() => setActiveImage(index)}
            className={`min-w-[5rem] h-20 border  rounded-md overflow-hidden ${
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
  );
};

export default ImageShowcase;
