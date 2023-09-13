import React from 'react';
import ImageSlider from './ImageSlider';
import FAQ from './FAQ';

const images = [
  '/overview-hero1.avif',
  '/overview-hero2.avif',
  '/overview-hero3.avif',
  '/overview-hero4.avif',
  '/overview-hero5.avif',
  '/overview-hero6.avif',
  '/overview-hero7.avif',
  '/overview-hero9.avif',
];

const Visuals = () => {
  return (
    <div>
      {/* --Heading-- */}
      <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
        Visualization
      </h1>
      <div className='mt-7'>
        <div className='w-full flex justify-center gap-2 flex-wrap'>
          <ImageSlider images={images} />
        </div>
      </div>
      {/* --Text Portion-- */}
      <div className='mt-7'>
        <ul className='list-disc pl-4'>
          {/* --First-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Diverse Groups of student:{' '}
            </span>
            An image showing a diverse group of students engaged in learning
            activities. This reflects the educational aspect of this platform
            and the focus on students' experiences.
          </li>
          {/* --Second-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Graphs and Charts:{' '}
            </span>
            Visualizations of various educational data presented in graphs,
            charts, and diagrams. This highlights the data visualization aspect
            of this platform.
          </li>
          {/* --Third-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>Map Of India: </span>A
            map of India with different states highlighted. This symbolizes the
            state-wise comparisons and educational insights this platform
            provides.
          </li>
          {/* --Fourth-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Educational Settings:{' '}
            </span>{' '}
            Images of classrooms, libraries, and educational institutions. These
            images convey the learning environment that this platform aims to
            improve.
          </li>
          {/* --Fifth-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>Digital Devices: </span>{' '}
            Laptops, tablets, and smartphones showcasing this platform's
            accessibility and user-friendliness.
          </li>
          {/* --Sixth-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Hands-on Learning:{' '}
            </span>{' '}
            Students engaged in hands-on learning activities, experiments, or
            interactive sessions. This captures the interactive and engaging
            nature of this platform.
          </li>
          {/* --Seventh-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Innovative Learning:{' '}
            </span>{' '}
            Images that depict innovative learning methods such as online
            courses, virtual reality, and interactive simulations.
          </li>
          {/* --Eigth-- */}
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>Empowerment: </span>{' '}
            Visuals that convey empowerment, growth, and progress, showcasing
            how this platform empowers users to make informed decisions and
            drive positive change.
          </li>
        </ul>
      </div>
      {/* --FAQ-- */}
      <div className='mt-7'>
        <FAQ />
      </div>
    </div>
  );
};

export default Visuals;
