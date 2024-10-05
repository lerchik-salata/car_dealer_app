'use client';

import React from 'react';
import Link from 'next/link';

interface NextButtonProps {
  isFormComplete: boolean;
  href: string;
}

const NextButton: React.FC<NextButtonProps> = ({ isFormComplete, href }) => {
  return (
    <Link href={href} passHref>
      <button
        className={`px-6 py-3 border-2 text-red-700 font-bold rounded transition-colors duration-300 ${
          isFormComplete
            ? 'border-red-700 bg-transparent hover:bg-red-700 hover:text-white'
            : 'border-gray-700 text-white bg-gray-700 cursor-not-allowed'
        }`}
        disabled={!isFormComplete}
      >
        Next
      </button>
    </Link>
  );
};

export default NextButton;
