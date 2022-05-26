import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { data: userData, isLoading } = useQuery(
    ['user'],
    async () =>
      await axios
        .get(`http://localhost:5000/user/${user.email}`)
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
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h1 className="text-4xl font-semibold text-purple-600">
                Your Information
              </h1>

              <h2 class="card-title">{user.displayName}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {userData?.phone}</p>
              <p>Education: {userData?.education}</p>
              <p>Address: {userData?.address}</p>
              <p>LinkedIn: {userData?.linkedin} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
