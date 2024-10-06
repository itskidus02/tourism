import React from "react";
import search from "../assets/icons/search.svg";
const Hero = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-ful flex items-center justify-center text-white font-poppins text-9xl z-10">
      <div className="relative max-w-5xl font-bricolage mx-auto pt-[12rem] md:pt-[12rem] lg:pt-[12rem]">
        <div className=" font-extrabold text-4xl sm:text-5xl lg:text-9xl tracking-tight text-center text-white">
          Explore Ethiopia{" "}
        </div>
        <div className="mt-3 mb-3 text-2xl text-slate-900 font-bold text-center max-w-3xl mx-auto ">
          Discover the land of origins, rich culture, breathtaking landscapes,
          and ancient history of Ethiopia.{" "}
        </div>
        <div className="mb-20 flex text-xl justify-center items-center gap-3">
          <button className="px-6 bg-slate-900 py-2 text-sm text-white rounded-[5px]">
            Learn more
          </button>

          <button className="hidden text-slate-900 font-bold font-poppins sm:flex items-center w-72 text-left space-x-3 px-4 py-2 bg-transparent ring-2 ring-slate-900 text-sm   rounded-lg text-white400 ">
            <img
              src={search}
              className="icon flex-none text-slate-900 "
              alt=""
            />

            <span className="flex-auto">Quick search</span>
            <span className=""> CTRL+K</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
