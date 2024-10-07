import React from "react";
import { Link } from "react-router-dom"; 
import search from "../assets/icons/search.svg";
import { GradualSpacingDemo } from "./magicui/GradualSpacingDemo";
import { BlurInDemo } from "./magicui/BlurInDemo";

const Hero = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-poppins text-9xl z-10">
      <div className="relative max-w-5xl font-bricolage mx-auto pt-[12rem] md:pt-[12rem] lg:pt-[1rem]">
        <div className=" ">
          <GradualSpacingDemo />
        </div>
        <div className="">
          <BlurInDemo />
        </div>
        <div className="mb-20 flex text-xl justify-center items-center gap-3">
          <Link to="/about">  {/* Link to the About page */}
            <button className="px-6 bg-slate-900 hover:bg-white hover:text-slate-900 transition-all duration-300 py-2 text-sm text-white rounded-[5px]">
              Learn more
            </button>
          </Link>

          <button className="hidden text-slate-900 font-poppins sm:flex items-center w-72 text-left space-x-3 px-4 py-2 bg-transparent ring-2 ring-slate-900 text-sm rounded-lg text-white400 ">
            <img
              src={search}
              className="icon flex-none text-slate-900 "
              alt=""
            />

            <span className="flex-auto">Quick search</span>
            <span className="font-bold"> CTRL+K</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
