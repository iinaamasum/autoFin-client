import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import LoadingComponent from '../../Shared/LoadingComponent';
import MakeAdminModal from './MakeAdminModal';

const AllUser = () => {
  const [makeAdmin, setMakeAdmin] = useState(null);
  const {
    data: users,
    isError,
    isLoading,
    refetch,
  } = useQuery(
    'users',
    async () =>
      await axios.get('http://localhost:5000/user').then((res) => res.data)
  );
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (isError) {
    toast.error('Something went wrong');
  }
  return (
    <div className="container mx-auto px-1 md:px-10">
      <h1 className="mb-3 font-semibold text-4xl text-purple-600 mt-5">
        Manage All User
      </h1>
      <div class="overflow-x-auto rounded-lg">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role ? user.role : 'User'}</td>
                <td>
                  {user?.role ? (
                    <button disabled className="btn btn-xs">
                      Make Admin
                    </button>
                  ) : (
                    <label
                      for="confirm-make-admin"
                      onClick={() => setMakeAdmin(user)}
                      className="btn btn-xs"
                    >
                      Make Admin
                    </label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {makeAdmin && (
            <MakeAdminModal refetch={refetch} makeAdmin={makeAdmin} />
          )}
        </table>
      </div>
    </div>
  );
};

export default AllUser;
