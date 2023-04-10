import React from "react";
import bannerImg from "../../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="flex justify-around items-center bg-slate-100 ">
      <div className="my-8">
        <h1>
          One Step <br /> Closer To Your <br /> Dream Job
        </h1>
        <p className="mt-8 mb-8">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br />
          your job application from start to finish.
        </p>
        <button className="btn btn-info text-white"> Get Started </button>
      </div>
      <img className="h-96" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
