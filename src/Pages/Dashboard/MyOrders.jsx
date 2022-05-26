import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const { data: myOrder, isLoading } = useQuery(
    'myOrder',
    async () =>
      await axios
        .get(`http://localhost:5000/myOrders?email=${user.email}`, {
          headers: {
            author: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => res.data)
  );
  if (isLoading) return <LoadingComponent />;
  return (
    <>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrder?.map((order) => (
              <tr>
                <td>1</td>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={order.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order.name}</td>
                <td>${order.price}</td>
                <td>{order.item_needed}</td>
                <td>
                  <div className="">
                    <div className="btn btn-sm">Pay</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrders;
