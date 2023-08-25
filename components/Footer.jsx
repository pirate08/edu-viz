import React from 'react';
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className='h-20 w-full bg-blue-950 text-gray-400'>
        {/* Connection-- */}
        <div className='flex flex-wrap items-center justify-center md:justify-between py-3 px-3 md:px-6 md:py-6'>
          <h1 className='text-lg'>Get connected with us on social networks:</h1>
          {/* --Icons-- */}
          <div className='flex items-center gap-4 mt-2 cursor-pointer text-lg'>
            <BsFacebook />
            <BsTwitter />
            <BsGoogle />
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
      </div>
      {/* --Main Part-- */}
      <div className='h-full w-full py-10 px-5 md:py-20 md:px-10'>
        {/* --Logo-- */}
        <div>
          <div className='flex items-center'>
            <Image
              src='/nav-img-removebg.png'
              alt='Logo'
              height={10}
              width={100}
              className='rounded bg-white mr-1'
            />
            <div>
              {/* --Title-- */}
              <h1 className='text-xl cursor-pointer text-sky-400 hidden lg:block'>
                EduViz India: Education Insights Dashboard
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
