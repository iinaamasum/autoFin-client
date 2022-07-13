import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../Shared/LoadingComponent';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L4OZ4CV1qqZO5kETXGwMBybqyxFJ1GycNScngOyN3TPQ7c9oM36yB3hx8OUKfdCaECfUtQThvxFDbKsONAdIoJ700Remoudvj'
);

const Payment = () => {
  const { orderId } = useParams();
  // console.log(orderId);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(
    'payment',
    async () =>
      await axios
        .get(
          `https://blooming-fortress-97967.herokuapp.com/usersOrder/${orderId}`
        )
        .then((res) => res.data)
  );
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (isError) {
    toast.error('Server Error');
  }
  const { img, name, price, item_needed, email } = product;
  return (
    <div className="container px-2 md:px-10 mt-5 mx-auto">
      <div className="card card-compact w-full sm:w-1/2 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="" />
        </figure>
        <div className="mx-10 my-5">
          <h1 className="text-3xl font-bold text-center">Payment</h1>
          <h2 className="card-title text-2xl font-bold text-purple-800">
            {name}
          </h2>
          <div className="font-semibold mb-1">Email: {email}</div>
          <div className="flex justify-between items-center">
            <div className="rounded-lg text-xl font-bold">
              Price: ${price} per unit
            </div>
            <div className="rounded-lg text-xl font-bold">
              Purchasing: {item_needed} units
            </div>
          </div>
          <div className="mt-5">
            <Elements stripe={stripePromise}>
              <CheckoutForm product={product} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
