import React from 'react';
import CTA from '../common/CTA';
import Image from 'next/image';
import Creator from '../common/Creator';

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
      {/* --Text-Portion-- */}
      <div className='h-full w-full bg-gradient-to-b from-sky-50 to-sky-100 py-14 px-4 sm:px-7 md:px-14'>
        {/* --Introduction-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            Introduction
          </h1>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            Welcome to EduViz India, the ultimate platform for illuminating the
            multifaceted realm of education across the diverse landscapes of
            <span className='text-green-600 font-bold'> India</span>. Through
            our powerful interactive data visualizations, we empower you to
            embark on a journey of{' '}
            <span className='text-green-600 font-bold'>
              discovery, analysis, and enlightenment
            </span>
            . Gain valuable insights into the intricacies of education,
            literacy, gender gap, and more, all within the context of various
            Indian states.
          </p>
        </div>
        {/* --About Eduviz India-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            About EduViz India
          </h1>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            EduViz India stands as a beacon of knowledge, seamlessly fusing the
            worlds of education and data. Our mission is to provide a
            comprehensive and intuitive platform that transcends conventional
            data analysis. Whether you're{' '}
            <span className='text-green-600 font-bold'>
              an inquisitive student, a dedicated educator, a policy visionary,
              or an academic explorer,
            </span>{' '}
            EduViz India opens the doors to a wealth of information that helps
            you make informed decisions and fuel groundbreaking discoveries.
          </p>
        </div>
        {/* --Key-Features-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            Key Features
          </h1>
          <ul className='list-disc pl-4'>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Interactive Insights:{' '}
              </span>
              Immerse yourself in a tapestry of interactive visualizations that
              breathe life into complex data. From growth trends to regional
              variations, our visualizations empower you to extract meaningful
              insights at a glance.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>State Dynamics: </span>
              Embark on an illuminating journey through the educational fabric
              of each Indian state. Compare literacy rates, gender parity, and
              access to educational resources to unearth the nuances that make
              each state unique.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Igniting Change:{' '}
              </span>
              At EduViz India, we believe in the power of data to drive change.
              Empower yourself with the tools needed to advocate for progress,
              shape policies, and make decisions that propel education to new
              heights.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Intuitive Exploration:{' '}
              </span>
              Our user-friendly interface ensures that the world of data
              exploration is accessible to all. Whether you're a data aficionado
              or a newcomer, navigating our platform is as intuitive as it is
              enlightening.
            </li>
          </ul>
        </div>
        {/* --User Benifits-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            User Benifits
          </h1>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            Education is the cornerstone of progress, and understanding its
            dynamics is vital for growth. EduViz India aspires to be more than a
            platform; it's a movement that champions the cause of informed
            decisions. By bringing education and data together, we enable
            individuals, institutions, and decision-makers to unravel the
            threads that shape India's educational tapestry.
          </p>
          <p className='text-gray-600 text-md md:text-lg mt-5'>
            Prepare to traverse the labyrinth of education, guided by the light
            of knowledge.{' '}
            <span className='text-green-600 font-bold'>
              Let's join hands to unveil insights,
            </span>{' '}
            challenge preconceptions, and work collectively towards a brighter
            educational future.
          </p>
          <p
            className='text-green-700 font-bold mt-5 text-md md:text-lg'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Embark on your educational odyssey with EduViz India today!
          </p>
        </div>
        {/* --CTA- Call to Action-- */}
        <div className='pb-7'>
          <CTA />
        </div>
        {/* --Data Helped-- */}
        <div className='pb-7 flex items-center justify-center flex-wrap gap-6'>
          {/* --Image-- */}
          <div>
            <Image
              src='/datahelped.png'
              width={800}
              height={800}
              alt='Data-Helped'
              className='rounded-md'
            />
          </div>
          {/* --Text-Portion */}
          <div>
            <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
              How Data Helped?
            </h1>
            <p className='text-gray-600 mt-4 text-md md:text-lg'>
              In a world driven by information, Edu-Viz emerges as a
              transformative force, bringing the power of data to the realm of
              education. With a mission to foster informed decisions and enhance
              learning outcomes,{' '}
              <span className='text-green-600 font-bold'>
                Edu-Viz presents a comprehensive dashboard that deciphers the
                intricate landscape of education in India.
              </span>
            </p>
            <p className='text-gray-600 mt-4 text-md md:text-lg'>
              Harnessing the potential of data analytics, Edu-Viz empowers
              educators, policymakers, students, and researchers alike. By
              distilling complex datasets into intuitive visualizations, Edu-Viz
              paints a vivid picture of{' '}
              <span className='text-green-600 font-bold'>
                educational trends, regional variations, and emerging patterns.
              </span>{' '}
              These insights drive evidence-based policies, guide educational
              strategies, and shape the future of learning.
            </p>
            <p className='text-gray-600 mt-4 text-md md:text-lg'>
              Edu-Viz stands as a beacon of transparency, enabling users to
              explore literacy rates, gender disparities, enrollment ratios, and
              more, all at their fingertips. Whether seeking to bridge education
              gaps, make informed choices, or advocate for change,{' '}
              <span className='text-green-600 font-bold'>
                Edu-Viz offers a platform that unites data and education for a
                brighter future.
              </span>
            </p>
            <p className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-600 font-bold'>
                Step into Edu-Viz's realm of interactive graphs, dynamic maps,
                and compelling narratives.
              </span>{' '}
              Together, let's harness the transformative power of data to pave
              the way for a more equitable and enlightened education landscape
              in India.
            </p>
          </div>
        </div>
        {/* --Data Sources-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            Data Sources
          </h1>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            At the heart of Edu-Viz lies a commitment to transparency and
            accuracy. Our platform derives its insights from a diverse array of
            reliable data sources meticulously curated by experts. These sources
            span
            <span className='text-green-600 font-bold'>
              {' '}
              reputable governmental reports, educational institutions, surveys,
              and renowned research publications.
            </span>
          </p>
          <p className='text-gray-600 mt-3 text-md md:text-lg'>
            We prioritize data integrity, ensuring that the information
            presented within our visualizations is up-to-date, validated, and
            reflective of the educational landscape's nuances. Collaborating
            with trusted data partners, Edu-Viz transforms raw information into
            <span className='text-green-600 font-bold'>
              {' '}
              meaningful narratives, fostering a deeper understanding of
              educational trends and challenges.
            </span>
          </p>
          <p className='text-gray-600 mt-3 text-md md:text-lg'>
            As we evolve, we remain committed to expanding our repertoire of
            data sources, ensuring that Edu-Viz remains at the forefront of
            accurate education insights, empowering users to
            <span className='text-green-600 font-bold'>
              {' '}
              make informed choices for a brighter educational future.
            </span>
          </p>
          <h1
            className='mt-4 text-green-700 font-bold text-md md:text-xl'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Link of the page where the data is stored -{' '}
            <a
              href='https://www.findeasy.in/indian-states-by-literacy-rate/'
              className='text-sky-700 border-b-2 border-b-black'>
              Find Easy - Population & More
            </a>
          </h1>
        </div>
        {/* --Creator-- */}
        <div>
          <Creator />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
