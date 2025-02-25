import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";


const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin inline-block font-semibold ">Our <span className="text-[#FF4433]">Popular</span> Products</h1>
        <p className="mt-4 font-montserrat  text-slate-700 leading-8 lg:max-w-lg ">
          Experience quality and innovation with our most sought-after
          selections, crafted for those who demand excellence.
        </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6  ">
          {products.map((product, index) => (
              <PopularProductCard key = {product.name} {...product}                
              />
            
          ))}
        </div>
    </section>
  );
};

export default PopularProducts;
