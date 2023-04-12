import React from "react";
import bannerImg from "../../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-100 ">
      <div className="my-4 text-end">
        <h1 className="text-5xl font-bold">
          One Step <br /> Closer To Your <br />
          <span className="active">Dream Job</span>
        </h1>
        <p className="mt-8 mb-8">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. <br /> Manage all your job
          application from start to finish.
        </p>
        <button className="btn-primary"> Get Started </button>
      </div>
      <img className="h-96" src={bannerImg} alt="#" />
    </div>
  );
};

export default Banner;
