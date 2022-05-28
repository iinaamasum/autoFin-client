import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
              <h2 className="card-title">{user?.displayName}</h2>
              <p className="text-orange-600 text-xl">Rating: {item.rating}</p>
              <p>{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
