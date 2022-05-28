import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../../Shared/LoadingComponent';
import ConfirmUserDataDeleteModal from './ConfirmUserDataDeleteModal';

const MyOrders = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: myOrder,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    'myOrder',
    async () =>
      await axios
        .get(
          `https://blooming-fortress-97967.herokuapp.com/myOrders?email=${user.email}`,
          {
            headers: {
              author: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
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
              <th className="text-center">Status</th>
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
                  {!order?.paid && (
                    <div className="text-center">
                      <button
                        onClick={() =>
                          navigate(`/dashboard/payment/${order._id}`)
                        }
                        className="btn btn-sm mr-1"
                      >
                        Pay
                      </button>
                      <label
                        onClick={() => setDeleteId(order._id)}
                        htmlFor="confirmDelete"
                        className="btn btn-sm btn-error"
                      >
                        delete
                      </label>
                    </div>
                  )}
                  {order?.paid && (
                    <div className="text-center">
                      <div className="btn btn-sm btn-success mb-1">Paid</div>
                      <br />
                      <div className="btn btn-sm btn-success">
                        {order?.transactionId}
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {deleteId?.length > 0 && (
            <ConfirmUserDataDeleteModal deleteId={deleteId} refetch={refetch} />
          )}
        </table>
      </div>
    </>
  );
};

export default MyOrders;
