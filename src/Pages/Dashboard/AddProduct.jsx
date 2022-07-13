import axios from 'axios';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const [image, setImage] = useState({ img: '' });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgbbKey = '4e951933e71bc323a06dbf375e8df15f';

  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          axios
            .post('https://blooming-fortress-97967.herokuapp.com/tools', {
              ...data,
              img: img,
            })
            .then((res) => {
              // console.log(res.data);
              if (res.data.acknowledged) {
                toast.success('Product added successfully');
                reset();
              } else {
                toast.error('Failed to add the Product');
              }
            });
        }
      });
  };
  return (
    <section>
      <div className="container max-w-[800px] mx-auto p-4 md:p-8 lg:p-10 my-5 bg-base-100 rounded-xl shadow-xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-purple-600">
          Add A Review
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <div className="form-control w-full mb-5">
            <label className="">
              <span className=" font-semibold text-lg">Product Name</span>
            </label>
            <input
              type="text"
              className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold bg-[#dddeee64]"
              placeholder="Product Name"
              {...register('name')}
            />
          </div>

          <div className="md:flex gap-x-5">
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Price</span>
              </label>
              <input
                type="number"
                className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold bg-[#dddeee64]"
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
                className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold bg-[#dddeee64]"
                placeholder="Quantity"
                {...register('quantity')}
                required
              />
            </div>
          </div>

          <div className="md:flex gap-x-5">
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Minimum Order</span>
              </label>
              <input
                type="number"
                className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold bg-[#dddeee64]"
                placeholder="Minimum Order"
                {...register('min_order')}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="">
                <span className=" font-semibold text-lg">Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full pt-1 bg-[#dddeee64]"
                {...register('img', {
                  required: {
                    value: true,
                    message: 'Image is Required',
                  },
                })}
              />
              <label className="label">
                {errors.img?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.img.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="form-control w-full mb-5">
            <label className="">
              <span className=" font-semibold text-lg">
                Product Description
              </span>
            </label>
            <textarea
              cols="30"
              rows="4"
              type="text"
              placeholder="Enter description"
              required
              {...register('des')}
              style={{ border: '1px solid #0FCFEC' }}
              className="rounded-lg p-3 focus:outline-offset-2 focus:outline-gray-300 resize-none focus:ring-inset input-bordered input-primary w-full text-green-500 font-semibold bg-[#dddeee64]"
            ></textarea>
          </div>
          <input
            className="w-full btn text-xl font-bold"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
