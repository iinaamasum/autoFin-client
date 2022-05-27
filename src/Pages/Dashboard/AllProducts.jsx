import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import LoadingComponent from '../../Shared/LoadingComponent';

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(
    'product',
    async () =>
      await axios.get('http://localhost:5000/products').then((res) => res.data)
  );
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  // const { name, img, price, quantity, min_order } = products;
  return (
    <div className="container mx-auto px-1 md:px-10">
      <h1 className="mb-3 font-semibold text-4xl text-purple-600 mt-5">
        Manage All Product
      </h1>
      <div class="overflow-x-auto rounded-lg">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Minimum Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    className="w-24 h-24 rounded-full"
                    src={product.img}
                    alt=""
                  />
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.min_order}</td>
                <td>
                  <button className="btn btn-xs mr-1">update</button>
                  <button className="btn btn-xs btn-error">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
