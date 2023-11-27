import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="hero min-h-screen min-w-screen relative">
        <video
          autoPlay
          loop
          muted
          className="video-background absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="./1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay bg-opacity-60">
          <Navbar />
        </div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md mx-auto font-monst">
            <h1 className="mb-5 text-6xl font-bold text-white ">
              Griffity Studios
            </h1>

            <button className="btn mt-8 btn-primary rounded-full text-3xl font-semibold font-monst text-white">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
