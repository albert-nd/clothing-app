import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto'>
      <div className='max-h-[500px]'>
        <div className=' w-full h-full ml-3 mt-9 text-gray-200 max-h-[900px] flex flex-col justify-center'>
          <h1 className="text-4xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-blue-900">
            FASHION <span className="text-blue-100">FOR ALL</span>
          </h1>

          <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-8xl font-bold text-blue-900">
            EVERY<span className="text-blue-100">DAY ATTITUDE</span>
          </h1>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
