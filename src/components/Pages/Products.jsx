import React from 'react';
import HeadlineCards from '../Order/HeadlineCards';
import Cloths from '../Order/Cloths';
// import Category from '../Order/Category';

const Products = () => {
  return (
    <div
      className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/6f/ff/07/6fff07835ed9d3e806af8db1a89596ce.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Actual content */}
      <div className="relative z-10 pb-10">
        <HeadlineCards />
        <Cloths />
        {/* <Category /> */}
      </div>
    </div>
  );
};

export default Products;
