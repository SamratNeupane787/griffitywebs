"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import designing from "@/images/designing.png";

const exported = () => {
  return (
    <main className=" max-w-full text-white ">
      <div class="relative min-w-full bg-slate-950 h-full  md:h-full lg:h-1/2">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <Navbar />
          <div className=" text-center mt-20 flex items-center justify-center flex-col sm:mt-30">
            <h1 className="text-7xl font-semibold font-monst ">
              What We{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Offer !
              </span>
            </h1>
            <p className=" text-md my-12 md:text-lg lg:text-lg">
              We offer wide range of services! at an affordable price
            </p>
          </div>
        </div>
      </div>

      <div className=" text-center text-5xl text4xl font-semibold  text-black mt-8">
        <h1>Our Services</h1>
      </div>

      <div className=" grid place-items-center mx-12 pb-10 text-black mt-16 sm:grid-cols-1 md:grid-cols-3 mx-50 lg:grid-cols-3 mx-50">
        <div className="  border-l-2 broder-black w-1/2 max-h-full">
          <div className=" mx-4">
            <h1 className=" text-6xl font-bold font-monst bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              01
            </h1>
            <p className=" text-2xl font-semibold font-monst my-12">
              Graphics Designing
            </p>
          </div>
        </div>
        <div className=" border-l-2 broder-black w-1/2 max-h-full">
          <div className=" mx-4">
            <h1 className=" text-6xl font-bold font-monst bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              02
            </h1>
            <p className=" text-2xl font-semibold font-monst my-12">
              Website Development
            </p>
          </div>
        </div>
        <div className=" border-l-2 broder-black w-1/2 max-h-full">
          <div className=" mx-4">
            <h1 className=" text-6xl font-bold font-monst bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              03
            </h1>
            <p className=" text-2xl font-semibold font-monst my-12">
              Video <br />
              Editing
            </p>
          </div>
        </div>

        <div className="mt-10 border-l-2 broder-black w-1/2 max-h-full">
          <div className=" mx-4">
            <h1 className=" text-6xl font-bold font-monst bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              04
            </h1>
            <p className=" text-2xl font-semibold font-monst my-12 ">
              App Development
            </p>
          </div>
        </div>

        <div className="mt-10 border-l-2 broder-black w-1/2 max-h-full">
          <div className=" mx-4">
            <h1 className=" text-6xl font-bold font-monst bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              06
            </h1>
            <p className=" text-2xl font-semibold font-monst my-12">SEO</p>
          </div>
        </div>
      </div>

      <div className=" text-black text-center">
        <p>For Knowing about the Price Send us An Email</p>
        <p>email: contact@griffitystudios.com</p>
      </div>
    </main>
  );
};

export default exported;
