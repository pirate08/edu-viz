import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const faqItems = [
    {
      question: 'What is EduViz India?',
      answer:
        'EduViz India is an educational insights dashboard that provides interactive data visualizations and analytics about various aspects of education across Indian states. It offers users the opportunity to explore and understand educational trends, literacy rates, gender gaps, and more.',
      isOpen: false,
    },
    {
      question: 'How can I access EduViz India?',
      answer:
        "EduViz India is accessible online through our website. Simply visit our platform's homepage to start exploring the educational insights and visualizations we offer.",
      isOpen: false,
    },
    {
      question: 'Do I need to create an account to use EduViz India?',
      answer:
        'No, you do not need to create an account to access the basic features of EduViz India. However, creating an account provides additional benefits, such as saving your preferences and personalized data visualization options.',
      isOpen: false,
    },
    {
      question: 'How do I navigate through the data visualizations?',
      answer:
        'Our dashboard features an intuitive navigation menu that allows you to explore various sections, such as Overview, Literacy, Gender Gap, and Indian States. Click on the desired section to access relevant data visualizations and insights.',
      isOpen: false,
    },
    {
      question: 'Can I customize the data visualizations?',
      answer:
        'Yes, EduViz India provides customization options for some data visualizations. You can often adjust filters, time periods, and other parameters to tailor the visualizations to your interests.',
      isOpen: false,
    },
    {
      question: 'Are the data sources reliable?',
      answer:
        'Absolutely. We source our data from reputable educational and governmental institutions. We ensure that the data is accurate, up-to-date, and verified before presenting it on our platform.',
      isOpen: false,
    },
    {
      question: 'How often is the data updated?',
      answer:
        'We strive to update our data on a regular basis, typically on a yearly or bi-yearly schedule. This ensures that you have access to the latest educational insights and trends.',
      isOpen: false,
    },
    {
      question: 'Is EduViz India mobile-friendly?',
      answer:
        'Yes, our platform is designed to be responsive and mobile-friendly. You can access and explore the data visualizations on various devices, including smartphones and tablets.',
      isOpen: false,
    },
    {
      question: 'How do I provide feedback or report an issue?',
      answer:
        'We welcome your feedback! You can reach out to us through the contact form on our website or send an email to support@eduvizindia.com. If you encounter any technical issues, please include details so that we can assist you effectively. You can also leave your feedback in our website homepage.',
      isOpen: false,
    },
    {
      question: ' Can I share the visualizations with others?',
      answer:
        'Yes, you can easily share specific data visualizations with others by using the provided sharing options. This allows you to collaborate, discuss, and analyze the educational insights together.',
      isOpen: false,
    },
  ];

  //   --Function to toggle the answers which are hidden--
  const toggleFAQItem = (index) => {
    const updateData = [...faqItems];
    updateData[index].isOpen = !updateData[index].isOpen;
    setFAQItem(updateData);
  };

  const [FAQItem, setFAQItem] = useState(faqItems);

  return (
    <div className='h-full w-full bg-blue-950 py-8 sm:py-14 px-5 sm:px-16'>
      {/* --Title-- */}
      <div>
        <h1
          className='text-green-400 font-bold text-xl md:text-3xl text-center mb-10'
          style={{ fontFamily: 'Dancing-script , cursive' }}>
          Frequently Asked Questions
        </h1>
      </div>
      {/* --FAQs-- */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {FAQItem.map((item, index) => (
          <div key={index} className='bg-white px-5 py-2 rounded-md'>
            <div className='flex items-center justify-between mb-2'>
              <h1 className='text-md sm:text-lg'>{item.question}</h1>
              <button onClick={() => toggleFAQItem(index)}>
                {item.isOpen ? <FaMinus /> : <GrAdd />}
              </button>
            </div>
            {item.isOpen && <p className='text-gray-600'>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
