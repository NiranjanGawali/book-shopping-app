import React, { useState } from 'react';

export const Accordion = ({ faq }) => {
  const { answer, question } = faq;
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2 id='accordion-flush-heading-1'>
        <button
          type='button'
          className='text-lg flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
          data-accordion-target='#accordion-flush-body-1'
          aria-expanded='true'
          aria-controls='accordion-flush-body-1'
          onClick={() => setShow(!show)}
        >
          <span className='text-xl text-slate-900 dark:text-white'>
            {question}
          </span>
          <svg
            className={`w-6 h-6 transform ${show ? 'rotate-180' : ''}`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </h2>
      {/* {show && (
        <div
          id='accordion-flush-body-1'
          className='transition-all duration-1000 ease-in-out'
          aria-labelledby='accordion-flush-heading-1'
        >
          <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
            <p className='text-lg mb-2 text-gray-500 dark:text-gray-400'>
              {answer}
            </p>
          </div>
        </div>
      )} */}
      <div
        className={`transition-max-h ease-in-out duration-300 overflow-hidden max-h-0 ${
          show ? 'max-h-screen' : ''
        }`}
      >
        <div className='py-3 border-b border-gray-200 dark:border-gray-700'>
          <p className='text-lg mb-2 text-gray-500 dark:text-gray-400'>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
