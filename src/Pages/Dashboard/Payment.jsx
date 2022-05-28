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
    <div className="container px-2 md:px-10 mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 text-center my-2">
        Payment
      </h1>
      <div class="card w-full sm:w-1/2 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div class="mx-10 my-5">
          <h2 class="card-title text-3xl">Product Name: {name}</h2>
          <div class="text-lg font-semibold text-purple-500">
            Email: {email}
          </div>
          <div class="card-actions">
            <div class="bg-error py-2 px-4 rounded-lg text-xl font-bold text-white">
              Price: ${price} per unit
            </div>
            <div class="bg-success py-2 px-4 rounded-lg text-xl font-bold text-white">
              Purchase: {item_needed} units
            </div>
          </div>
          <div class="mt-5">
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
