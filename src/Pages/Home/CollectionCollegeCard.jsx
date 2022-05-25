import React from 'react';

const CollectionCollegeCard = ({ item }) => {
  const { bg_img, text } = item;
  return (
    <div>
      <div
        style={{ background: `url(${bg_img})` }}
        className="h-[30vh] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center"
      >
        <h2 className="text-3xl text-white font-semibold tracking-wide">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default CollectionCollegeCard;
