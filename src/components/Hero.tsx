import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 10,000+ developers worldwide
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Deploy your App
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              in 15 Seconds!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your development workflow with our lightning-fast deployment platform. 
            From code to production in seconds, not hours.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleGetStarted}
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <Link 
              to="/templates" 
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 inline-flex items-center"
            >
              Explore Templates
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15s</div>
              <div className="text-gray-300">Average Deploy Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Ready Templates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;