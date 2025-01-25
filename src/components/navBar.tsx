"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=" relative max-w-[92rem] z-40 mx-auto items-center px-6 md:px-4 w-full py-6 flex justify-between">
      <div className=" h-12 md:h-16">
        <img
          className=" w-full h-full object-contain"
          src="./logo-nobg.png"
          alt=""
        />
      </div>
      <div className=" hidden md:flex text-white items-center gap-4">
        <Link
          href={"/"}
          className=" border-b-2 duration-200 border-transparent hover:border-red-700 px-2 cursor-pointer py-1"
        >
          Home
        </Link>
        <Link
          href={"/about-us"}
          className=" border-b-2 duration-200 border-transparent hover:border-red-700 px-2 cursor-pointer py-1"
        >
          About Us
        </Link>
        <Link
          href={"/contact-us"}
          className=" border-b-2 duration-200 border-transparent hover:border-red-700 px-2 cursor-pointer py-1"
        >
          Contact Us
        </Link>
      </div>

      <div className="flex md:hidden">
        {open ? (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 bg-primary-dark z-50 px-6 flex-col w-full py-6 flex left-0 h-screen "
          >
            <div className=" w-full h-fit flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className=" h-12 md:h-16"
              >
                <img
                  className=" w-full h-full object-contain"
                  src="./logo-nobg.png"
                  alt=""
                />
              </motion.div>
              <X
                className=" text-white"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </div>

            <div className=" mt-32 text-center text-white flex flex-col gap-4">
              <Link href={"/"}> Home</Link>
              <Link href={"/about-us"}> About Us</Link>
              <Link href={"/contact-us"}> Contact Us</Link>
            </div>
          </motion.div>
        ) : (
          <Menu
            className=" text-white"
            onClick={() => {
              setOpen(!open);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
