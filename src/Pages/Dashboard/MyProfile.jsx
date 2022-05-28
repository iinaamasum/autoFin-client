import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { data: userData, isLoading } = useQuery(
    ['user'],
    async () =>
      await axios
        .get(`https://blooming-fortress-97967.herokuapp.com/user/${user.email}`)
        .then((res) => res.data)
  );

  if (isLoading) return <LoadingComponent />;
  return (
    <>
      <div className="my-10 container mx-auto px-1 md:px-10">
        <h1 className="text-3xl md:text-5xl mx-5 font-bold text-red-600">
          My Profile
        </h1>

        <div className="mx-5 mt-10">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className="text-4xl font-semibold text-purple-600">
                Your Information
              </h1>

              <h2 className="card-title">{user.displayName}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {userData?.phone}</p>
              <p>Education: {userData?.education}</p>
              <p>Address: {userData?.address}</p>
              <p>LinkedIn: {userData?.linkedin} </p>
              <button
                onClick={() => navigate('/dashboard/updateProfile')}
                className="btn btn-outline"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
