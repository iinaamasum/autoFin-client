import React from 'react';

const PartsCard = ({ item }) => {
  const { img, name, price, id, quantity, min_order, des } = item;
  return (
    <section>
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-full">
          <img src={img} alt="Parts" className="object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Minimum Order: {min_order}</p>
          <p>{des}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartsCard;
