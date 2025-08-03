import React from 'react';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const Support: React.FC = () => {
  const handleEmailSupport = () => {
    window.open('mailto:smartappsindonesia@gmail.com', '_blank');
  };

  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/6281540983390', '_blank');
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <HelpCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Support</h1>
            <p className="text-gray-600 mt-1">Get help and support for your EasyDeploy services</p>
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Support */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
                <p className="text-gray-600 text-sm">Send us an email for detailed assistance</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Email:</p>
              <p className="text-gray-900 font-medium">smartappsindonesia@gmail.com</p>
            </div>
            
            <button
              onClick={handleEmailSupport}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Send Email</span>
            </button>
          </div>

          {/* WhatsApp Support */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">WhatsApp Support</h3>
                <p className="text-gray-600 text-sm">Chat with us directly on WhatsApp</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">WhatsApp:</p>
              <p className="text-gray-900 font-medium">+62815-4098-3390</p>
            </div>
            
            <button
              onClick={handleWhatsAppSupport}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Before contacting support</h3>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Please include your service ID or name when reporting issues</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Describe the problem in detail with steps to reproduce</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Include any error messages you're seeing</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Let us know what you were trying to accomplish</span>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Support;