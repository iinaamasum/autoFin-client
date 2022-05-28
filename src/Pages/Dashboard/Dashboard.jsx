import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { MdDashboard } from 'react-icons/md';
import { useQuery } from 'react-query';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [activeLink, setActiveLink] = useState(true);
  const {
    data: userAdmin,
    isError,
    isLoading,
  } = useQuery(
    'userAdmin',
    async () =>
      await axios.get(`http://localhost:5000/user`).then((res) => res.data)
  );
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (isError) {
    toast.error('Something went wrong');
  }

  let adminEmail = '';

  adminEmail = userAdmin.find((admin) => admin.email === user.email);

  return (
    <div className="mt-20 container mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <div className="flex justify-between items-center px-4 mt-5">
            <label for="my-drawer-2" className="drawer-button lg:hidden">
              <MdDashboard size={40} />
            </label>
            <h2 className="text-4xl font-bold text-orange-600 mx-auto">
              Dashboard
            </h2>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-y-4">
            {/* <!-- Sidebar content here --> */}

            <li>
              <Link
                onClick={() => setActiveLink(true)}
                className={`${activeLink ? 'active' : ''}`}
                to="/dashboard"
              >
                My Profile
              </Link>
            </li>
            <li>
              <NavLink
                onClick={() => setActiveLink(false)}
                to="/dashboard/updateProfile"
              >
                Update Profile
              </NavLink>
            </li>

            {!adminEmail && (
              <>
                <li>
                  <NavLink
                    onClick={() => setActiveLink(false)}
                    to="/dashboard/myOrders"
                  >
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setActiveLink(false)}
                    to="/dashboard/addReview"
                  >
                    Add Review
                  </NavLink>
                </li>
              </>
            )}
            {adminEmail && (
              <>
                <li>
                  <NavLink
                    onClick={() => setActiveLink(false)}
                    to="/dashboard/addProduct"
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setActiveLink(false)}
                    to="/dashboard/allProducts"
                  >
                    Manage Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setActiveLink(false)}
                    to="/dashboard/allUser"
                  >
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setActiveLink(false)}
                    to="/dashboard/manageOrder"
                  >
                    Manage All Order
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
