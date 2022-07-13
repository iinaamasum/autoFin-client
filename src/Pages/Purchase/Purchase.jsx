import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const Purchase = () => {
  const { partsId } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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
  // console.log(product);

  if (isLoading) {
    return <LoadingComponent />;
  }
  const { _id, name, img, min_order, price, quantity, des } = product;

  const onSubmit = (data) => {
    if (!data.item_needed) {
      data.item_needed = min_order;
    }
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
      navigate(`/dashboard`);
    }
  };

  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-[1000px] container px-4 md:px-5 mx-auto">
        <div className="hero min-h-screen mt-[8%]">
          <div className="">
            <div className="md:flex my-10 items-center">
              <img
                alt="product"
                src={img}
                className="rounded-lg shadow-2xl mr-10 h-56"
              />
              <div className="">
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-6">{des}</p>
                <p className="text-2xl md:text-4xl text-orange-500 font-semibold">
                  Price: ${price} per unit
                </p>
                <div className="font-semibold">
                  <p>In Stock: {quantity} Items</p>
                  <p>Minimum Order: {min_order} Items</p>
                </div>
              </div>
            </div>
            <div>
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="sm:flex items-center md:gap-x-2">
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

                <div className="sm:flex items-center md:gap-x-2">
                  <div className="form-control w-full">
                    <label className="">
                      <span className=" font-semibold text-lg">
                        Quantity Needed
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder={`${min_order} or more`}
                      className="input input-bordered w-full rounded-lg focus:outline-none"
                      // required
                      {...register('item_needed')}
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="">
                      <span className=" font-semibold text-lg">
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Your Phone Number"
                      className="input input-bordered w-full rounded-lg focus:outline-none"
                      required
                      {...register('phone')}
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="">
                    <span className=" font-semibold text-lg">Address</span>
                  </label>
                  <textarea
                    type="number"
                    placeholder="Enter Your Address"
                    className="rounded-xl w-full p-3 resize-none focus:outline-none"
                    rows="3"
                    required
                    {...register('address')}
                  ></textarea>
                </div>

                <input
                  className="btn btn-dark my-3 w-full tracking-wider capitalize text-xl"
                  value="Pay Now"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
