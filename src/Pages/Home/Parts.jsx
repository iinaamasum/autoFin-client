import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingComponent from '../../Shared/LoadingComponent';
import PartsCard from './PartsCard';

const Parts = () => {
  const {
    data: parts,
    isLoading,
    isError,
  } = useQuery('parts', async () =>
    axios
      .get('https://blooming-fortress-97967.herokuapp.com/products')
      .then((res) => res.data)
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <span>Error: </span>;
  }
  const sixParts = [];
  let count = 0;
  for (let i = parts.length - 1; i > 0; i--) {
    sixParts.push(parts[i]);
    count++;
    if (count >= 6) {
      break;
    }
  }
  // console.log(sixParts);
  return (
    <>
      <section
        style={{ maxWidth: '1300px' }}
        className="container mx-auto px-4 md:px-8 my-10"
      >
        <div className="text-center my-10">
          <h4 className="text-xl md:tex-3xl text-gray-400 font-medium">
            Top Rated
          </h4>
          <h1 className="text-3xl md:text-6xl text-red-600 font-bold">
            Our Best Products
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {sixParts.map((item) => (
            <PartsCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Parts;
