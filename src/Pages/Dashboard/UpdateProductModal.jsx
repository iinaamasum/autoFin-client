import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const UpdateProductModal = ({ updateProduct, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { name, price, quantity, min_order } = updateProduct;
  const onSubmit = async (data) => {
    axios
      .put(
        `https://blooming-fortress-97967.herokuapp.com/product/${updateProduct._id}`,
        data
      )
      .then((res) => {
        toast.success('Product updated successfully');
        refetch();
      });
    reset();
  };
  return (
    <div className="">
      <input
        type="checkbox"
        id="update-product-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle mt-10 md:mt-20">
        <div className="modal-box">
          <label
            htmlFor="update-product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Product Name: {name}</h3>
          <p>Price: ${price}</p>
          <p>Minimum Order: ${min_order}</p>
          <p>Quantity: ${quantity}</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 mb-2 bg-gray-200 px-4 md:px-8 py-5 rounded-lg"
          >
            <h2 className="text-xl mb-2 font-bold text-purple-700">
              Update the below field
            </h2>
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Price</span>
              </label>
              <input
                type="number"
                className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold"
                placeholder="Price"
                {...register('price')}
                required
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Quantity</span>
              </label>
              <input
                type="number"
                className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold"
                placeholder="Quantity"
                {...register('quantity')}
                required
              />
            </div>

            <div className="md:flex gap-x-5">
              <div className="form-control w-full mb-5">
                <label className="">
                  <span className=" font-semibold text-lg">Minimum Order</span>
                </label>
                <input
                  type="number"
                  className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold"
                  placeholder="Minimum Order"
                  {...register('min_order')}
                  required
                />
              </div>
            </div>

            <label>
              <input
                htmlFor="update-product-modal"
                type="submit"
                value="Update"
                className="w-full btn btn-success"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
