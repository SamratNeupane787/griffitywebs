import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className=" h-96">
        <div
          className="hero  min-h-full "
          style={{
            backgroundImage: "url(/services.JPG)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md ">
              <h1 className="my-5 text-8xl font-speci text-black">
                Our Services
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid place-items-center grid-cols-1 mt-8">
        <div className=" grid place-items-left lg:grid-cols-2 place-items-left  sm:grid-cols-1 place-items-center">
          <div className="lg:text-left md:text-center sm:text-center">
            <h2 className=" text-orange-400 text-2xl font-monst font-semibold">
              Web Development
            </h2>
            <h2 className=" mt-4 text-4xl font-monst font-semibold">
              Clean Design and Responsive
            </h2>

            <p className="mt-6 space-y-4 space-x-4 text-2xl">
              Create an exceptional website by harnessing the expertise<br></br>{" "}
              of our seasoned web developers. Benefit from their <br></br>
              proficiency in utilizing cutting-edge technology stacks,<br></br>{" "}
              ensuring your website stands out with a modern and dynamic
              <br></br>presence. Web Developers with Modern Stack
            </p>
            <button className="btn rounded-full mt-7 bg-orange-400 btn-ghost text-white">
              Learn More
            </button>
          </div>
          <div className="flex lg:justify-end items-end">
            <Image src="/webd.png" width={440} height={440} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
