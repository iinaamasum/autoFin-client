import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const MakeAdminModal = ({ refetch, makeAdmin }) => {
  console.log(makeAdmin.email);
  const handleDelete = async () => {
    await axios
      .put(`http://localhost:5000/userAdmin/${makeAdmin.email}`, {
        name: makeAdmin.name,
        email: makeAdmin.email,
        role: 'Admin',
      })
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
      <input type="checkbox" id="confirm-make-admin" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete this product?
          </h3>

          <div class="modal-action">
            <label
              onClick={handleDelete}
              for="confirm-make-admin"
              class="btn px-5"
            >
              Yes
            </label>
            <label
              onClick={handleDeleteCancel}
              for="confirm-make-admin"
              class="btn btn-error px-5"
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
