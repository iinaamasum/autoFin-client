import React, { useEffect } from 'react';
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';
import auth from '../../firebase.init';

const Social = () => {
  const [signInWithGoogle, userGo, loadingGo, errorGo] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFb, errorFb] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);

  useEffect(() => {
    const err = errorFb || errorGit || errorGo;
    if (
      err?.message.includes('auth/account-exists-with-different-credential')
    ) {
      toast.error(
        `User already exist with this email. Please use another email or give correct credential`
      );
    }
  }, [errorFb, errorGit, errorGo]);

  return (
    <div className="text-center mt-3">
      <button
        onClick={() => signInWithGoogle()}
        className="mr-2 hover:text-slate-500"
      >
        <BsGoogle size={35} />
      </button>
      <button
        onClick={() => signInWithFacebook()}
        className="mr-2 hover:text-slate-500"
      >
        <BsFacebook size={35} />
      </button>
      <button
        onClick={() => signInWithGithub()}
        className=" hover:text-slate-500"
      >
        <BsGithub size={35} />
      </button>
    </div>
  );
};

export default Social;
