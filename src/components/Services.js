import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import designing from "../images/designing.png";
import website from "../images/website.png";
import mobile from "../images/mobile.png";
import "../app/globals.css";

const Services = () => {
  return (
    <div className="bg-[#121212] pb-8">
      <div className="text-6xl font-bold text-center pt-9 text-white">
        <h1>
          Our <span className="stroke-4 font-bold">Services</span>
        </h1>
      </div>
      <div className="bg-[#e3e2de] rounded-xl mx-6 sm:mx-16 my-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="rounded-lg text-center">
          <Image src={designing} className="px-6 py-6 rounded-lg" />
        </div>
        <div className="rounded-lg text-center pb-8">
          <h1 className="text-3xl font-semibold lg:mt-16">Graphics Design</h1>
          <p className="mt-4 sm:mt-12">Design Awesome Graphics with Us!</p>
          <button className="bg-[#ed8913] inline-flex text-white py-2 px-4 rounded-full mt-8 sm:mt-16 text-lg sm:text-2xl relative">
            Our Works
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
      <div className="bg-[#e3e2de] rounded-xl mx-6 sm:mx-16 my-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="rounded-lg text-center pb-8">
          <h1 className="text-3xl font-semibold lg:mt-16">Web Development</h1>
          <p className="mt-4 sm:mt-12">Create Stunning Website with Us!</p>
          <button className="bg-[#ed8913] inline-flex text-white py-2 px-4 rounded-full mt-8 sm:mt-16 text-lg sm:text-2xl relative">
            Our Works
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
        <div className="rounded-lg text-center">
          <Image src={website} className="px-6 py-6 rounded-lg" />
        </div>
      </div>
      <div className="bg-[#e3e2de] rounded-xl mx-6 sm:mx-16 my-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="rounded-lg text-center">
          <Image src={mobile} className="px-6 py-6 rounded-lg" />
        </div>
        <div className="rounded-lg text-center pb-8">
          <h1 className="text-3xl font-semibold lg:mt-16 sm:mt-8">
            App Development
          </h1>
          <p className="mt-4 sm:mt-12">
            User-Friendly App According to Design!
          </p>
          <button className="bg-[#ed8913] inline-flex text-white py-2 px-4 rounded-full mt-8 sm:mt-16 text-lg sm:text-2xl relative">
            Our Works
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
