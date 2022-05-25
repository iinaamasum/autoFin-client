import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { FaCoins } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { GrDeliver } from 'react-icons/gr';

const BusinessSummary = () => {
  return (
    <section className="my-20 text-center">
      <div class="stats stats-vertical lg:stats-horizontal shadow w-full md:w-11/12">
        <div class="stat flex justify-center items-center">
          <AiOutlineComment size={40} />
          <div className="">
            <div class="stat-title">Comments</div>
            <div class="stat-value">1K+</div>
            <div class="stat-desc">Jan 1st - May 1st</div>
          </div>
        </div>

        <div class="stat flex justify-center items-center">
          <FaCoins size={40} />
          <div className="">
            <div class="stat-title">Revenue</div>
            <div class="stat-value">120M+</div>
            <div class="stat-desc">↗︎ 30M (22%)</div>
          </div>
        </div>

        <div class="stat flex justify-center items-center">
          <GrDeliver size={40} />
          <div className="">
            <div class="stat-title">Order Inprogress</div>
            <div class="stat-value">120k</div>
            <div class="stat-desc">↗︎ 20k (14%)</div>
          </div>
        </div>
        <div class="stat flex justify-center items-center">
          <GoTools size={40} />
          <div className="">
            <div class="stat-title">Tools</div>
            <div class="stat-value">15k</div>
            <div class="stat-desc">↗︎ 3k (20%)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
