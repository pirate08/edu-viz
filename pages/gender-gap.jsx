import React from 'react';
import Header from '@/components/Header';
import Gender from '@/components/partials/Gender';
import Navbar from '@/components/responsiveness/Navbar';
import Footer from '@/components/Footer';
import Connection from '@/components/common/Connection';

const gender = () => {
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
      {/* --Gender-Gap Page-- */}
      <div>
        <Gender />
      </div>
      {/* --Connection-- */}
      <div>
        <Connection />
      </div>
      {/* --Footer-- */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default gender;
