import React from "react";
import Image from "next/image";
import "../app/globals.css";
import designing from "../images/designing.png";
import website from "../images/website.png";
import mobile from "../images/mobile.png";
import aitc from "../images/aitc.png";
// import download from "./download.png";
const Projects = () => {
  return (
    <div className="max-w-fit text-center">
      <div className="text-stroke-3 py-8">
        <h1 className="text-center text-black text-6xl stroke-lime-50">
          <span className="stroke-3 font-bold">Worked</span> With
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-6 sm:mx-16 my-20 rounded-xl">
          <div className="rounded-lg">
            <p className="text-sm pt-10 text-center">
              AITC International Pvt. Ltd. is Nepal’s #1 IT services company
              that provides the finest business solutions in the Information
              Technology domain. We are a medium-scale business with over 40
              tech experts collaborating to streamline digital operations for
              Nepali and global businesses.
            </p>
            <h1 className="text-4xl md:text-9xl font-bold pt-6 text-center">
              AITC
            </h1>
          </div>
          <div className="rounded-lg text-center">
            <Image src={aitc} className="px-6 py-6 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
