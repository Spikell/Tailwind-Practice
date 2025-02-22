import React from "react";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 text-4xl capitalize font-palanquin lg:max-w-lg font-bold">
          <span className="text-[#FF4433]">Special </span>
          Offer
        </h2>
        <p className="mt-4  lg:max-w-lg info-text">
          Embark on a journey of savings with our exclusive special offers, bringing you
          premium footwear at unbeatable prices. Don't miss out on these limited-time
          deals crafted just for our valued customers.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Take advantage of up to 30% off on select styles, plus free shipping on all orders.
          Join our rewards program today to unlock even more exclusive discounts and early
          access to sales.
        </p>
        <div className="flex gap-10">
          <button
            className="flex mt-10 justify-center items-center rounded-full gap-2 px-7 py-4 border font-montserrat 
        text-white text-lg leading-none border-coral-red bg-[#FF4433] hover:bg-black duration-300"
          >
            View Details
          </button>
          <button
            className="flex mt-10 justify-center items-center rounded-full  px-7 py-4 border font-montserrat 
        text-slate-gray text-lg leading-none border-gray-400  hover:bg-gray-200 duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
