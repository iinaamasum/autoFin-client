import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ item }) => {
  const { _id, img, name, price, id, quantity, min_order, des } = item;
  const navigate = useNavigate();
  return (
    <section>
      <div className="card-compact card shadow-xl bg-base-100">
        <figure>
          <img src={img} alt="Machine" className="w-full h-60 object-contain" />
        </figure>

        <div className="card-body bg-[#dddeee]">
          <h2 className="text-3xl font-semibold text-purple-700">{name}</h2>
          <div className="">
            <p className="font-semibold text-orange-600 text-xl">
              Price: ${price} per unit
            </p>
            <p className="font-semibold text-purple-600">
              In Stock: {quantity}
            </p>
            <p className="font-semibold">Minimum Order: {min_order}</p>
          </div>
          <p>{des?.slice(0, 200)}</p>
          <div className="">
            <button
              onClick={() => navigate(`/parts/${_id}`)}
              className="btn btn-dark w-full"
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
