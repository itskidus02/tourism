import FooterDiv from "@/components/FooterDiv";
import Header from "@/components/AboutHeader";
import { GradualSpacingabout } from "@/components/magicui/GradualSpacingabout";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-no-repeat text-white "
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('/src/assets/images/about-bg.jpg')",
        }}
      >
        <div className="max-w-7xl flex flex-col gap-3 font-bricolage text-left lg:p-9 m-4 lg:m-[4em] mt-[6rem]">
          <h1 className="">
            <GradualSpacingabout />
          </h1>

          <p className=" text-xl drop-shadow-2xl font-normal text-slate-900 md:text-3xl lg:text-5xl">
            We specialize in providing unforgettable experiences in Ethiopia,
            from breathtaking landscapes to rich cultural heritage.
          </p>

            <button className="items-start ring-1 ring-slate-900 text-slate-900 w-[8rem] justify-center hover:bg-slate-900 hover:text-white backdrop-blur transition-all duration-300 py-1 rounded-[5px] flex">
          <Link to="/">
            <p>Back to Home</p>  
          </Link>
            </button>
        </div>
      </div>
      <FooterDiv />
    </div>
  );
};

export default About;
