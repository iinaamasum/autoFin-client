import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { ImCross } from 'react-icons/im';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/dashboard', name: 'Dashboard' },
    { id: 3, path: '/myPortfolio', name: 'Portfolio' },
  ];

  return (
    <section className="">
      <div className="drawer drawer-end">
        <input
          id="drawer-open-close"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col relative">
          <div className="w-full bg-base-300 fixed top-0 left-0 right-0 z-50">
            <div
              style={{ maxWidth: '1200px' }}
              className="navbar container mx-auto"
            >
              <div className="flex-1 px-2 mx-2 text-4xl font-bold">
                {' '}
                <Link to="/">
                  <span className="text-red-500">auto</span>
                  <span className="text-blue-700">Fin</span>
                </Link>
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="drawer-open-close"
                  className="btn btn-square btn-ghost"
                >
                  <MdOutlineMenuOpen size={35} />
                </label>
              </div>

              <div className="flex-none hidden lg:block">
                <div className="flex items-center">
                  <ul className="menu menu-horizontal gap-4 text-md font-semibold mr-4">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <NavLink to={link.path} className="rounded-lg">
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  {user ? (
                    <div className="flex items-center">
                      <p className="text-green-600 font-semibold mr-4">
                        {user?.displayName}
                      </p>
                      <button
                        onClick={() => signOut(auth)}
                        className="btn my-2"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link className="btn text-white my-2 mr-2" to="/login">
                        LogIn
                      </Link>
                      <Link className="btn btn-success" to="/register">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="drawer-open-close"
            className="drawer-overlay pl-2 pt-2"
          >
            <div className="w-12 h-12 inline-flex items-center justify-center text-2xl bg-red-600 font-semibold p-3 rounded-full">
              <ImCross color="white" />
            </div>
          </label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {navLinks.map((link) => (
              <li htmlFor="drawer-open-close" key={link.id}>
                <NavLink to={link.path} className="rounded-lg">
                  {link.name}
                </NavLink>
              </li>
            ))}
            {user ? (
              <button
                onClick={() => {
                  toast.success(`Good Bye ${user.displayName}`);
                  signOut(auth);
                }}
                className="btn text-lg rounded-full capitalize mt-2"
                to="/login"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link className="btn mt-2" to="/login">
                  LogIn
                </Link>
                <Link
                  className="btn btn-outline btn-success mt-1"
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
