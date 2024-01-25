import React from 'react';
import Image from 'next/image';
// import FirstMap from '../maps/FirstMap';

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
      {/* --Understanding Education Across States In India-- */}
      {/* <div className='pb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Understanding Education Across States In India
        </h1>
        <p className='text-gray-600 mt-4 mb-4 text-md md:text-lg'>
          Viewed from an educational perspective, India's diverse states offer a
          rich tapestry of insights, challenges, and opportunities. Here are
          some key points to consider when looking at Indian states through an
          educational lens:
        </p>
        <ol className='list-decimal pl-4'>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Regional Disparities:{' '}
            </span>
            India is known for its vast regional disparities in education. While
            some states boast well-developed educational infrastructure and high
            literacy rates, others face significant challenges in providing
            quality education to their populations. These disparities can be
            attributed to differences in economic development, governance, and
            cultural factors.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>Literacy Rates: </span>
            Indian states exhibit a wide range of literacy rates. States like
            Kerala have achieved nearly universal literacy, while others,
            particularly in the northern and eastern regions, struggle with
            lower literacy rates. Analyzing these variations can provide
            valuable insights into the factors contributing to educational
            outcomes.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Gender Disparities:{' '}
            </span>
            Gender gaps in education persist in several Indian states, with
            disparities in female literacy rates and access to quality
            schooling. Understanding the reasons behind these disparities and
            monitoring progress toward gender parity is crucial for educational
            development.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Government Initiatives:{' '}
            </span>
            Various Indian states have implemented innovative educational
            policies and programs to address local challenges. For example,
            states like Tamil Nadu have pioneered initiatives to enhance school
            infrastructure and student outcomes. Studying these initiatives can
            offer valuable lessons for educational reform.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Language Diversity:{' '}
            </span>
            India's linguistic diversity is a defining feature of its
            educational landscape. Different states often have their own
            languages of instruction, creating unique challenges and
            opportunities for multilingual education. Examining language
            policies and their impact on learning outcomes is essential.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Access to Higher Education:{' '}
            </span>
            The availability and quality of higher education institutions vary
            widely across states. Some states, like Karnataka and Maharashtra,
            are home to prestigious universities and research institutes.
            Understanding how higher education impacts regional development and
            employment opportunities is a critical aspect of educational
            analysis.
          </li>
        </ol>
      </div> */}
      {/* --Engage quote-- */}
      <div className='pb-10'>
        <h1 className='text-xl md:text-2xl font-bold text-gray-500'>
          Let's come to the main point for which the website is about...
        </h1>
      </div>
      {/* --Map Section-- */}
      {/* --Section of the male and female difference in eduaction rate from the first cencus--  */}
      <div>
        {/* <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Difference of male and female education rate in India from first
          cencus.
        </h1> */}
        {/* <FirstMap /> */}
      </div>
    </div>
  );
};

export default State;
