import React from "react";
import ertale from "../assets/images/ertale.jpg";

const Bento = () => {
  return (
    <div>
      <h1 className="title-text">Demographic Destinations</h1>

      <div className="grid grid-cols-3  gap-3">
        <div className="flex justify-center items-center mb-9  relative">
          <img
            src={ertale}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[10px] transition-all duration-300 bg-gradient-to-t from-black to-transparent"></div>
          
          {/* Text overlay in bottom left corner */}
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <span className="opacity-100 text-5xl text-left font-bricolage block">Ertale</span>
            <span className="opacity-100 font-poppins text-left block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis minus autem, rerum cupiditate iste sunt dolores!
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Bento;
