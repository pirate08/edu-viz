import React from 'react';
import Image from 'next/image';

const State = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-sky-50 to-sky-100 py-14 px-4 sm:px-7 md:px-14'>
      {/* --Image-- */}
      <div className='flex justify-center items-center pb-10'>
        <Image
          src='/map.avif'
          width={700}
          height={800}
          alt='Indian Map'
          className='rounded-md'
        />
      </div>
      {/* --Introduction-- */}
      <div className='pb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Introduction
        </h1>
        <p className='text-gray-600 mt-4 text-md md:text-lg'>
          India, located in South Asia,
          <span className='text-green-600 font-bold'>
            {' '}
            is a diverse and culturally rich country known for its ancient
            history, stunning landscapes, and vibrant traditions.{' '}
          </span>
          With a population of over a billion people, it's the world's
          second-most populous nation. India is characterized by its unique
          blend of cultures, languages, religions, and cuisines. From the{' '}
          <span className='text-green-600 font-bold'>
            snow-capped Himalayas in the north to the tropical beaches in the
            south,{' '}
          </span>
          India offers a wide range of geographical diversity. It's a land of
          contrasts, where you'll find bustling metropolises like Mumbai and
          Delhi alongside serene rural villages.{' '}
          <span className='text-green-600 font-bold'>
            India's history is marked by ancient civilizations, the Mughal
            Empire, British colonial rule, and a long struggle for independence
            led by Mahatma Gandhi.{' '}
          </span>
          Today, India is a democratic republic with a diverse economy, and it's
          a global hub for technology, business, and culture.
        </p>
      </div>
      {/* --Educational Insights in India-- */}
      <div className='pb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Educational Insights in India
        </h1>
        <p className='text-gray-600 mt-4 text-md md:text-lg'>
          India's educational landscape is vast and varied, reflecting the
          nation's diversity.
          <span className='text-green-600 font-bold'>
            {' '}
            The education system encompasses primary, secondary, and higher
            education, with a focus on science, technology, engineering,
            mathematics (STEM), as well as the arts and humanities.{' '}
          </span>
          India has a rich tradition of learning, with ancient centers of
          knowledge like{' '}
          <span className='text-green-600 font-bold'>
            Nalanda and Takshashila.{' '}
          </span>
          Today, it boasts world-renowned institutions like the Indian
          Institutes of Technology (IITs) and the Indian Institutes of
          Management (IIMs). However, educational disparities exist, with some
          regions experiencing lower literacy rates and gender disparities.{' '}
          <span className='text-green-600 font-bold'>
            The government is actively working on improving access to quality
            education, and the country's youth continue to excel in various
            fields, making significant contributions to the global knowledge
            economy.
          </span>
        </p>
      </div>
    </div>
  );
};

export default State;
