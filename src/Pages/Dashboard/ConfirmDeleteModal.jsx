import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const ConfirmDeleteModal = ({ refetch, deleteId }) => {
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/product/${deleteId}`)
      .then(() => {
        toast.success('Product deleted successfully');
        refetch();
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  const handleDeleteCancel = () => {
    toast.error('Delete cancelled by user');
  };

  return (
    <div>
      <input type="checkbox" id="confirmDelete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete this product?
          </h3>

          <div class="modal-action">
            <label onClick={handleDelete} for="confirmDelete" class="btn px-5">
              Yes
            </label>
            <label
              onClick={handleDeleteCancel}
              for="confirmDelete"
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

export default ConfirmDeleteModal;
