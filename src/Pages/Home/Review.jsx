import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar } from 'react-icons/ai';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const Review = () => {
  const [user] = useAuthState(auth);
  const { data: reviews, isLoading } = useQuery(
    'reviews',
    async () =>
      await axios
        .get('https://blooming-fortress-97967.herokuapp.com/review')
        .then((res) => res.data)
  );
  if (isLoading) return <LoadingComponent />;
  const reviewsList = [];
  let count = 0;
  for (let i = reviews.length - 1; i >= 0; i--) {
    reviewsList.push(reviews[i]);
    count++;
    if (count >= 6) {
      break;
    }
  }
  return (
    <section className="container mx-auto px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Top Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-10">
        {reviewsList.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="w-full mx-auto text-center">
                <p className="text-orange-600 text-2xl font-semibold text-center">
                  Rating Overview{' '}
                </p>
                <p className="text-center text-4xl text-orange-600 font-bold flex items-end justify-center">
                  <AiFillStar className="mr-3" />
                  {parseFloat(item.rating).toFixed(1)}
                  <span className="text-lg text-gray-600">/5</span>
                </p>
                <span className="text-base text-center font-medium text-slate-400">
                  Out of {parseInt(Math.random() * 100)} reviews
                </span>
              </div>
              <p>{item.review.toString().slice(0, 300)}...</p>
              <div className="flex justify-center items-center mt-5">
                <div class="avatar">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://source.unsplash.com/random/?user"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-5">
                  <h2 className="card-title">{user?.displayName}</h2>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
