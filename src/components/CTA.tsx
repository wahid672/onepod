import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Join thousands of developers
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to deploy your
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              next big idea?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who trust EasyDeploy to power their applications. 
            Start building today, completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleGetStarted}
              className="group bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 flex items-center"
            >
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <Link 
              to="/templates" 
              className="group bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/50 inline-flex items-center backdrop-blur-sm"
            >
              Browse Templates
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              No credit card required • Free forever • Deploy in seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;