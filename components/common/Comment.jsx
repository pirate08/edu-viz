import React from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

const Comment = () => {
  return (
    // --Comment Section--
    <div className='h-full md:h-[400px] py-7 md:py-0 w-full bg-blue-950 text-white flex flex-col gap-7 md:gap-14 justify-center px-3'>
      {/* --Praise Text-- */}
      <div className='flex'>
        <span className='text-2xl mr-2 sm:mr-1 text-white'>
          <BiSolidQuoteAltLeft />
        </span>
        <h1
          className='text-green-400 text-center font-bold text-xl md:text-3xl'
          style={{ fontFamily: 'Dancing-script , cursive' }}>
          At the heart of our approach is an unwavering focus on our customers,
          valuing their feedback as our guiding light.
        </h1>
        <span className='text-2xl flex items-end sm:items-start sm:ml-1 text-white'>
          <BiSolidQuoteAltRight />
        </span>
      </div>
      {/* --Input Part-- */}
      <div className='md:px-40'>
        <textarea
          rows='3'
          //   value={comment}
          //   onChange={handleCommentChange}
          placeholder='Leave your comment...'
          className='w-full px-10 md:px-3 mb-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-300 resize-none sm:resize-y'
        />
        {/* --Button-- */}
        <button className='float-right'>Add Comment</button>
      </div>
    </div>
  );
};

export default Comment;
