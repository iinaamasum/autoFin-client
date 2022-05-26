import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({
    phone: '',
    education: '',
    address: '',
    linkedin: '',
  });
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/user?email=${user.email}`)
        .then((res) => {
          setUserData(res.data);
        });
    }
  }, [userData]);

  // const {
  //   data: userData,
  //   isLoading,
  //   refetch,
  // } = useQuery(
  //   ['userDatatwo'],
  //   async () =>
  //     await axios
  //       .get(`http://localhost:5000/user/${user.email}`)
  //       .then((res) => res.data)
  // );

  setUserData(userData);

  const onSubmit = (data) => {
    console.log(data);
    console.log(user.email);
    axios
      .put(`http://localhost:5000/user/${user.email}`, {
        ...data,
        email: user.email,
      })
      .then((res) => res.data);
    setUserData({ ...userData, ...data });
    reset();
  };

  return (
    <>
      <div className="my-10 container mx-auto px-1 md:px-10">
        <h1 className="text-3xl md:text-5xl mx-5 font-bold text-red-600">
          My Profile
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mx-5 mt-10">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h1 className="text-4xl font-semibold text-purple-600">
                  Your Information
                </h1>

                <h2 class="card-title">{user.displayName}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {userData.phone}</p>
                <p>Education: {userData.education}</p>
                <p>Address: {userData.address}</p>
                <p>LinkedIn: {userData.linkedin} </p>
              </div>
            </div>
          </div>

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
      </div>
    </>
  );
};

export default MyProfile;
