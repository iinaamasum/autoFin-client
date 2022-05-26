import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="mt-20 container mx-auto">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <div className="flex justify-between items-center px-4 mt-5">
            <label for="my-drawer-2" class="drawer-button lg:hidden">
              <MdDashboard size={40} />
            </label>
            <h2 className="text-4xl font-bold text-orange-600 mx-auto">
              Dashboard
            </h2>
          </div>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-y-4">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <NavLink to="/dashboard/addReview">Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
