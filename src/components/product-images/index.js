import React, { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className="max-w-[900px]">
      {/* main image */}
      <div>
        <img
          src={mainImage.url}
          alt="main"
          className="w-[100%] h-[40vh] lg:h-80"
        />
      </div>

      {/* small images */}
      <div className="flex justify-between mt-2">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              className={`w-[18.5%] h-[45px] md:h-[65px] lg:h-[48px] ${
                image.url === mainImage.url
                  ? "border-2 border-black border-solid"
                  : null
              }`}
              onClick={() => {
                setMainImage(images[index]);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
