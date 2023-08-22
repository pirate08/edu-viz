import React from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className='h-[300px] w-full bg-blue-950 flex justify-center items-center px-3'>
      <div className='flex flex-col'>
        {/* --Quote Part-- */}
        <div className='flex'>
          <span className='text-2xl mr-6 sm:mr-2 text-white'>
            <BiSolidQuoteAltLeft />
          </span>
          <h1
            className='text-green-400 font-bold text-xl md:text-3xl'
            style={{ fontFamily: 'Dancing-script , cursive' }}>
            Eduaction is not the learning of facts, but the training of the mind
            to think.
          </h1>
          <span className='text-2xl flex items-end sm:items-start sm:ml-2 text-white'>
            <BiSolidQuoteAltRight />
          </span>
        </div>
        <h1 className='flex justify-end mt-3 text-md md:text-xl text-sky-200'>
          ------- Albert Einstein
        </h1>
        {/* --Exploring Button-- */}
        <div className='mt-5 flex justify-center'>
          <Link href='#'>
            <button className='bg-sky-700 hover:bg-sky-800 px-4 py-2 rounded-md text-white text-md md:text-lg'>
              Start Your Discovery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
