import React from 'react';
import Image from 'next/image';

const Creator = () => {
  return (
    <div className='h-full py-8 md:py-8 2xl:h-[400px] w-full bg-blue-950 flex justify-center flex-wrap items-center px-3 gap-5'>
      {/* --Image Section-- */}
      <div>
        <Image src='/Tiklu.jpg' alt='Creator' width={400} height={200} />
      </div>
      {/* --About Creator-- */}
      <div className='text-sky-400'>
        <h1 className='text-xl md:text-2xl text-center'>Mayukh Deb Goswami</h1>
        <h6
          style={{ fontFamily: 'Dancing-script, cursive' }}
          className='text-md text-green-600 font-bold text-center'>
          Frontend Developer
        </h6>
        <h6
          style={{ fontFamily: 'Dancing-script, cursive' }}
          className='text-md text-green-600 font-bold text-center'>
          Crafting Digital Experiences through Code and Creativity.
        </h6>
        <p className='text-sm text-center mt-2 text-white md:hidden'>
          The Frontend Visionary at Edu-Viz blends creativity and coding prowess
          to sculpt seamless interfaces. Armed with HTML, CSS, and JavaScript,
          they craft engaging visualizations that breathe life into data.
          Collaborating with designers, they bridge design and functionality,
          ensuring user-centric experiences.
        </p>
        <p className='text-lg text-center mt-4 text-white px-4 hidden md:block'>
          The Frontend Visionary at Edu-Viz blends creativity and coding prowess
          to sculpt seamless interfaces.
          <br />
          Armed with HTML, CSS, and JavaScript, they craft engaging
          visualizations that breathe life into data.
          <br />
          Their role extends beyond pixels; it's about translating complex
          concepts into intuitive interactions.
          <br />
          Collaborating with designers, they bridge design and functionality,
          ensuring user-centric experiences.
        </p>
      </div>
    </div>
  );
};

export default Creator;
