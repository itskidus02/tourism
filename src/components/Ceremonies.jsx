import React, { useState } from "react";
import adey from "../assets/images/adey.jpg";

const Ceremonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the first visible card
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is happening
  const [direction, setDirection] = useState(""); // Track the direction (next or back)
  const cardsPerPage = 4; // Number of cards to show at once

  // Dummy card data for demonstration
  const cardsData = [
    { id: 1, title: "Title 1", description: "Description 1" },
    { id: 2, title: "Title 2", description: "Description 2" },
    { id: 3, title: "Title 3", description: "Description 3" },
    { id: 4, title: "Title 4", description: "Description 4" },
    { id: 5, title: "Title 5", description: "Description 5" },
    { id: 6, title: "Title 6", description: "Description 6" },
    { id: 7, title: "Title 7", description: "Description 7" },
    { id: 8, title: "Title 8", description: "Description 8" },
    { id: 9, title: "Title 9", description: "Description 8" },
    { id: 10, title: "Title 10", description: "Description 8" },
  ];

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
    <div>
      <h1 className="title-text">Cultural ceremonies</h1>
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
                style={{ transitionDelay: `${index * 0.1    }s` }} // Add delay for smoother staggered effect
              >
                <img
                  src={adey}
                  className="w-full h-[26rem] object-cover rounded-[10px] transition-transform duration-400 ease-in-out"
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-400 ease-in-out">
                  <span className="text-5xl text-left font-bricolage block -mb-[1.8rem] transition-transform duration-400 group-hover:-translate-y-10">
                    {card.title}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 text-left transition-opacity duration-400 font-poppins block">
                    {card.description}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-start mb-5 gap-3">
        <button
          className={`bg-green-300 px-4 py-2 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Back
        </button>
        <button
          className={`bg-rose-200 px-4 py-2 ${
            currentIndex >= cardsData.length - cardsPerPage
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
          disabled={currentIndex >= cardsData.length - cardsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Ceremonies;
