import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import ethbgblack from "../assets/icons/eth-bg-black.png";
import { Button } from "./ui/button";
const FooterDiv = () => {
  return (
    <div className="font-poppins ">
      <div className="flex justify-center items-center flex-col gap-7">
        {/* logo */}
        <img src={ethbgblack} className="ethlogo" alt=""></img>
        {/* cta */}
        <div className="flex gap-5  items-center">
          <h1 className="tourism-text">Home</h1>
          <h1 className="tourism-text">About</h1>
          <h1 className="tourism-text">Places</h1>
          <h1 className="tourism-text">Get in touch</h1>
          <h1 className="tourism-text">Ceremonies</h1>
        </div>
        {/* social */}
        <div className="flex gap-4 items-center">
          <img src={facebook} className="icon" alt="" />
          <img src={instagram} className="icon" alt="" />
          <img src={linkedin} className="icon" alt="" />
        </div>
      </div>
      <div className="flex border-t p-3 mt-7 justify-between items-center">
        {/* lang */}
        <div className="flex gap-2 items-center">
          <Button>English</Button> <h1 className="tourism-text">Amharic</h1>
          <h1 className="tourism-text">Afaan Oromo</h1>
        </div>
        {/* copy */}
        <div>Non Copyrighted ©2024 Ethiopian tourism office</div>
      </div>
    </div>
  );
};

export default FooterDiv;
