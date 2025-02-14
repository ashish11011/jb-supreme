import { details } from "framer-motion/client";
import { Mail, MapPinned, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" w-full max-w-7xl mx-auto flex px-4 md:px-4 flex-col text-white">
      <div className=" flex flex-col">
        <p className=" text-lg md:text-xl">Intrested in working with us?</p>
        <p className=" uppercase font-bold text-xl md:text-3xl">
          info@superaxlecompany.com
        </p>
      </div>
      <div className=" mt-16 md:mt-8 flex flex-col lg:flex-row gap-8 justify-between w-full ">
        <div className=" flex justify-between gap-4">
          <p>Socials:</p>
          <div className=" flex text-right md:text-left flex-col">
            <div className="flex gap-1 w-fit self-end md:self-start items-center">
              <Phone size={18} />
              <Link href={"tel:+918290767747"}>+91 8290767747</Link>
            </div>
            <div className="flex gap-1 items-center">
              <Mail size={18} />
              <Link href={"mailto:info@superaxlecompany.com"}>
                info@superaxlecompany.com
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-between gap-4">
          <p>Location:</p>
          <div className=" text-right gap-1 md:text-left flex">
            <MapPinned />
            <div className=" flex flex-col" >
            <p>C-81,Gol Market, Jaipur</p>
            <p>Rajasthan, India 302017</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-between gap-4">
          <p>Navigation:</p>
          <div className=" text-right md:text-left flex flex-col">
            <Link href={"/"}>Home</Link>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
          </div>
        </div>
        <div className=" flex justify-between gap-4">
          <p>Expertise:</p>
          <div className=" text-right md:text-left flex  flex-col">
            <p className=" capitalize">car axle</p>
            <p className=" capitalize">axle parts</p>
          </div>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default Footer;
