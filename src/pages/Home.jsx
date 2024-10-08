import { MarqueeDemo } from "@/components/magicui/MarqueeDemo";
import React from "react";
import FooterDiv from "@/components/FooterDiv";
import Countdown from "@/components/Countdown";
import Newsletter from "@/components/Newsletter";
import Bento from "@/components/Bento";
import Ceremonies from "@/components/Ceremonies";
import ToDo from "@/components/ToDo";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ToDo/>
      <Ceremonies/>
      <Bento/>
      <Countdown />
      <MarqueeDemo />
      <Newsletter />
      <FooterDiv />
    </div>
  );
};

export default Home;
