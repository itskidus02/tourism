import React from "react";
import adey from "../assets/images/adey.jpg";

const Countdown = () => {
  return (
    <div className="flex justify-center items-center mb-9 relative">
      <img
        src={adey}
        className="w-full h-[12rem] object-cover rounded-[10px] relative"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-[10px]"></div>

      <div className="absolute top-0 font-bold font-poppins italic left-0 w-full h-full gap-2 lg:gap-4 text-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">10</span>
          <h1>Days</h1>
        </div>

        {/* Separator dots */}
        <div className="text-3xl md:text-5xl lg:text-7xl mb-8 font-bold">:</div>

        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">10</span>
          <h1>Months</h1>
        </div>

        {/* Separator dots */}
        <div className="text-3xl md:text-5xl lg:text-7xl mb-8 font-bold">:</div>

        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">10</span>
          <h1>Days</h1>
        </div>

        {/* Separator dots */}
        <div className="text-3xl md:text-5xl lg:text-7xl  mb-8 font-bold">
          :
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">10</span>
          <h1>Hours</h1>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
