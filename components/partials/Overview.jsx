import React from 'react';
import Image from 'next/image';
import Visuals from '../common/Visuals';

const Overview = () => {
  return (
    <div>
      <div className='h-full w-full bg-gradient-to-b from-sky-50 to-sky-100 py-14 px-4 sm:px-7 md:px-14'>
        {/* --Image-- */}
        <div className='flex justify-center items-center pb-7'>
          <Image
            src='/overview.avif'
            width={900}
            height={800}
            alt='Discussing about something'
          />
        </div>
        {/* --Dashboard Purpose-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            Dashboard Purpose
          </h1>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            The purpose of the EduViz dashboard is to provide a comprehensive
            and insightful platform for users to navigate and analyze complex
            educational data effortlessly. By offering an{' '}
            <span className='text-green-600 font-bold'>
              {' '}
              intuitive interface and user-friendly tools,
            </span>{' '}
            EduViz empowers users to uncover valuable insights, trends, and
            patterns within India's education landscape.
            <span className='text-green-600 font-bold'>
              {' '}
              Whether you're an educator, policymaker, researcher, or learner,
              this dashboard serves as your window into a wealth of information,{' '}
            </span>
            enabling informed decision-making and fostering a deeper
            understanding of educational dynamics. With EduViz, we aim to
            transform raw data into actionable knowledge, contributing to the
            enhancement and advancement of education across the nation.
          </p>
        </div>
        {/* --Dashboard Benifits-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            Dashboard Purpose
          </h1>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            Using our dashboard offers users a multitude of valuable benefits
            that enhance their educational insights and decision-making
            processes. Here are some of the key advantages:
          </p>
          <ul className='list-disc pl-4'>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                In-Depth Analysis:{' '}
              </span>
              Our dashboard allows users to delve into detailed data and
              statistics, facilitating a comprehensive understanding of
              education trends, disparities, and progress across various
              categories.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>Visual Clarity: </span>
              Through interactive visualizations and graphs, complex data is
              presented in a visually appealing and easy-to-understand manner,
              enabling users to grasp insights quickly.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Data Comparison:{' '}
              </span>
              Users can compare educational metrics across different Indian
              states, making it simple to identify regional variations and
              pinpoint areas for improvement.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Identify Patterns:{' '}
              </span>
              The dashboard aids in recognizing patterns, correlations, and
              trends that might not be apparent in raw data, thereby fostering
              data-driven decision-making.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Informed Policy Decisions:{' '}
              </span>
              Policymakers can utilize the dashboard's insights to formulate
              evidence-based strategies that address specific educational
              challenges and drive positive outcomes.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Empower Educators:{' '}
              </span>
              Educators can gain insights into student performance, literacy
              rates, and gender gaps, helping tailor their teaching methods and
              interventions to cater to diverse needs.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Engage Learners:{' '}
              </span>
              Learners can explore data related to their educational journey,
              fostering a sense of ownership and motivation to actively
              participate in their academic pursuits.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Transperancy and Accountability:{' '}
              </span>
              The dashboard promotes transparency by providing open access to
              educational data, encouraging accountability among stakeholders.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Future Planning:{' '}
              </span>
              Researchers can use the dashboard to predict trends, enabling
              educational institutions to proactively plan for future needs and
              improvements.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Impactful Visual Narratives:{' '}
              </span>
              The dashboard transforms data into impactful stories, making it a
              compelling tool for presentations and reports.
            </li>
          </ul>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            Overall, our dashboard empowers users to navigate through
            educational data effortlessly, making informed decisions, and
            contributing to the advancement of education in India.
          </p>
        </div>
        {/* --How it helps-- */}
        <div className='pb-7'>
          <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
            How It Helps?
          </h1>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            Our platform plays a crucial role in bridging the gap between
            intricate educational data and actionable insights, ensuring that
            users can access, interpret, and utilize information effectively. By
            providing a user-friendly interface and powerful tools, we empower
            users to:
          </p>
          <ul className='list-disc pl-4'>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Access Educational Insights:{' '}
              </span>
              Navigating through the sea of educational data can be
              overwhelming. Our platform simplifies this process by transforming
              complex data sets into intuitive visualizations and narratives.
              Users can effortlessly explore literacy rates, gender gaps,
              state-wise comparisons, and more, gaining a comprehensive
              understanding of the education landscape.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Make Informed Decisions:{' '}
              </span>
              Informed decision-making is at the core of educational
              improvement. Our platform equips users with evidence-based
              insights to guide their choices. Policymakers can create targeted
              strategies, educators can tailor teaching methodologies, and
              learners can adapt their learning approaches based on real-time
              data.
            </li>
            <li className='text-gray-600 mt-4 text-md md:text-lg'>
              <span className='text-green-700 font-bold'>
                Understand Complex Data::{' '}
              </span>
              Understanding intricate data patterns is challenging, especially
              for non-experts. Our platform simplifies this by presenting data
              in a visually engaging manner. Visualizations, graphs, and
              interactive elements break down complex data, enabling users to
              absorb insights with ease.
            </li>
          </ul>
          <p className='text-gray-600 mt-4 text-md md:text-lg'>
            In essence, our platform acts as a bridge between raw data and
            meaningful understanding. It empowers users to explore educational
            insights, make informed decisions, and unravel complex data,
            ultimately fostering progress and improvement in the educational
            landscape.
          </p>
        </div>
        {/* --Visuals and Graphics-- */}
        <div className='pb-7'>
          <Visuals />
        </div>
      </div>
    </div>
  );
};

export default Overview;
