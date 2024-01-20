import React from "react";
import Image from "next/image";
import designing from "../images/designing.png";
import website from "../images/website.png";
import mobile from "../images/mobile.png";
const Services = () => {
  return (
    <div>
      <div className=" text-6xl font-bold text-center mt-9">
        <h1>Our services</h1>
      </div>
      <div className="bg-[#e3e2de] rounded-xl place-items-center mx-16 my-20 grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="rounded-lg text-center ">
          <Image src={designing} className=" px-6 py-6 rounded-lg" />
        </div>
        <div className="rounded-lg text-center pb-8">
          <h1 className=" text-3xl font-semibold">Graphics Design</h1>
          <p className="mt-12">Design Awesome Graphics with Us!</p>
          <ol className=" mt-8 text-slate-400">
            <li>+ Logo Design</li>
            <li>+ Social Media Design</li>
          </ol>
          <button class="bg-[#ed8913]  text-white font-semibold py-2 px-4 rounded-full mt-16 text-3xl">
            Our Designs
          </button>
        </div>
      </div>
      <div className="bg-[#e3e2de]  grid lg:grid-cols-2 sm:grid-cols-1 place-items-center mx-16 my-20 rounded-xl">
        <div className="rounded-lg text-center ">
          <h1 className=" text-3xl font-semibold">Web Development</h1>
          <p className="mt-12">Create Stunning Website with Us!</p>

          <button class="bg-[#ed8913]  text-white font-semibold py-2 px-4 rounded-full mt-16 text-3xl">
            Check Websites
          </button>
        </div>
        <div className="rounded-lg text-center ">
          <Image src={website} className=" px-6 py-6 rounded-lg" />
        </div>
      </div>

      <div className="bg-[#e3e2de]  grid lg:grid-cols-2 sm:grid-cols-1 place-items-center mx-16 my-20 rounded-xl">
        <div className="rounded-lg text-center ">
          <Image src={mobile} className=" px-6 py-6 rounded-lg" />
        </div>
        <div className="rounded-lg text-center ">
          <h1 className=" text-3xl font-semibold">App Development</h1>
          <p className="mt-12">UserFriendly App According to Design!</p>
          <button class="bg-[#ed8913]  text-white font-semibold py-2 px-4 rounded-full mt-16 text-3xl">
            Check Our Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
