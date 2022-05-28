import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ item }) => {
  const { _id, img, name, price, id, quantity, min_order, des } = item;
  const navigate = useNavigate();
  return (
    <section>
      <div className="text-center card shadow-xl bg-base-100">
        <figure>
          <img src={img} alt="Shoes" className="w-full h-60" />
        </figure>

        <div className="card-body">
          <h2 className="text-3xl font-semibold text-purple-700">{name}</h2>
          <div className="flex justify-center gap-x-5 items-center text-orange-600 font-semibold mt-2">
            <p>Price: ${price} per unit</p>
            <p>Quantity: {quantity}</p>
          </div>
          <p className="font-semibold mb-2">Minimum Order: {min_order}</p>
          <p>{des?.slice(0, 200)}</p>
          <div className="">
            <button
              onClick={() => navigate(`/parts/${_id}`)}
              className="btn btn-outline w-full"
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
