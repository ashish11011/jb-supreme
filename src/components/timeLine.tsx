"use client";
import { motion } from "framer-motion";
function TimelineAnimation() {
  return (
    <div className="relative w-1 max-w-4xl mx-auto max-h-96 h-full bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 h-1 w-1 md:w-1 bg-[#d92c28] rounded-full shadow-[0_0_20px_4px_rgba(217,44,40,0.6)]"
        initial={{ top: 0 }}
        animate={{ top: "100%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ y: "-50%" }}
      ></motion.div>
    </div>
  );
}

function TimeLineSection() {
  const thisYear = new Date().getFullYear();
  return (
    <div className=" flex flex-col md:flex-row md:my-28 gap-6 my-8 md:gap-2">
      <div className=" flex flex-col  md:-translate-y-1/2 gap-2 border border-neutral-700 py-3 rounded-md text-gray-100 h-fit text-sm px-3 md:w-2/3 ">
        <p className=" font-bold text-lg ">1998</p>
        <p>
          Founded in 1998 by{" "}
          <span className=" text-primary-red font-semibold">
            Mr. Narendra Berwal
          </span>{" "}
          in Hisar, Haryana, Super Axle Company started as a small team driven
          by dedication and a vision for quality. Today, it stands as a trusted
          name in the axle industry, delivering innovation and reliability
          across India
        </p>
      </div>
      <div className=" hidden md:flex flex-col items-center justify-center h-56 mx-auto ">
        <div className=" self-start size-2 bg-red-500 rounded-full"></div>
        <TimelineAnimation />
        <div className="self-end  size-2 bg-primary-red opacity-60 rounded-full"></div>
      </div>
      <div className=" self-end md:translate-y-1/2 flex flex-col gap-2 border border-neutral-700 py-3 rounded-md text-gray-100 text-sm px-3  md:w-2/3 ">
        <p className=" font-bold text-lg  w-full">{thisYear}</p>
        <p>
          In 2025, under{" "}
          <span className=" font-semibold text-primary-red">
            Hitesh Berwal's
          </span>{" "}
          leadership, Super Axle Company grew tenfold with two factories in
          Jaipur, delivering top-quality axles nationwide and upholding its
          legacy of excellence
        </p>
      </div>
    </div>
  );
}

export default TimeLineSection;
