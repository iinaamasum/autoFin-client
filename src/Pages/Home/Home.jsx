import React from 'react';
import Banner from './Banner';
import BrandPartner from './BrandPartner';
import BusinessSummary from './BusinessSummary';
import CollectionImgCollege from './CollectionImgCollege';
import HeroSection from './HeroSection';
import Parts from './Parts';
import Review from './Review';
import SecondHeroSection from './SecondHeroSection';
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
      <SecondHeroSection />
      <BrandPartner />
      <Review />
    </div>
  );
};

export default Home;
