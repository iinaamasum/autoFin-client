import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: myOrder,
    isLoading,
    isError,
  } = useQuery(
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

  if (isError) {
    toast.error('UnAuthorized Access');
    signOut(auth);
    navigate('/login');
  }
  const myOrderList = [];
  for (let i = myOrder?.length - 1; i >= 0; i--) {
    myOrderList.push(myOrder[i]);
  }

  return (
    <>
      <h1 className="text-2xl md:text-4xl text-purple-600 font-bold ml-2 md:ml-5">
        My Orders
      </h1>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Order Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrderList?.map((order, index) => (
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
