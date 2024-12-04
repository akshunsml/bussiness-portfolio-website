import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Tomorrow's Foundation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Professional excavation services with over 25 years of industry expertise
          </p>
          <a
            href="#contact"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;