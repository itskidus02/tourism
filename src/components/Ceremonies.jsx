import React, { useState } from "react";
import coffe from "../assets/images/coffe.jpg";
import meskel from "../assets/images/meskel.jpg";
import ashenda from "../assets/images/ashenda.jpg";
import adwa from "../assets/images/adwa.jpg";
import timket from "../assets/images/timket.jpg";
import irecha from "../assets/images/irecha.jpg";
import arrowright from "../assets/icons/arrowright.svg";
import arrowleft from "../assets/icons/arrowleft.svg";
import { Button } from "./ui/button";

const Ceremonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const cardsPerPage = 4;

  // Updated card data with image paths
  const cardsData = [
    { "id": 1, "title": "Timket", "description": "Timket celebrates the Epiphany with colorful processions and ceremonies marking the baptism of Jesus in the Jordan River.", image: timket },
    { "id": 2, "title": "Coffee", "description": "A traditional ritual of coffee preparation and serving, emphasizing hospitality and socializing.", image: coffe },
    { "id": 3, "title": "Meskel", "description": "Meskel commemorates the finding of the True Cross on which Jesus was crucified, celebrated with bonfires and religious ceremonies.", image: meskel },
    { "id": 4, "title": "Adwa", "description": "Adwa celebrates Ethiopia's victory over Italian forces in 1896, symbolizing resilience and national pride.", image: adwa },
    { "id": 5, "title": "Irrecha", "description": "Irrecha is a thanksgiving ceremony of the Oromo people, celebrating the end of the rainy season and offering gratitude to God.", image: irecha },
    { "id": 6, "title": "Ashenda", "description": "Ashenda is a cultural festival celebrated primarily by the Tigray and Amhara ethnic groups, featuring music, dance, and colorful attire.", image: ashenda }
  ]
  
  // Function to handle the next card animation
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

  // Function to handle the previous card animation
  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setDirection("prev");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsAnimating(false);
      }, 300); // Match the animation duration
    }
  };

  return (
    <div className="mb-[3rem] ">
      <h1 id="ceremony" className="title-text">Cultural ceremonies</h1>
      <div className="relative overflow-hidden">
        <div className="grid gap-2 lg:grid-cols-4 relative">
          {cardsData
            .slice(currentIndex, currentIndex + cardsPerPage) // Only show 4 cards
            .map((card, index) => (
              <div
                key={card.id}
                className={`flex justify-center items-center mb-2 relative group transition-transform duration-400 ease-in-out ${
                  isAnimating
                    ? direction === "next"
                      ? "transform -translate-x-full" // Move left when going forward
                      : "transform translate-x-full" // Move right when going backward
                    : ""
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }} // Add delay for smoother staggered effect
              >
                <img
                  src={card.image} // Use the dynamic image path
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

export default Ceremonies;
