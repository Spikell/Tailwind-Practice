import React from "react";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 text-4xl capitalize font-palanquin lg:max-w-lg font-bold">
          We Provide You <span className="text-[#FF4433]">Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4  lg:max-w-lg info-text">
          Ensuring premium materials and exceptional craftsmanship in every pair
          we deliver, our shoes are designed to provide unmatched comfort and
          style that lasts.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover our latest collection of premium footwear, where quality
          meets comfort in every step.
        </p>
        <div>
          <button
            className="flex mt-10 justify-center items-center rounded-full gap-2 px-7 py-4 border font-montserrat 
        text-white text-lg leading-none border-coral-red bg-[#FF4433] hover:bg-black duration-300"
          >
            Shop Now{" "}
            <img
              src={arrowRight}
              alt="Arrow right icon"
              className="rounded-full ml-2 w-5 h-5"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src = {shoe8} alt="shoe8"
        width={570} 
        height={522}
        className="object-contain"/>

      </div>
    </section>
  );
};

export default SuperQuality;
