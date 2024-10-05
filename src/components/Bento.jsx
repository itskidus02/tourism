import React, { useState } from "react";
import ertale from "../assets/images/ertale.jpg";

const Bento = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  return (
    <div>
      <h1 className="title-text">Demographic Destinations</h1>

      <div className="grid grid-cols-3  gap-3">
        <div
          className="flex justify-center items-center mb-9 relative"
          onMouseEnter={() => setIsHovered(true)} // Set hover to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover to false on mouse leave
        >
          <img
            src={ertale}
            className="w-full h-[19rem] object-cover rounded-[10px] transition-transform duration-300"
            alt=""
          />
          <div
            className={`absolute top-0 left-0 w-full h-full rounded-[10px] transition-all duration-300 ${
              isHovered ? "bg-gradient-to-t from-black to-transparent " : "bg-transparent"
            }`}
          ></div>
          {/* Text overlay in bottom left corner */}
          <div className="absolute bottom-0 left-0 p-4 text-white transition-transform duration-300">
            {isHovered ? ( // Conditional rendering based on hover state
              <span className="opacity-100 font-poppins text-center transition-opacity duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis omnis minus autem, rerum cupiditate iste sunt dolores!
                
              </span>
            ) : (
              <span className="opacity-100 transition-opacity duration-300 text-5xl font-bricolage">Ertale</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
