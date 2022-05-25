import React from 'react';

const SubscribeNow = () => {
  return (
    <div className="z-40 w-full md:w-3/4 mx-auto">
      <div className="bg-white relative lg:mt-14 flex items-center justify-center py-10 rounded-2xl">
        <h3 className="text-2xl text-orange-600 md:mr-8 hidden xl:block">
          Subscribe for News and Get a Discount
        </h3>
        <div className="form-control">
          <div className="w-auto">
            <input
              type="text"
              placeholder="Your Email"
              className="px-4 sm:px-20 py-3 outline-none focus:ring-0 mr-1 sm:mr-5 rounded-full bg-gray-100"
            />
            <button className="btn rounded-full">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNow;
