import React, { useState } from "react";
import hike from "../assets/images/hike.jpg";
import meskel from "../assets/images/meskel.jpg";
import run from "../assets/images/run.jpg";
import food from "../assets/images/food.jpg";
import wild from "../assets/images/wild.jpg";
import omoo from "../assets/images/omoo.jpg";
import arrowright from "../assets/icons/arrowright.svg";
import arrowleft from "../assets/icons/arrowleft.svg";

const ToDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const cardsPerPage = 4;

  // Updated card data with image paths
  const cardsData = [
    { "id": 1, "title": "Mountain Hiking", "description": "A challenging and rewarding adventure exploring Ethiopia's stunning mountain landscapes.", image: hike },
    { "id": 2, "title": "Ethiopian run", "description": "An exhilarating experience immersing in Ethiopia's vibrant running culture and scenic routes.", image: run },
    { "id": 3, "title": "Cuisine", "description": "Delicious and diverse flavors of Ethiopian cuisine, reflecting rich cultural traditions and hospitality.", image: food },
    { "id": 4, "title": "Wildlife", "description": "Encounters with Ethiopia's diverse wildlife and natural habitats, offering unique safari experiences.", image: wild },
    { "id": 5, "title": "Omo Culture", "description": "Exploration of the unique cultural heritage and traditions of the Omo Valley communities.", image: omoo },
    { "id": 6, "title": "Pilgrimage", "description": "Participation in Ethiopia's vibrant cultural festivals, featuring music, dance, and traditional attire.", image: meskel }
  ];
  
  
  const handleNext = () => {
    if (currentIndex < cardsData.length - cardsPerPage) {
      setIsAnimating(true);
      setDirection("next");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsAnimating(false);
      }, 400); // Match the animation duration
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setDirection("prev");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsAnimating(false);
      }, 300); 
    }
  };

  return (
    <div className="mb-[3rem] ">
      <h1 id="todo" className="title-text">Things Todo in Ethiopia</h1>
      <div className="relative overflow-hidden">
        <div className="grid gap-2 lg:grid-cols-4 relative">
          {cardsData
            .slice(currentIndex, currentIndex + cardsPerPage) 
            .map((card, index) => (
              <div
                key={card.id}
                className={`flex justify-center items-center mb-2 relative group transition-transform duration-400 ease-in-out ${
                  isAnimating
                    ? direction === "next"
                      ? "transform -translate-x-full" 
                      : "transform translate-x-full" 
                    : ""
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }} 
              >
                <img
                  src={card.image} 
                  className="w-full h-[26rem] font-bold object-cover rounded-[10px] transition-transform duration-400 ease-in-out"
                  alt={card.title}
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-400 ease-in-out">
                  <span className="text-5xl text-left font-bricolage block -mb-[1.8rem] transition-transform duration-400 group-hover:-translate-y-10">
                    {card.title}
                  </span>
                  <span className="opacity-0 text-xs group-hover:opacity-100 text-left transition-opacity duration-400 font-poppins block">
                    {card.description}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-start items-center font-bricolage mb-5 gap-3">
        <span className="text-xl font-poppins">Explore more</span>
     
     <div className="flex justify-center gap-2">
        <button
          className={` rounded-[5px] ring-1 ring-[#0f172a] hover:bg-slate-200 transition-all duration-300 px-2 py-1 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
         <img src={arrowleft} className="icon" alt="" />
        </button>
        <button
          className={` rounded-[5px] ring-1 ring-[#0f172a] hover:bg-slate-200 transition-all duration-300 px-2 py-1 ${
            currentIndex >= cardsData.length - cardsPerPage
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
          disabled={currentIndex >= cardsData.length - cardsPerPage}
        >
         <img src={arrowright} className="icon" alt="" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
