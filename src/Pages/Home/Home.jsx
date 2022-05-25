import React from 'react';
import Banner from './Banner';
import CollectionImgCollege from './CollectionImgCollege';
import HeroSection from './HeroSection';
import SubscribeNow from './SubscribeNow';

const Home = () => {
  return (
    <div>
      <Banner />
      <SubscribeNow />
      <CollectionImgCollege />
      <HeroSection />
    </div>
  );
};

export default Home;
