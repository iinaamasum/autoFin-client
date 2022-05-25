import React from 'react';
import cat1 from '../../assets/college/cat-1.webp';
import cat10 from '../../assets/college/cat-10.webp';
import cat2 from '../../assets/college/cat-2.webp';
import cat3 from '../../assets/college/cat-3.jpg';
import cat4 from '../../assets/college/cat-4.jpg';
import cat5 from '../../assets/college/cat-5.webp';
import cat6 from '../../assets/college/cat-6.webp';
import cat7 from '../../assets/college/cat-7.webp';
import cat8 from '../../assets/college/cat-8.webp';
import cat9 from '../../assets/college/cat-9.webp';
import CollectionCollegeCard from './CollectionCollegeCard';

const CollectionImgCollege = () => {
  const collegeData = [
    { id: 1, bg_img: cat1, text: 'Wheels' },
    { id: 2, bg_img: cat2, text: 'Lighting' },
    { id: 3, bg_img: cat3, text: 'Performance' },
    { id: 4, bg_img: cat4, text: 'Electronics' },
    { id: 5, bg_img: cat5, text: 'Exterior' },
    { id: 6, bg_img: cat6, text: 'Body Parts' },
    { id: 7, bg_img: cat7, text: 'Interior' },
    { id: 8, bg_img: cat8, text: 'Vehicle Doors' },
    { id: 9, bg_img: cat9, text: 'Repair Parts' },
    { id: 10, bg_img: cat10, text: 'Other' },
  ];
  return (
    <div className="mt-14">
      <div className="text-center font-sans">
        <h1 className="text-7xl font-bold">
          WELCOME TO <span className="text-red-600">AUTOFIN</span>
        </h1>
        <h4 className="text-3xl font-medium mt-2 text-slate-700">
          We have any part for any vehicle.
        </h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
        {collegeData.map((item) => (
          <CollectionCollegeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionImgCollege;
