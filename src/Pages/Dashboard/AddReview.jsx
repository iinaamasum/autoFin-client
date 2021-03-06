import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const rating = Number(data.rating);
    if (rating > 5 || rating < 1) {
      toast.error('Rating must be between 1 and 5');
    } else {
      axios
        .post(`https://blooming-fortress-97967.herokuapp.com/review`, {
          ...data,
        })
        .then((res) => res.data);

      toast.success('Review added successfully');
    }
  };

  return (
    <section>
      <div className="container max-w-[800px] mx-auto p-4 md:p-8 lg:p-10 my-5 bg-base-100 rounded-xl shadow-xl">
        <h1 className="text-2xl md:text-3xl mt-5 font-semibold text-purple-600">
          Add A Review
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="my-10">
          <div className="md:flex gap-x-5">
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Name</span>
              </label>
              <input
                type="text"
                className="bg-gray-300 px-5 py-3 rounded-lg w-full text-red-600 font-semibold bg-[#dddeee64]"
                disabled
                value={user.displayName}
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Email</span>
              </label>
              <input
                type="text"
                className="bg-gray-300 px-5 py-3 rounded-lg w-full text-red-600 font-semibold bg-[#dddeee64]"
                disabled
                value={user.email}
              />
            </div>
          </div>
          <div className="md:flex gap-x-5">
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Phone</span>
              </label>
              <input
                type="text"
                className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold bg-[#dddeee64]"
                placeholder="Your Phone"
                {...register('phone')}
                required
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="">
                <span className=" font-semibold text-lg">Rating</span>
              </label>
              <input
                type="text"
                className="input px-5 py-3 rounded-lg w-full text-green-600 font-semibold bg-[#dddeee64]"
                placeholder="Rating"
                {...register('rating')}
                required
              />
            </div>
          </div>
          <div className="form-control w-full mb-5">
            <label className="">
              <span className=" font-semibold text-lg">Review</span>
            </label>
            <textarea
              cols="30"
              rows="5"
              type="text"
              placeholder="Enter your review"
              required
              {...register('review')}
              style={{ border: '1px solid #0FCFEC' }}
              className="bg-[#dddeee64] rounded-lg p-3 focus:outline-offset-2 resize-none focus:ring-inset input-bordered input-primary w-full text-green-500 font-semibold"
            ></textarea>
          </div>
          <input
            className="w-full btn text-xl font-bold"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default AddReview;
