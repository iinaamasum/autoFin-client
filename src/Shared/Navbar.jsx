import React from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/products', name: 'Products' },
    { id: 3, path: '/review', name: 'Review' },
    { id: 4, path: '/dashboard', name: 'Dashboard' },
  ];
  return (
    <section>
      <div class="drawer drawer-end">
        <input id="drawer-open-close" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full bg-base-300">
            <div
              style={{ maxWidth: '1200px' }}
              className="navbar container mx-auto"
            >
              <div class="flex-1 px-2 mx-2 text-4xl font-bold">
                {' '}
                <span className="text-red-500">auto</span>
                <span className="text-blue-700">Fin</span>
              </div>
              <div class="flex-none lg:hidden">
                <label for="drawer-open-close" class="btn btn-square btn-ghost">
                  <MdOutlineMenuOpen size={35} />
                </label>
              </div>

              <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal gap-4 text-md font-semibold">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <NavLink to={link.path} className="rounded-lg">
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          Content
        </div>
        <div class="drawer-side">
          <label for="drawer-open-close" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {navLinks.map((link) => (
              <li for="drawer-open-close" key={link.id}>
                <NavLink to={link.path} className="rounded-lg">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
