import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start building for free
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with EasyDeploy today. No credit card required, no hidden fees.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border-2 border-indigo-200 p-8 shadow-xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-4">
                FREE
              </div>
              <p className="text-gray-600">
                Perfect for developers and small projects
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Unlimited deployments",
                "50+ application templates",
                "SSL certificates included",
                "Global CDN",
                "Community support",
                "99.9% uptime SLA"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Free
              </button>
              <Link 
                to="/templates" 
                className="w-full bg-white text-gray-700 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 border-2 border-gray-200 hover:border-gray-300 inline-block text-center"
              >
                Explore Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;