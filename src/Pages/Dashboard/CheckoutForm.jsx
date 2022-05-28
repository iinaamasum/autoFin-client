import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const { _id, price, email } = product;

  useEffect(() => {
    axios
      .post('https://blooming-fortress-97967.herokuapp.com/payment', {
        price,
      })
      .then((res) => {
        if (res.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setCardError(error?.message || '');
    setSuccess('');
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError('');
      setTransactionId(paymentIntent.id);

      setSuccess('Payment Successful');

      axios
        .put(
          `https://blooming-fortress-97967.herokuapp.com/usersOrder/${_id}`,
          {
            paidProductId: _id,
            paid: true,
            transactionId: paymentIntent.id,
          }
        )
        .then((res) => {
          setProcessing(false);
          toast.success('Payment Successful');
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="btn btn-success w-full mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay Now
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success} </p>
          <p>
            Your transaction Id:{' '}
            <span className="text-orange-500 font-bold">{transactionId}</span>{' '}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
