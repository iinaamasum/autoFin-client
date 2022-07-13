import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const ConfirmDeleteModal = ({ refetch, deleteId }) => {
  const handleDelete = async () => {
    await axios
      .delete(
        `https://blooming-fortress-97967.herokuapp.com/product/${deleteId}`
      )
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
      <input type="checkbox" id="confirmDelete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this product?
          </h3>

          <div className="modal-action">
            <label
              onClick={handleDeleteCancel}
              htmlFor="confirmDelete"
              className="btn px-5"
            >
              No
            </label>
            <label
              onClick={handleDelete}
              htmlFor="confirmDelete"
              className="btn btn-error px-5"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
