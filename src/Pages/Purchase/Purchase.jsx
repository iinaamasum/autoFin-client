import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const Purchase = () => {
  const { partsId } = useParams();
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(
    ['product', partsId, handleSubmit],
    async () =>
      await axios
        .get(`https://blooming-fortress-97967.herokuapp.com/product/${partsId}`)
        .then((res) => res.data)
  );
  console.log(product);

  if (isLoading) {
    return <LoadingComponent />;
  }
  const { _id, name, img, min_order, price, quantity, des } = product;

  const onSubmit = (data) => {
    if (quantity - Number(data.item_needed) < 0) {
      toast.error('Not enough quantity');
    } else if (Number(data.item_needed) < min_order) {
      toast.error('Minimum order is ' + min_order);
    } else {
      axios
        .post(`https://blooming-fortress-97967.herokuapp.com/product`, {
          ...data,
          img: img,
          name: name,
          email: user.email,
          price: product.price,
        })
        .then((res) => res.data);
      axios
        .put(`https://blooming-fortress-97967.herokuapp.com/product/${_id}`, {
          quantity: quantity - Number(data.item_needed),
        })
        .then((res) => {
          refetch();
        });

      toast.success(`Thank you for your purchase. Please pay now.`);
    }
  };

  return (
    <section>
      <div className="hero min-h-screen bg-base-200 mt-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt="product"
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{des}</p>
            <p className="text-2xl md:text-4xl text-orange-500 font-semibold">
              ${price}
            </p>
            <div className="flex justify-between items-center text-xl">
              <p>Quantity: {quantity}</p>
              <p>Minimum Order: {min_order}</p>
            </div>

            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center md:gap-x-2">
                <div className="form-control w-full">
                  <label className="">
                    <span className=" font-semibold text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full text-red-600 font-semibold"
                    disabled
                    value={user.displayName}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="">
                    <span className=" font-semibold text-lg">Email</span>
                  </label>
                  <input
                    type="text"
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full text-red-600 font-semibold"
                    disabled
                    value={user.email}
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="">
                  <span className=" font-semibold text-lg">Product Name</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-300 px-5 py-3 rounded-lg w-full text-green-600 font-semibold"
                  disabled
                  value={name}
                />
              </div>

              <div className="form-control w-full">
                <label className="">
                  <span className=" font-semibold text-lg">
                    Quantity Needed
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="items needed"
                  className="input input-bordered w-full rounded-lg"
                  required
                  {...register('item_needed')}
                />
              </div>

              <div className="form-control w-full">
                <label className="">
                  <span className=" font-semibold text-lg">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="015********"
                  className="input input-bordered w-full rounded-lg"
                  required
                  {...register('phone')}
                />
              </div>
              <div className="form-control w-full">
                <label className="">
                  <span className=" font-semibold text-lg">Address</span>
                </label>
                <textarea
                  type="number"
                  placeholder="015********"
                  className="rounded-lg w-full input"
                  required
                  {...register('address')}
                ></textarea>
              </div>

              <input
                className="btn btn-accent my-3 w-full tracking-wider capitalize text-xl rounded-full"
                value="Pay Now"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
