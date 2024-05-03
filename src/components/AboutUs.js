import React from "react";
import Image from "next/image";
import bluess from "../images/bluess.png";

function AboutUs() {
  return (
    <div>
      <div
        className="hero h-72 bg-opacity-25"
        style={{
          backgroundImage: "url('./team.png')",
          backgroundPositionY: -286,
          backgroundBlendMode: "normal",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold text-white opacity-100">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 place-items-center mx-6 sm:mx-16 my-20 rounded-xl">
        <div className="rounded-lg">
          <h1 className="text-7xl font-bold text-center lg:text-right">
            Our Mission
          </h1>
          <p className="text-lg pt-10 lg:text-right">
            AITC International Pvt. Ltd. is Nepal’s #1 IT services company that
            provides the finest business solutions in the Information Technology
            domain. We are a medium-scale business with over 40 tech experts
            collaborating to streamline digital operations for Nepali and global
            businesses.
          </p>
        </div>
        <div className="rounded-lg text-center">
          <Image
            src={bluess}
            className="px-6 py-6 rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
