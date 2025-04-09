// HomePage.js
import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection'; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="flex flex-row justify-between px-5 lg:px-36 gap-4">
      {/* Left Section */}
      <div className="w-[20%] hidden lg:block">
        <Navigation />
      </div>

      {/* Middle Section */}
      <div className="w-full lg:w-[50%]">
        <HomeSection />
      </div>

      {/* Right Section */}
      <div className="w-[25%] hidden lg:block">
        <p className="text-center">Right part</p>
      </div>
    </div>
  );
};

export default HomePage;
