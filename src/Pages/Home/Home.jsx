import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CollectionImgCollege from './CollectionImgCollege';
import HeroSection from './HeroSection';
import Parts from './Parts';
import Review from './Review';
import SubscribeNow from './SubscribeNow';

const Home = () => {
  return (
    <div>
      <Banner />
      <SubscribeNow />
      <CollectionImgCollege />
      <HeroSection />
      <BusinessSummary />
      <Parts />
      <Review />
    </div>
  );
};

export default Home;
