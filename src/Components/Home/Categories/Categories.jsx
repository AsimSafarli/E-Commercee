import React from "react";
import { BsPhone } from "react-icons/bs";
import { LiaLaptopSolid } from "react-icons/lia";
import { GiConverseShoe, GiJewelCrown, GiLoincloth } from "react-icons/gi";


function Categories() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-row items-end gap-x-4">
          <div className="h-10 w-5 bg-red-500 rounded"></div>
          <div className="text-base font-semibold text-red-500">Categories</div>
        </div>
        <div className="font-semibold text-4xl">Browse By Category</div>
      </div>
      <div>
        <div className="flex flex-row justify-between ">
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div>
              <BsPhone className="text-6xl" />
            </div>
            <div>Phones</div>
          </div>
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div>
              <LiaLaptopSolid className="text-6xl" />
            </div>
            <div>Laptops</div>
          </div>{" "}
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div><GiConverseShoe className="text-6xl" /></div>
            <div>Shoes</div>
          </div>{" "}
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div><GiJewelCrown className="text-6xl"/></div>
            <div>Jewelery</div>
          </div>{" "}
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div><GiLoincloth className="text-6xl"/></div>
            <div>Men/Women Clothing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
