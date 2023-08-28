import React from 'react';
import Image from 'next/image';

const Visuals = () => {
  return (
    <div>
      {/* --Heading-- */}
      <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
        Visualization
      </h1>
      <div className='mt-4'>
        {/* --Images and Text-- */}
        {/* --First-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero1.avif'
            width={500}
            height={200}
            alt='Hero-1'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Diverse Groups of student
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            An image showing a diverse group of students engaged in learning
            activities. This reflects the educational aspect of this platform
            and the focus on students' experiences.
          </p>
        </div>
        {/* --Second-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero2.avif'
            width={500}
            height={200}
            alt='Hero-2'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Graphs and Charts
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            Visualizations of various educational data presented in graphs,
            charts, and diagrams. This highlights the data visualization aspect
            of this platform.
          </p>
        </div>
        {/* --Third-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero3.avif'
            width={500}
            height={200}
            alt='Hero-3'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Map Of India
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            A map of India with different states highlighted. This symbolizes
            the state-wise comparisons and educational insights this platform
            provides.
          </p>
        </div>
        {/* --Fourth-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero4.avif'
            width={500}
            height={200}
            alt='Hero-4'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Educational Settings
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            Images of classrooms, libraries, and educational institutions. These
            images convey the learning environment that this platform aims to
            improve.
          </p>
        </div>
        {/* --Fifth-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero5.avif'
            width={500}
            height={200}
            alt='Hero-5'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Digital Devices
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            Laptops, tablets, and smartphones showcasing this platform's
            accessibility and user-friendliness.
          </p>
        </div>
        {/* --Sixth-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero6.avif'
            width={500}
            height={200}
            alt='Hero-6'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Hands-on Learning
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            Students engaged in hands-on learning activities, experiments, or
            interactive sessions. This captures the interactive and engaging
            nature of this platform.
          </p>
        </div>
        {/* --Seventh-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero7.avif'
            width={500}
            height={200}
            alt='Hero-7'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Innovative Learning
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            Images that depict innovative learning methods such as online
            courses, virtual reality, and interactive simulations.
          </p>
        </div>
        {/* --Eigth-- */}
        <div className='flex flex-col justify-center items-center mb-3'>
          <Image
            src='/overview-hero8.avif'
            width={500}
            height={200}
            alt='Hero-8'
          />
          <h1
            className='text-green-700 font-bold mt-4 text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Empowerment
          </h1>
          <p className='text-gray-600 mt-2 text-md md:text-lg text-center'>
            Visuals that convey empowerment, growth, and progress, showcasing
            how this platform empowers users to make informed decisions and
            drive positive change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Visuals;
