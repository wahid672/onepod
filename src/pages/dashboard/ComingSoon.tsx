import React from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, Sparkles } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const ComingSoon: React.FC = () => {
  const location = useLocation();
  
  // Extract page name from pathname
  const pageName = location.pathname.split('/').pop()?.replace('-', ' ') || 'Page';
  const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center max-w-md mx-auto">
          {/* Animated Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-indigo-100 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="h-12 w-12 text-indigo-600" />
            </div>
            
            {/* Floating sparkles animation */}
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="h-6 w-6 text-yellow-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-bounce delay-300">
              <Sparkles className="h-4 w-4 text-pink-400" />
            </div>
            <div className="absolute top-1/2 -right-4 animate-bounce delay-500">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {capitalizedPageName} Coming Soon!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Kami sedang mengembangkan fitur {capitalizedPageName} yang menakjubkan untuk Anda. 
            Tetap pantau untuk update terbaru!
          </p>

          {/* Animated progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>

          <div className="text-sm text-gray-500 mb-8">
            Progress: 75% Complete
          </div>

          {/* Call to action */}
          <div className="space-y-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
              Notify Me When Ready
            </button>
            
            <p className="text-xs text-gray-400">
              Dapatkan notifikasi ketika fitur ini sudah tersedia
            </p>
          </div>

          {/* Animated dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComingSoon;