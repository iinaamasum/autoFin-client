import React from 'react';
import car from '../../assets/images/slide-3-bg.jpg';

const SecondHeroSection = () => {
  return (
    <div className="my-10">
      <div
        style={{
          background: `url(${car})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-[80vh]"
      >
        <div
          style={{ backdropFilter: 'brightness(.75)' }}
          className="flex items-center justify-start h-full pl-10 md:pl-20 bg-cover bg-center"
        >
          <div className="text-slate-400">
            <h1 className="text-3xl md:text-6xl lg:text-7xl text-orange-600 font-bold mt-5">
              FIND YOUR OWN STYLE
            </h1>
            <p className="text-xl font-semibold mb-5">
              our professional team will help you choose perfect parts for your
              vehicle
            </p>
            <div className="grid grid-cols-2 w-full lg:w-2/3 gap-10">
              <div className="">
                <h2 className="font-semibold text-lg mb-3">
                  <span className="text-red-600 font-bold">01.</span> Tunner -
                  up & Builds
                </h2>
                <p className="mb-5 text-gray-400 font-medium">
                  Providing the best tunner up and builds for your bike. We have
                  a team of experts who can help you with your bike.
                </p>
              </div>

              <div className="">
                <h2 className="font-semibold text-lg mb-3">
                  <span className="text-red-600 font-bold">02.</span> Adjust and
                  install
                </h2>
                <p className="mb-5 text-gray-400 font-medium">
                  Adjusting and installing the right parts in proper way is not
                  easy. Our experts will do it for you.
                </p>
              </div>
              <div className="">
                <h2 className="font-semibold text-lg mb-3">
                  <span className="text-red-600 font-bold">03.</span> Whole Sell
                  Available
                </h2>
                <p className="mb-5 text-gray-400 font-medium">
                  We are providing most durable and reliable parts. We are also
                  giving you it at lower cost.
                </p>
              </div>
              <div className="">
                <h2 className="font-semibold text-lg mb-3">
                  <span className="text-red-600 font-bold">04.</span> Free
                  Delivery
                </h2>
                <p className="mb-5 text-gray-400 font-medium">
                  We are always ready to deliver parts to you. As we pretend to
                  whole sell, the delivery cost will be paid by us. We will not
                  charge you any extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;
