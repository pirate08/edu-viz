import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav_Items = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'Overview',
    link: '#',
  },
  {
    name: 'Literacy',
    link: '#',
  },
  {
    name: 'Gender Gap',
    link: '#',
  },
  {
    name: 'Indian States',
    link: '#',
  },
];

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-4 md:px-10 h-28 shadow-xl'>
        {/* --Nav-Image added here-- */}
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
        {/* --Nav-Item added here-- */}
        <div className='flex items-center gap-3 md:gap-5 text-md lg:text-lg'>
          {Nav_Items.map((nav, index) => (
            <div key={index}>
              <ul>
                <Link href={nav.link}>
                  <li className='text-sky-500 hover:text-sky-600'>
                    {nav.name}
                  </li>
                </Link>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
