import React from 'react';
import Image from 'next/image';
import { Roboto } from '@next/font/google';

const HomePage = () => {
  return (
    <div>
      {/* --Text Inside Image-- */}
      <div>
        {/* --Hero Image-- */}
        <div
          className='relative h-[600px] w-full bg-cover bg-center'
          style={{ backgroundImage: `url('/hero2.jpeg')` }}>
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8'>
            {/* --Title-- */}
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>
              EduViz India: Education Insights Dashboard
            </h1>
            {/* --Sub-Title-- */}
            <h6
              className='mt-3 text-md sm:text-xl'
              style={{ fontFamily: 'Dancing Script, cursive' }}>
              Explore India's Education Landscape Through Interactive Data
              Visualizations.
            </h6>
          </div>
        </div>
      </div>
      {/* -- */}
    </div>
  );
};

export default HomePage;
