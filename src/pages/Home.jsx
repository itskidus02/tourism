import { MarqueeDemo } from "@/components/magicui/MarqueeDemo";
import React from "react";
import FooterDiv from "@/components/FooterDiv";
import Countdown from "@/components/Countdown";
import Newsletter from "@/components/Newsletter";
const Home = () => {
  return (
    <div>
      <Countdown />
      <MarqueeDemo />
      <Newsletter />
      <FooterDiv />
    </div>
  );
};

export default Home;
