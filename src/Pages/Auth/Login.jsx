import axios from 'axios';
import React, { useEffect } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import Social from './Social';

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, userLogin, loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await signInWithEmailAndPassword(data.email, data.password);
      const { data: dataToken } = await axios.post(
        'https://blooming-fortress-97967.herokuapp.com/login',
        {
          email: data.email,
        }
      );
      localStorage.setItem('token', dataToken.token);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      const tokenSet = async () => {
        const { data } = await axios.post(
          'https://blooming-fortress-97967.herokuapp.com/login',
          {
            email: user.email,
          }
        );
        localStorage.setItem('token', data.token);
      };
      tokenSet();
      toast.success(`Welcome`);
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  return (
    <>
      <section className="mb-10 mt-24 md:mt-32">
        <div style={{ maxWidth: '1024px' }} className="container mx-auto px-4">
          <div className="md:flex md:flex-row-reverse">
            <div className="card w-full md:w-1/2 bg-base-100 shadow-lg mx-auto">
              <div className="card-body">
                <h2 className="card-title mx-auto text-4xl md:my-5">LogIn</h2>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full mb-5">
                    <label className="">
                      <span className="text-secondary font-semibold text-lg">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="example@email.com"
                      className="input input-bordered w-full rounded-full"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Email Required !!!',
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                          message: 'Invalid Email Provided !!!',
                        },
                      })}
                    />
                    <label className="level font-bold">
                      {errors.email?.type === 'required' && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === 'pattern' && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <label className="">
                      <span className="text-secondary font-semibold text-lg">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="abcd123$"
                      className="input input-bordered w-full rounded-full"
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'Password Required !!!',
                        },
                        pattern: {
                          value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                          message:
                            'Password Must be 8 char including a special char !!!',
                        },
                      })}
                    />
                    <label className="level font-bold">
                      {errors.password?.type === 'required' && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === 'pattern' && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <p className="mt-10">
                    Don't have an account?{' '}
                    <Link
                      className="btn-link text-purple-500 font-semibold"
                      to="/register"
                    >
                      Register Now
                    </Link>
                  </p>
                  <p>
                    Forgot Password?{' '}
                    <Link
                      className="btn-link text-purple-500 font-semibold"
                      to="/resetPass"
                    >
                      Click Here To Reset
                    </Link>
                  </p>

                  <input
                    className="btn btn-accent my-3 w-full tracking-wider capitalize text-xl rounded-full"
                    value="LogIn"
                    type="submit"
                  />
                </form>
                <div className="divider text-lg font-semibold">
                  Social LogIn
                </div>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
