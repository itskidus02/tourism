import { MarqueeDemo } from "@/components/magicui/MarqueeDemo";
import React from "react";
import FooterDiv from "@/components/FooterDiv";
import Countdown from "@/components/Countdown";
import Newsletter from "@/components/Newsletter";
import Bento from "@/components/Bento";
const Home = () => {
  return (
    <div>
      <Bento/>
      <Countdown />
      <MarqueeDemo />
      <Newsletter />
      <FooterDiv />
    </div>
  );
};

export default Home;
