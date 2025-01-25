import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import TimeLineSection from "@/components/timeLine";
import {
  ArrowUpRight,
  ChartSpline,
  Handshake,
  Settings,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full">
      <HeroSection />
      <AboutUsSection />
      <AboutAxle />
      <WeValueSection />
      <div className=" h-12"></div>
      <Footer />
    </div>
  );
}

function AboutAxle() {
  return (
    <div className=" max-w-7xl w-full mx-auto px-6 md:px-4 py-8 flex md:flex-row-reverse flex-col gap-4">
      <div className=" w-full overflow-hidden h-auto">
        <img
          src="./axle.png"
          alt=""
          className="w-4/5 mx-auto h-auto -rotate-45 object-contain"
        />
      </div>
      <div className=" flex flex-col gap-4 w-full">
        <p className=" text-3xl md:text-5xl font-semibold font-roboto-slab">
          What Makes Our Axles Exceptional?
        </p>
        <p>
          Axles are the backbone of any vehicle, ensuring stability, power
          transmission, and smooth operation. At [Your Brand Name], we
          specialize in crafting high-performance axles that stand the test of
          time, delivering unparalleled durability and precision engineering.
        </p>
        <ul className=" mt-4">
          <li className="flex gap-2">
            <Settings className=" mt-0.5 shrink-0" size={20} color="red" />
            <p className="text-gray-400">
              <span className="text-white font-semibold">
                Superior Material Quality:
              </span>{" "}
              Built using high-grade steel and advanced alloys for exceptional
              strength.
            </p>
          </li>
          <li className="flex gap-2">
            <Settings className=" mt-0.5 shrink-0" size={20} color="red" />
            <p className="text-gray-400">
              <span className="text-white font-semibold">
                Precision Engineering:
              </span>{" "}
              Designed with cutting-edge technology to ensure smooth power
              delivery and reduced wear.
            </p>
          </li>
          <li className="flex gap-2">
            <Settings className=" mt-0.5 shrink-0" size={20} color="red" />
            <p className="text-gray-400">
              <span className="text-white font-semibold">
                Customizable Solutions:
              </span>{" "}
              Tailored axle solutions to meet the specific needs of your vehicle
              or application.
            </p>
          </li>
          <li className="flex gap-2">
            <Settings className=" mt-0.5 shrink-0" size={20} color="red" />
            <p className="text-gray-400">
              <span className="text-white font-semibold">
                Tested for Reliability:
              </span>{" "}
              Every axle undergoes rigorous testing to ensure maximum
              performance under all conditions.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className=" h-screen w-full flex flex-col relative ">
      <Image
        src="/hero-bg.jpg"
        alt="hero-bg"
        fill={true}
        className=" w-full -z-10 absolute top-0 left-0 h-full object-cover"
      />
      <div className=" w-full h-full bg-black opacity-50 -z-10 absolute top-0 left-0"></div>

      <NavBar />

      <div className=" h-full w-full  flex flex-col max-w-7xl px-6 md:px-4 mx-auto justify-center items-center z-10">
        <div className=" flex flex-col gap-3 md:gap-6  w-full">
          <h1 className=" text-6xl font-roboto-slab xl:text-7xl text-center md:text-left  text-white  font-bold">
            Super Axle Company
          </h1>
          <p className=" max-w-2xl text-gray-100 text-center md:text-left text-lg md:text-xl mt-2">
            At Super Axle Company, we take pride in leading with innovation,
            quality, and teamwork. Whether you’re a team member, partner, or
            customer, welcome to our community.
          </p>
          <Link
            href={"/contact-us"}
            className=" text-white py-2  px-6 mx-auto md:mx-0 w-full border text-center max-w-52 md:w-fit  mt-6 hover:bg-white font-bold hover:text-primary-red hover:border-primary-dark duration-300  "
          >
            {" "}
            Talk to us{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutUsSection() {
  return (
    <div className=" w-full px-6 md:px-4 flex flex-col md:flex-row md:gap-16 max-w-7xl mx-auto pb-6 pt-12">
      <div className=" w-full max-w-lg flex flex-col gap-6">
        <p className=" text-6xl font-semibold font-roboto-slab text-white">
          About Us
        </p>
        <p className=" text-gray-200">
          At Super Axle Company, we take pride in being a leader in innovation,
          quality, and teamwork. Whether you are joining us as a new team
          member, a partner, or a valued customer, we extend a warm welcome to
          our community.
        </p>
        <Link
          href={"/about-us"}
          className=" border hover:gap-2 duration-300 flex mt-3 items-center gap-1 py-1.5 px-3 w-fit rounded border-gray-400"
        >
          <p className=" font-medium">About Us</p>
          <ArrowUpRight size={20} />
        </Link>
      </div>
      <div className=" w-full">
        <TimeLineSection />
      </div>
    </div>
  );
}

const aboutUsData = [
  {
    Icon: ShieldCheck,
    title: "Quality Above All",
    description:
      "At Super Axle Company, quality is our priority. We use the finest materials and rigorous standards to ensure every drive shaft is durable, reliable, and built to perform under tough conditions. Our commitment to excellence builds trust and strengthens our reputation.",
  },
  {
    Icon: Handshake,
    title: "Community and Collaboration",
    description:
      "We grow by building strong connections in Rajasthan and beyond. By supporting local talent, empowering businesses, and fostering collaboration, we contribute to the economic and social development of the communities we serve.",
  },
  {
    Icon: ChartSpline,
    title: "Innovation and Growth",
    description:
      "Innovation drives us forward. By investing in technology, sustainable practices, and continuous improvement, we meet evolving customer needs. We focus on growth for the company, our team, and all stakeholders to create lasting progress.",
  },
];

function WeValueSection() {
  return (
    <div className=" max-w-7xl w-full mt-4 mx-auto px-6 md:px-4 py-8 flex md:flex-row flex-col gap-4">
      {aboutUsData.map((item) => (
        <div className=" w-full flex flex-col p-3 px-4 border rounded-md border-gray-500 hover:shadow-sm duration-200 cursor-pointer hover:shadow-neutral-400 bg-neutral-800 gap-2">
          <div className=" flex  flex-col items-center justify-center gap-2">
            <item.Icon size={48} />
            <p className=" text-xl  font-medium font-roboto-slab text-white">
              {item.title}
            </p>
          </div>
          <p className=" text-gray-400 text-sm text-center ">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
