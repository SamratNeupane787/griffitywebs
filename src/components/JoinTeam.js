import React from "react";

function JoinTeam() {
  return (
    <div id="JoinTeam">
      <div
        className="hero h-64 bg-opacity-25"
        style={{
          backgroundImage: "url('./jointeam.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="text-6xl lg:text-8xl font-bold text-white opacity-100">
              Join Our Team
            </h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl lg:text-7xl pt-8 font-semibold text-center">
          Can Make A Change ?
        </h1>
        <div className="flex items-center justify-center pt-6 lg:pt-10">
          <button className="bg-transparent text-yellow-500 font-semibold py-3 px-6 lg:py-4 lg:px-8 border border-yellow-500 hover:border-transparent rounded">
            Send Your CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinTeam;
