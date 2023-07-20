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
        <div className="font-semibold text-4xl md:text-left text-center">Browse By Category</div>
      </div>
      <div>
        <div className="flex md:flex-row flex-wrap gap-y-5 gap-x-5 flex-col md:justify-between justify-center items-center ">
          <div className="w-max text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div>
              <BsPhone className="md:text-6xl text-4xl" />
            </div>
            <div>Phones</div>
          </div>
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div>
              <LiaLaptopSolid className="md:text-6xl text-4xl" />
            </div>
            <div>Laptops</div>
          </div>{" "}
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div><GiConverseShoe className="md:text-6xl text-4xl" /></div>
            <div>Shoes</div>
          </div>{" "}
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div><GiJewelCrown className="md:text-6xl text-4xl"/></div>
            <div>Jewelery</div>
          </div>{" "}
          <div className="text-center justify-center items-center flex flex-col gap-y-5 border border-solid border-black border-opacity-30 p-10 rounded-md hover:text-white hover:bg-red-500 bg-white text-red-500">
            <div><GiLoincloth className="md:text-6xl text-4xl"/></div>
            <div>Clothing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
