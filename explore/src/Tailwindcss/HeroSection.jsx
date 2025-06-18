import React from 'react';

const HeroSection = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-blue-700 mt-4">
        Tailwind CSS Hero Section
      </h2>
      <div className="bg-gray-100 py-20 mt-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-600 mb-8">
            This is a hero section example using React and Tailwind CSS.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
