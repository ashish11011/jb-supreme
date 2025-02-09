"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import { LoaderCircle, Mail, MapPinned, Phone } from "lucide-react";
import React from "react";
import {sendMail} from "./sendmail"

const Page = () => {
  return (
    <div>
      <NavBar />
      <div className=" h-96 w-full">
        <img
          className=" w-full h-full object-cover"
          src="./contact-us-hero.webp"
          alt=""
        />
      </div>
      <div className=" px-2">
        <div className=" z-10 -translate-y-32 shadow-sm  shadow-neutral-800 rounded max-w-4xl mx-auto w-full text-white px-6 md:px-8 py-6 bg-primary-dark ">
          <p className=" text-3xl md:text-4xl font-medium">Contact Us</p>
          <ContactUsForm />
        </div>
      </div>
      <ShowContactDetail />
      <Footer />
    </div>
  );
};

export default Page;

function ContactUsForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formeSubmitionResponse, setFormeSubmitionResponse] = React.useState("");
  function handleContactUsSubmit(e: any) {
    setIsLoading(true);
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    sendMail(data)
    // console.log(msg);
    setFormeSubmitionResponse("form is successfully submitted");
    const timmer = setTimeout(() => {
      setFormeSubmitionResponse("");
    }, 5000);

    e.target.reset();
    setIsLoading(false);
    return () => {
      clearTimeout(timmer);
    };
  }
  return (
    <form onSubmit={handleContactUsSubmit} className=" flex flex-col gap-4 md:gap-8 mt-8" action="">
      <div className=" flex flex-col md:flex-row gap-4">
        <div className=" w-full flex flex-col gap-1">
          <div className="">First Name</div>
          <input
            className=" bg-transparent focus:outline-none border border-neutral-700 focus:ring-1 rounded py-2 px-3 w-full "
            type="text"
            name="first_name"
            placeholder="Enter your first name"
          />
        </div>
        <div className=" w-full flex flex-col gap-1">
          <div className="">Last Name</div>
          <input
            className=" bg-transparent focus:outline-none border border-neutral-700 focus:ring-1 rounded py-2 px-3 w-full "
            type="text"
            name="last_name"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-4">
        <div className=" w-full flex flex-col gap-1">
          <div className="">Email</div>
          <input
            className=" bg-transparent focus:outline-none border border-neutral-700 focus:ring-1 rounded py-2 px-3 w-full "
            type="text"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className=" w-full flex flex-col gap-1">
          <div className="">Mobile Number</div>
          <input
            className=" bg-transparent focus:outline-none border border-neutral-700 focus:ring-1 rounded py-2 px-3 w-full "
            type="text"
            name="mobile"
            placeholder="Enter your mobile number"
          />
        </div>
      </div>
      <div className=" w-full gap-1 flex-col flex">
        <p>Message</p>
        <textarea
          rows={4}
          className=" bg-transparent focus:outline-none border border-neutral-700 focus:ring-1 rounded py-2 px-3 w-full "
          name="message"
          placeholder="Enter your message"
          id=""
        ></textarea>
      </div>
      <p className=" capitalize underline text-green-500" >{formeSubmitionResponse}</p>
      <button disabled={isLoading} type="submit" className=" px-6 py-3 md:py-2 cursor-pointer w-full md:w-fit mt-6 text-lg border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 duration-200 self-end flex justify-center">
        {isLoading ? (
          <LoaderCircle size={20} className=" animate-spin" />
        ) : (
          <p>Submit</p>
        )}
      </button>
    </form>
  );
}

function ShowContactDetail() {
  return (
    <div className=" text-white px-4 -translate-y-16 max-w-4xl mx-auto w-full bg-primary-dark flex flex-col md:flex-row gap-4">
      <div className=" border flex flex-col bg-neutral-800 min-h-32 gap-6 border-neutral-700 w-full py-6 px-8  ">
        <div className=" flex gap-2 items-center">
          <Phone size={20} color="white" />
          <p>+91-8290767747</p>
        </div>
        <div className=" flex gap-2 items-center">
          <Mail size={20} color="white" />
          <p>info@superaxlecompany.com</p>
        </div>
      </div>
      <div className=" border flex bg-neutral-800 min-h-32  gap-6 border-neutral-700 w-full py-6 px-8">
        <MapPinned />
        <div className=" flex flex-col gap-1">
          <p>C-81,GOL MARKET, JAIPUR</p>
          <p>Rajasthan, India 302017</p>
        </div>
      </div>
    </div>
  );
}
