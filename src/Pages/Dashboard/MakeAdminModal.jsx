import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const MakeAdminModal = ({ refetch, makeAdmin }) => {
  // console.log(makeAdmin.email);
  const handleDelete = async () => {
    await axios
      .put(
        `https://blooming-fortress-97967.herokuapp.com/userAdmin/${makeAdmin.email}`,
        {
          name: makeAdmin.name,
          email: makeAdmin.email,
          role: 'Admin',
        }
      )
      .then((res) => {
        toast.success('Successfully made admin');
        refetch();
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  const handleDeleteCancel = () => {
    toast.error('Admin creation cancelled');
  };
  return (
    <div>
      <input type="checkbox" id="confirm-make-admin" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this product?
          </h3>

          <div className="modal-action">
            <label
              onClick={handleDelete}
              htmlFor="confirm-make-admin"
              className="btn px-5"
            >
              Yes
            </label>
            <label
              onClick={handleDeleteCancel}
              htmlFor="confirm-make-admin"
              className="btn btn-error px-5"
            >
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdminModal;
