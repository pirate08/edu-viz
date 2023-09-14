import React from 'react';
import Image from 'next/image';

const Literacy = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-sky-50 to-sky-100 py-14 px-4 sm:px-7 md:px-14'>
      {/* --Images-- */}
      <div className='mb-10'>
        <div className='flex justify-center items-center flex-wrap gap-3 mt-5 sm:mt-10'>
          {/* --First Image-- */}
          <div className='sm:border-2 sm:px-4 sm:py-3 rounded-md'>
            <Image
              src='/literacy-hero1.avif'
              width={400}
              height={100}
              alt='Hero-1'
              className='rounded-md hover:scale-110 duration-300 cursor-pointer'
            />
          </div>
          {/* --Second Image-- */}
          <div className='sm:border-2 sm:px-4 sm:py-3 rounded-md'>
            <Image
              src='/literacy-hero3.avif'
              width={400}
              height={100}
              alt='Hero-2'
              className='rounded-md hover:scale-110 duration-300 cursor-pointer'
            />
          </div>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-3 mt-4'>
          {/* --Third Image-- */}
          <div className='sm:border-2 sm:px-4 sm:py-3 rounded-md'>
            <Image
              src='/literacy-hero4.avif'
              width={400}
              height={100}
              alt='Hero-3'
              className='rounded-md hover:scale-110 duration-300 cursor-pointer'
            />
          </div>
          {/* --Fourth Image-- */}
          <div className='sm:border-2 sm:px-4 sm:py-3 rounded-md'>
            <Image
              src='/literacy-hero2.avif'
              width={400}
              height={100}
              alt='Hero-4'
              className='rounded-md hover:scale-110 duration-300 cursor-pointer'
            />
          </div>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-3 mt-4'>
          {/* --Fifth Image-- */}
          <div className='sm:border-2 sm:px-4 sm:py-3 rounded-md sm:mt-3'>
            <Image
              src='/literacy-hero5.avif'
              width={800}
              height={100}
              alt='Hero-5'
              className='rounded-md hover:scale-110 duration-300 cursor-pointer'
            />
          </div>
        </div>
      </div>
      {/* --Text Portion-- */}
      {/* --Information-- */}
      <div className='mb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Information about Literacy and Essential Facts
        </h1>
        <p className='text-gray-600 mt-4 text-md md:text-lg'>
          Literacy is far more than just the ability to read and write; it is a
          fundamental skill that empowers individuals and transforms societies.
          Here, we delve into the vital aspects of literacy and provide
          essential facts about how it contributes to personal and societal
          development.
        </p>
      </div>
      {/* --What is literacy-- */}
      <div className='mb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          What is Literacy?
        </h1>
        <p className='text-gray-600 mt-4 text-md md:text-lg'>
          Literacy is the capacity to read, write, and comprehend written
          information effectively. It encompasses the ability to use these
          skills to engage in everyday activities, make informed decisions, and
          access knowledge.
        </p>
      </div>
      {/* --Key Facts on literacy-- */}
      <div className='mb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Key Facts on Literacy
        </h1>
        <ol className='list-decimal pl-4'>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Foundation of Learning:{' '}
            </span>
            Literacy serves as the foundation for acquiring knowledge and
            learning throughout one's life. It is a gateway to education,
            enabling individuals to explore diverse subjects and expand their
            horizons.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Economic Empowerment:{' '}
            </span>
            Literacy significantly enhances economic opportunities. Literate
            individuals are more likely to secure stable employment, earn higher
            incomes, and contribute to economic growth.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Healthcare Access:{' '}
            </span>
            Literacy is linked to better health outcomes. It enables individuals
            to understand health information, make informed health decisions,
            and access healthcare services effectively.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>Gender Equality: </span>
            Promoting literacy, especially among women and girls, is a powerful
            tool for achieving gender equality. Literate women tend to have
            fewer children, participate in the workforce, and advocate for their
            rights.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>Reducing Poverty: </span>
            Literacy plays a crucial role in poverty reduction. It equips
            individuals with the skills needed to escape the cycle of poverty,
            access resources, and improve their quality of life.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Community Development:{' '}
            </span>
            Literacy fosters active civic participation and community
            development. It empowers individuals to engage in discussions,
            advocate for their communities, and drive positive change.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>Digital Literacy: </span>
            In the digital age, digital literacy is essential. It enables
            individuals to navigate the internet, access online resources, and
            participate in the global information society.
          </li>
          <li className='text-gray-600 mt-4 text-md md:text-lg'>
            <span className='text-green-700 font-bold'>
              Global Citizenship:{' '}
            </span>
            Literacy promotes global citizenship by facilitating cross-cultural
            understanding and encouraging individuals to engage with global
            issues and perspectives.
          </li>
        </ol>
      </div>
      {/* --Challenges and Opportunities-- */}
      <div className='mb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Challenges and Opportunities
        </h1>
        <p className='text-gray-600 mt-4 text-md md:text-lg'>
          Despite the numerous benefits of literacy, millions of people
          worldwide still lack this essential skill. Addressing literacy
          challenges requires concerted efforts, including quality education,
          literacy programs, and equitable access to learning resources.
        </p>
      </div>
      {/* --Conclusion-- */}
      <div className='mb-7'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-900'>
          Conclusion
        </h1>
        <p className='text-gray-600 mt-4 text-md md:text-lg'>
          Literacy is an empowering force that opens doors to education,
          economic prosperity, better health, and social inclusion. It equips
          individuals with the tools they need to navigate an increasingly
          complex world, make informed choices, and contribute positively to
          their communities and society at large. Recognizing the importance of
          literacy is the first step towards fostering a more equitable and
          enlightened world.
        </p>
      </div>
    </div>
  );
};

export default Literacy;
