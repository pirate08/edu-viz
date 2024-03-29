import React from 'react';
import Header from '@/components/Header';
import State from '@/components/partials/State';
import Navbar from '@/components/responsiveness/Navbar';
import Footer from '@/components/Footer';
import Connection from '@/components/common/Connection';

export default function overview() {
  return (
    <div>
      <div>
        {/* --import header/navbar-- */}
        <div className='hidden sm:block'>
          <Header />
        </div>
        {/* --import responsive navbar-- */}
        <div className='sm:hidden'>
          <Navbar />
        </div>
      </div>
      {/* --State Page-- */}
      <div>
        <State />
      </div>
      {/* --Connection-- */}
      {/* <div>
        <Connection />
      </div> */}
      {/* --Footer-- */}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
