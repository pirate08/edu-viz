import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Nav_Items = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Overview',
    link: '/overview',
  },
  {
    name: 'Literacy',
    link: '/literacy',
  },
  {
    name: 'Gender Gap',
    link: '/gender-gap',
  },
  {
    name: 'Indian States',
    link: '/states',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const visible = open ? 'translate-y-[10px]' : 'translate-y-[-600px]';

  useEffect(() => {}, [open]);

  return (
    <div className='h-32 shadow-xl'>
      <div className='relative'>
        <div className='flex justify-center'>
          <Image
            src='/nav-img-removebg.png'
            alt='Logo'
            height={10}
            width={120}
            className='rounded bg-white mr-1'
          />
        </div>
        <div
          className='absolute right-6 top-12 text-2xl'
          onClick={() => setOpen(!open)}>
          {open ? <AiFillCloseCircle /> : <AiOutlineMenu />}
        </div>
      </div>
      <div
        className={`absolute z-20 h-96 w-full flex flex-col items-end gap-10 bg-black text-white px-9 py-12 transition-transform ease-in-out duration-500 ${visible}`}>
        {Nav_Items.map((nav, index) => (
          <div key={index}>
            <ul>
              <Link href={nav.link}>
                <li>{nav.name}</li>
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
