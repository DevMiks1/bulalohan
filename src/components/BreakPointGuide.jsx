import React from "react";

export const BreakpointGuide = () => {
  return (
    <div className="z-50 fixed w-full">
      <div className="text-center xs:bg-red-100 hidden xs:block sm:hidden">
        xs: 639px and below
      </div>
      <div className="text-center sm:bg-red-200 hidden sm:block md:hidden">
        sm: 640px - 767px
      </div>
      <div className="text-center md:bg-red-300 hidden md:block lg:hidden">
        md: 768px - 1023px
      </div>
      <div className="text-center lg:bg-red-400 hidden lg:block xl:hidden">
        lg: 1024px - 1279px
      </div>
      <div className="text-center xl:bg-red-500 hidden xl:block 2xl:hidden ">
        xl: 1280px - 1535px{" "}
      </div>
      <div className="text-center 2xl:bg-yellow-800 hidden 2xl:block">
        2xl: 1536px and up
      </div>
    </div>
  );
};