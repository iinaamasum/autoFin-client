import React from 'react';
import banner1 from '../../assets/images/slide-1-bg.jpg';
import banner2 from '../../assets/images/slide-2-bg.jpg';
import banner3 from '../../assets/images/slide-3-bg.jpg';

const Banner = () => {
  return (
    <section>
      <div class="carousel h-[80vh] w-full z-0 mt-10">
        <div id="slide1" class="carousel-item relative w-full">
          <img alt="" src={banner1} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <div className="w-3/6 mr-auto md:-mt-10">
              <h1 className="text-6xl text-white font-bold">
                Worlds best auto parts - <br />
                <span className="text-red-600 text-8xl">autoFin</span>
              </h1>
              <h4 className="text-gray-300">
                we are leading auto parts company with the world-wide reputation
                of premium quality products and maintenance services.
              </h4>
              <button className="btn btn-secondary my-4 px-6">
                Discover More
              </button>
            </div>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img alt="" src={banner2} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <div className="w-3/6 mr-auto md:-mt-10">
              <h1 className="text-6xl text-white font-bold">
                Wide Selection For- <br />
                <span className="text-red-600 text-8xl">Premium Items</span>
              </h1>
              <h4 className="text-gray-300">
                We have a wide selection of premium quality auto parts and spare
                parts for your car. We are responsible for your satisfaction.
                Trust on us and you will be satisfied.
              </h4>
              <button className="btn btn-secondary my-4 px-6">
                Discover More
              </button>
            </div>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img alt="" src={banner3} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <div className="w-3/6 mr-auto md:-mt-10">
              <h1 className="text-6xl text-white font-bold">
                Premium Goods - <br />
                <span className="text-red-600 text-8xl">For Racers</span>
              </h1>
              <h4 className="text-gray-300">
                revolutionary ideas for auto products and accessories designed
                to be the ultimate in performance. We are the leading auto parts
                company with the world-wide reputation of premium quality
                products and maintenance services.
              </h4>
              <button className="btn btn-secondary my-4 px-6">
                Discover More
              </button>
            </div>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
