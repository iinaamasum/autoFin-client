import React from 'react';
import bgCar from '../../assets/images/second-section-bg.jpg';
import carLogo from '../../assets/logo/img_vs.webp';

const HeroSection = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bgCar})`,
        }}
        className="h-[80vh]"
      >
        <div
          style={{ backdropFilter: 'brightness(.75)' }}
          className="flex items-center justify-start h-full pl-10 md:pl-20"
        >
          <div className="">
            <h1 className="text-3xl md:text-6xl lg:text-7xl text-red-600 font-bold my-5">
              PERFORM AND INSPIRE
            </h1>
            <img src={carLogo} alt="" />
            <p className="text-3xl md:text-6xl lg:text-7xl text-blue-700 font-semibold">
              -20%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
