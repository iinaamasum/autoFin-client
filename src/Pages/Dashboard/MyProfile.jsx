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
      <div className="my-10 container max-w-[700px] mx-auto px-1 md:px-10">
        <div className="mx-5 mt-10">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-5">
                Your Information
              </h1>

              <h2 className="card-title">Name: {user.displayName}</h2>
              <div className="text-slate-600">
                <p className="font-semibold">
                  Email: {user.email || 'Not Set Yet'}
                </p>
                <p className="font-semibold">
                  Phone: {userData?.phone || 'Not Set Yet'}
                </p>
                <p className="font-semibold">
                  Education: {userData?.education || 'Not Set Yet'}
                </p>
                <p className="font-semibold">
                  Address: {userData?.address || 'Not Set Yet'}
                </p>
                <p className="font-semibold">
                  LinkedIn: {userData?.linkedin || 'Not Set Yet'}{' '}
                </p>
              </div>
              <p className="text-gray-500">
                {userData.education && (
                  <>
                    About: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quam, libero! Dolore numquam nobis sapiente sunt
                    doloribus excepturi eius voluptate rem.
                  </>
                )}
              </p>
              <button
                onClick={() => navigate('/dashboard/updateProfile')}
                className="btn"
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
