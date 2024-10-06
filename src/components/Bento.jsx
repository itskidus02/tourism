import React from "react";
import BentoGridData from "../data/BentoGridData"; // Adjust path as necessary

const Bento = () => {
  return (
    <div id="destination">
      <h1 className="title-text">Demographic Destinations</h1>

      {/* First Row */}
      <div className="grid lg:grid-cols-3 gap-3">
        {/* First destination */}
        <div className="flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[0].imageSrc.ertale}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[0].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left font-bricolage block -mb-[2.5rem] transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[0].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[0].description}
            </span>
          </div>
        </div>

        {/* Second destination */}
        <div className="flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[1].imageSrc.lalibela}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[1].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left -mb-[2.5rem] font-bricolage block transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[1].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[1].description}
            </span>
          </div>
        </div>

        {/* Third destination */}
        <div className="flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[2].imageSrc.dashen}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[2].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left -mb-[2.5rem] font-bricolage block transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[2].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[2].description}
            </span>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid lg:grid-cols-6 gap-3">
        {/* Fourth destination */}
        <div className="lg:col-span-4 flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[3].imageSrc.denakil}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[3].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left -mb-[1rem] font-bricolage block transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[3].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[3].description}
            </span>
          </div>
        </div>

        {/* Fifth destination */}
        <div className="lg:col-span-2 flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[4].imageSrc.gondar}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[4].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left -mb-[2.5rem] font-bricolage block transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[4].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[4].description}
            </span>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid lg:grid-cols-3 gap-3">
        {/* Sixth destination */}
        <div className="flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[5].imageSrc.omo}
            className="w-full h-[19rem] object-cover  rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[5].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left font-bricolage block -mb-[2.5rem] transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[5].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[5].description}
            </span>
          </div>
        </div>

        {/* Seventh destination */}
        <div className="flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[6].imageSrc.axum}
            className="w-full h-[19rem] object-cover  rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[6].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left -mb-[2.5rem] font-bricolage block transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[6].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[6].description}
            </span>
          </div>
        </div>

        {/* Eighth destination */}
        <div className="flex justify-center items-center mb-9 relative group">
          <img
            src={BentoGridData[7].imageSrc.harar}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt={BentoGridData[7].title}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-300">
            <span className="text-5xl text-left font-bricolage block -mb-[2.5rem] transition-transform duration-300 group-hover:-translate-y-10">
              {BentoGridData[7].title}
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-300 font-poppins block">
              {BentoGridData[7].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
