import React from "react";
import newsletter from "../assets/images/bgnewsletter.jpg";
import warrowright from "../assets/icons/warrowright.svg";
const Newsletter = () => {
  return (
    <div>
      <div
        id="newsletter"
        className="flex justify-center items-center mb-9 relative"
      >
        <img
          src={newsletter}
          className="w-full h-[30rem] object-cover rounded-[10px] relative"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black to-transparent rounded-[10px]"></div>
        <div className="absolute justify-center items-en font-bricolage w-full left-0 h-full gap-1 md:gap-2 lg:gap-4 text-white flex flex-col text-left">
          <div className="p-8">
            <span className="text-md md:text-xl lg:text-3xl ml-2">
              You can reach us here
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-9xl leading-[2rem] md:leading-[4rem] font-md lg:leading-[7rem]">
              Sign up to our Newsletter
            </h1>
            <span className="text-sm md:text-xl lg:text-[1rem]">
              Subscribe to the Newsletter so as not to miss places, events and
              experiences for experiencing the best side of Ethiopia: the
              authentic one.
            </span>

            <div className="flex gap-2 mt-3 items-center">
              <input
                type="text"
                placeholder="email"
                className="p-1 px-[1rem] md:p-2 md:px-3 lg:p-2 lg:px-4 rounded-[5px] text-sm md:text-base lg:text-lg"
              />
              <button className="bg-transparent ring-1 ring-white text-white hover:bg-white transition-all duration-300 flex justify-center items-center gap-3 px-2 md:px-3 lg:px-5 py-1 lg:py-2 rounded-[5px] hover:text-slate-900 text-sm md:text-base lg:text-lg">
                <span className="hidden  sm:inline">Subscribe</span>{" "}
                {/* Hide text on small screens */}
                <img
                  src={warrowright}
                  className="icon md:hidden lg:hidden"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
