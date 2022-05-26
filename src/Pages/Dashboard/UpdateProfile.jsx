import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(user.email);
    try {
      axios
        .put(`http://localhost:5000/user/${user.email}`, {
          ...data,
          email: user.email,
        })
        .then((res) => res.data);
      reset();
      toast.success('Profile updated successfully');
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 my-10">
      <h1 className="text-3xl md:text-5xl font-bold text-purple-600 mb-4">
        Update Your Profile
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="md:flex gap-x-5">
          <div className="form-control w-full mb-5">
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
          <div className="form-control w-full mb-5">
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
        <div className="md:flex gap-x-5">
          <div className="form-control w-full mb-5">
            <label className="">
              <span className=" font-semibold text-lg">Phone</span>
            </label>
            <input
              type="number"
              className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold"
              placeholder="Your Phone"
              {...register('phone')}
              required
            />
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className=" font-semibold text-lg">LinkedIn</span>
            </label>
            <input
              type="text"
              className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold"
              placeholder="LinkedIn Id"
              {...register('linkedin')}
              required
            />
          </div>
        </div>
        <div className="form-control w-full mb-5">
          <label className="">
            <span className=" font-semibold text-lg">Education</span>
          </label>
          <input
            type="text"
            className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold"
            placeholder="Your Educational qualification"
            {...register('education')}
            required
          />
        </div>
        <div className="form-control w-full mb-5">
          <label className="">
            <span className=" font-semibold text-lg">Address</span>
          </label>
          <textarea
            cols="30"
            rows="3"
            type="text"
            placeholder="Enter your address"
            required
            {...register('address')}
            style={{ border: '1px solid #0FCFEC' }}
            className="rounded-lg p-3 focus:outline-offset-2 resize-none focus:ring-inset input-bordered input-primary w-full text-green-500 font-semibold"
          ></textarea>
        </div>
        <input
          className="w-full btn btn-outline font-bold"
          type="submit"
          value="Update Info"
        />
      </form>
    </div>
  );
};

export default UpdateProfile;
