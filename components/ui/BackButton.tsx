// components/BackButton.tsx

'use client'; // Mark this component as client-side

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

const BackButton = () => {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <button
      onClick={() => router.back()} // Navigate back to the previous page
      className="absolute top-6 left-6 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
    >
      &#8592; Back
    </button>
  );
};

export default BackButton;
