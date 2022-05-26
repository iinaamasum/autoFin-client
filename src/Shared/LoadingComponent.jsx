import React from 'react';
import loading from '../assets/logo/loading.gif';

const LoadingComponent = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <img className="bg-white h-36" src={loading} alt="" />
    </div>
  );
};

export default LoadingComponent;
