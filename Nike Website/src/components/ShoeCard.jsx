import React from "react";
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    console.log('Current bigShoeImg:', bigShoeImg);
    console.log('Selected imgURL.bigShoe:', imgURL.bigShoe);
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl 
        ${bigShoeImg === imgURL.bigShoe
          ? "border-[#FF6452]"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className=" flex justify-center bg-card bg-center bg-cover p-4 sm:h-40 rounded-xl">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
