import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import LoadingComponent from '../../Shared/LoadingComponent';

const ManageOrder = () => {
  const [shipped, setShipped] = useState(false);
  const {
    data: usersOrder,
    isLoading,
    isError,
  } = useQuery(
    'usersOrder',
    async () =>
      await axios
        .get(`https://blooming-fortress-97967.herokuapp.com/usersOrder`)
        .then((res) => res.data)
  );
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (isError) {
    toast.error('Something went wrong');
  }
  // console.log(usersOrder);
  return (
    <>
      <h1 className="text-2xl md:text-4xl text-purple-600 font-bold ml-2 md:ml-5">
        Manage All Orders
      </h1>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Customer's Email</th>
              <th>Price</th>
              <th>Order Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {usersOrder?.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={order.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>${order.price}</td>
                <td>{order.item_needed}</td>
                <td>
                  {order?.paid ? (
                    shipped ? (
                      <div className="">
                        <button className="btn btn-sm">Shipped</button>
                      </div>
                    ) : (
                      <div className="">
                        <button
                          onClick={() => setShipped(true)}
                          className="btn btn-sm"
                        >
                          Pending To Ship
                        </button>
                      </div>
                    )
                  ) : (
                    <div className="">
                      <button disabled className="btn btn-sm">
                        Not Paid
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageOrder;
