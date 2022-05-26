import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ item }) => {
  const { _id, img, name, price, id, quantity, min_order, des } = item;
  const navigate = useNavigate();
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
            <button
              onClick={() => navigate(`/parts/${_id}`)}
              className="btn btn-primary w-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartsCard;
