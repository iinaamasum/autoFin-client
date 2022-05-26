import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth);
  return (
    <section>
      <div className="container mx-auto px-1 md:px-10">
        <h1 className="text-2xl md:text-3xl mt-5 font-semibold text-purple-600">
          Add A Review
        </h1>

        <form>
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
                type="text"
                className="input px-5 py-3 rounded-lg w-full text-red-600 font-semibold"
                placeholder="Your Phone"
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Rating</span>
              </label>
              <input
                type="text"
                className="input px-5 py-3 rounded-lg w-full text-red-600 font-semibold"
                placeholder="Rating"
              />
            </div>
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className=" font-semibold text-lg">Review</span>
            </label>
            <textarea
              cols="30"
              rows="5"
              type="text"
              placeholder="Enter your feedback"
              style={{ border: '1px solid #0FCFEC' }}
              className="rounded-lg p-3 focus:outline-offset-2 resize-none focus:ring-inset input-bordered input-primary w-full"
            ></textarea>
          </div>
          <input
            className="w-full btn btn-outline"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default AddReview;
