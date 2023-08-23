import React from 'react';

const TestimonialNotes = [
  {
    paragraph:
      'Edu-Viz has revolutionized the way I perceive education data. Its intuitive visualizations turned complex statistics into stories that are easy to grasp. Navigating through the platform is a delight, and the insights I gained empowered me to make informed decisions. Edu-Viz is a game-changer for anyone seeking clarity in the world of education.',
  },
  {
    paragraph:
      "As an educator, Edu-Viz has been a revelation. Its interactive dashboards provided me with valuable insights into student trends and learning patterns, allowing me to tailor my teaching approach. The platform's reliability and data accuracy are remarkable, making it an invaluable tool for educators and researchers alike",
  },
  {
    paragraph:
      "Edu-Viz is not just a platform; it's a gateway to understanding education's intricate dynamics. Its beautifully designed visualizations unveiled trends I had never noticed before. With Edu-Viz, I feel equipped to participate in meaningful discussions about education, armed with evidence and insights that inspire positive change.",
  },
];

const Testimonial = () => {
  return (
    <div>
      {/* --Title-- */}
      <h1 className='text-xl md:text-2xl font-bold text-blue-900 mb-4'>
        Testimonial
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        {TestimonialNotes.map((testimonial, index) => (
          <div key={index} className='border-2 border-sky-300 py-10 px-4'>
            <p>{testimonial.paragraph}</p>
            <div className='mt-4'>
              <h4 className='float-right'>-----Nemo</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
