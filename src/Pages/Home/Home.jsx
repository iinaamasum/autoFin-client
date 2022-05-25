import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
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
      <BusinessSummary />
    </div>
  );
};

export default Home;
