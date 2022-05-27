import React from 'react';
import img10 from '../../assets/logo/brand-10-bg.webp';
import img2 from '../../assets/logo/brand-2-bg.webp';
import img3 from '../../assets/logo/brand-3-bg.webp';
import img4 from '../../assets/logo/brand-4-bg.webp';
import img5 from '../../assets/logo/brand-5-bg.webp';
import img6 from '../../assets/logo/brand-6-bg.webp';
import img7 from '../../assets/logo/brand-7-bg.webp';
import img8 from '../../assets/logo/brand-8-bg.webp';
import img9 from '../../assets/logo/brand-9-bg.webp';
import img1 from '../../assets/logo/img_vs.webp';

const BrandPartner = () => {
  const imgCollection = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
  ];
  return (
    <div className="container mx-auto px-2 md:px-10 lg:px-24">
      <h1 className="text-3xl md:text-6xl font-bold text-purple-700 text-center">
        FEATURED BRANDS
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10">
        {imgCollection.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt="brand"
            className="w-full h-full border-2 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPartner;
