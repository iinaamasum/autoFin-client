import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { FaCoins } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { GrDeliver } from 'react-icons/gr';

const BusinessSummary = () => {
  return (
    <section className="my-20 text-center">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full md:w-11/12">
        <div className="stat flex justify-center items-center">
          <AiOutlineComment size={40} />
          <div className="">
            <div className="stat-title">Comments</div>
            <div className="stat-value">1K+</div>
            <div className="stat-desc">Jan 1st - May 1st</div>
          </div>
        </div>

        <div className="stat flex justify-center items-center">
          <FaCoins size={40} />
          <div className="">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">120M+</div>
            <div className="stat-desc">↗︎ 30M (22%)</div>
          </div>
        </div>

        <div className="stat flex justify-center items-center">
          <GrDeliver size={40} />
          <div className="">
            <div className="stat-title">Order Inprogress</div>
            <div className="stat-value">120k</div>
            <div className="stat-desc">↗︎ 20k (14%)</div>
          </div>
        </div>
        <div className="stat flex justify-center items-center">
          <GoTools size={40} />
          <div className="">
            <div className="stat-title">Tools</div>
            <div className="stat-value">15k</div>
            <div className="stat-desc">↗︎ 3k (20%)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
