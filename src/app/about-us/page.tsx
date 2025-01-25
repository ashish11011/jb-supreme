"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import React from "react";
import { motion } from "framer-motion";
import { CircleDot, Dot } from "lucide-react";
import TimeLineSection from "@/components/timeLine";

const Page = () => {
  return (
    <div className=" w-full">
      <NavBar />
      <div className=" h-96 w-full">
        <img
          className=" w-full h-full object-cover"
          src="./contact-us-hero.webp"
          alt=""
        />
      </div>
      <div className=" px-2">
        <div className=" z-10 -translate-y-32 shadow-sm flex flex-col gap-4   shadow-neutral-600 rounded max-w-4xl mx-auto w-full text-white px-6 md:px-8 py-6 bg-primary-dark ">
          <p className=" text-3xl md:text-4xl font-medium">About Us</p>
          <p className=" text-gray-200">
            At Super Axle Company, we take pride in leading with innovation,
            quality, and teamwork. Whether you’re a team member, partner, or
            customer, welcome to our community.
          </p>

          <FounderProfile />

          <TimeLineSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

function FounderProfile() {
  return (
    <div className=" w-full flex md:gap-6 gap-12 flex-col md:flex-row">
      {founderProfileData.map((item) => (
        <FounderProfileCard profileData={item} />
      ))}
    </div>
  );
}

function FounderProfileCard({ profileData }: any) {
  return (
    <div className=" w-full border rounded overflow-hidden border-neutral-700 flex flex-col gap-2">
      <div className=" w-full bg-neutral-800 h-64 ">
        <img
          src={profileData.image}
          className=" w-full h-full object-contain"
          alt=""
        />
      </div>
      <div className=" px-4  pt-2 pb-3">
        <p className=" text-xl font-medium capitalize">{profileData.name}</p>
        <p className=" font-bold text-primary-red uppercase text-xs">
          {profileData.title}
        </p>
        <p className=" text-gray-200 mt-2">{profileData.thought}</p>
      </div>
    </div>
  );
}

const founderProfileData = [
  {
    name: "MR. Narendra BERWAL",
    title: "FOUNDER & CEO",
    image: "./narendra.png",
    thought:
      "“Built on vision, driven by trust – crafting excellence since 1998.”",
  },
  {
    name: "mr. hitesh berwal",
    title: "managing director",
    image: "./hitesh.png",
    thought:
      "“Carrying forward a legacy of excellence, building a future of innovation.”",
  },
];
