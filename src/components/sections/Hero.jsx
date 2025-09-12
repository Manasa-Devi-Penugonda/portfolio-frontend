import React, { useEffect, useState } from 'react';
import { ChevronDown, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Status Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            {data.availability}
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            <span className="block">{data.name.split(' ')[0]}</span>
            <span className="block font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              {data.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            {data.title}
          </div>
          
          <div className="text-lg text-emerald-600 font-medium mb-8">
            {data.subtitle}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            {data.description}
          </p>

          {/* Location & Status */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2" />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={18} className="mr-2" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              onClick={() => scrollToNext()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('mailto:manasadevipenugonda18@gmail.com')}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNext}
            className="text-gray-400 hover:text-emerald-600 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;