import React from "react";

function Banner() {
  return (
    <div>
      <div className="mx-auto container flex md:flex-row flex-col justify-center gap-y-10 md:justify-around p-5 bg-black items-center">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row items-center gap-x-6">
            <div>
              <img src="Assets/applelogo.png" />
            </div>
            <div className="text-white ">
            iPhone 15 Series
            </div>
          </div>
          <div className="text-center text-white text-5xl font-semibold">Up to 10% off Voucher</div>
          <div className="text-black rounded-lg bg-white w-max h-max  p-1">
            Shop Now
          </div>
        </div>
        <div>
          <img src="Assets/iphonebanner.png" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
