import React, { useState } from 'react';
import { data } from '../../data/data'; 

const Cloths = () => {
  const [Cloths, setCloths] = useState(data);

  const filterType = (category) => {
    setCloths(data.filter(item => item.category === category));
  };

  const filterPrice = (price) => {  
    setCloths(data.filter(item => item.price === price));
  };

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-white font-bold text-4xl text-center mt-4'>
        Top Rated Menu Items
      </h1>

      {/* Filter */}
      <div className='max-w-[1640px] mx-auto flex justify-between p-4'>
        <div>
          <p className='text-white font-bold'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={() => setCloths(data)} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>All</button>
            <button onClick={() => filterType('burger')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>Burger</button>
            <button onClick={() => filterType('pizza')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>Pizza</button>
            <button onClick={() => filterType('chicken')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>Chicken</button>
            <button onClick={() => filterType('salad')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>Salad</button>
          </div>
        </div>

        <div>
          <p className='text-white font-bold'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full mr-9'>
            <button onClick={() => filterPrice('$20')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>$20</button>
            <button onClick={() => filterPrice('$100')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>$100</button>
            <button onClick={() => filterPrice('$200')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>$200</button>
            <button onClick={() => filterPrice('$800')} className='m-1 border-white text-white hover:bg-blue-900 hover:text-white duration-300'>$800</button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {Cloths.map((item, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
            <div className='px-2 py-4'>
              <p className='font-bold text-white'>{item.name}</p>
              <p className='bg-blue-900 text-white text-center font-bold rounded-full px-2 py-1 hover:border-blue-900 hover:border-4 hover:bg-white/10 duration-300'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cloths;
