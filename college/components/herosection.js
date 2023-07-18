import React from 'react';

import eng from "../public/images/engineer-calibrating-drill.jpg"
const HeroSection = () => {
  return (
    <div className="hero  ">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover z-50"
          src="../public/back.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="relative pt-1/5 container mx-auto px-8 py-20">
        <h1 className="text-4xl mt-24 md:text-6xl font-bold text-white leading-tight">
          Welcome to London Collage!
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          Explore the art of creativity and expression.
        </p>
        <div className="flex mt-24 justify-start space-x-4">
  <button className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-opacity-50 text-white hover:bg-opacity-70 hover:text-gray-300 transition-colors duration-300 px-4 py-2 rounded">
    GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
  </button>
  <button className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-opacity-50 text-white hover:bg-opacity-70 hover:text-gray-300 transition-colors duration-300 px-4 py-2 rounded">
    VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
  </button>
</div>

      </div>
      
    </div>
  );
};

export default HeroSection;
