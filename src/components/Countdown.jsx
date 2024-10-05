import React, { useState, useEffect } from "react";
import adey from "../assets/images/adey.jpg";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date("September 11, 2025 00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft({
          months,
          days,
          hours,
          minutes,
        });
      } else {
        setTimeLeft({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
        });
      }
    };

    calculateTimeLeft(); 
    const timer = setInterval(calculateTimeLeft, 60000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="title-text">Next ethiopian new year is in..</h1>
    <div className="flex justify-center items-center mb-9 relative">
      <img
        src={adey}
        className="w-full h-[12rem] object-cover rounded-[10px] relative"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-[10px]"></div>

      <div className="absolute top-0 font-bold font-poppins italic left-0 w-full h-full gap-2 lg:gap-4 text-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">{timeLeft.months}</span>
          <h1>Months</h1>
        </div>

        <div className="text-3xl md:text-5xl lg:text-7xl mb-8 font-bold">:</div>

        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">{timeLeft.days}</span>
          <h1>Days</h1>
        </div>

        <div className="text-3xl md:text-5xl lg:text-7xl mb-8 font-bold">:</div>

        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">{timeLeft.hours}</span>
          <h1>Hours</h1>
        </div>

        <div className="text-3xl md:text-5xl lg:text-7xl  mb-8 font-bold">:</div>

        <div className="flex flex-col justify-center items-center">
          <span className="text-xl md:text-4xl lg:text-8xl">{timeLeft.minutes}</span>
          <h1>Minutes</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Countdown;
