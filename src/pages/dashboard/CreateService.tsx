import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Cloud } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const CreateService: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      name: "Activepieces",
      description: "Automation Alternative to Zapier, easier than n8n",
      price: "Rp 60.000/month",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "Flowise",
      description: "AI Visual Advance Builder for Chatbot",
      price: "Rp 30.000/month",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "Go WhatsApp by Aldinokemal",
      description: "Simple, Light, Easy WhatsApp Unofficial API",
      price: "Rp 15.000/month",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "n8n",
      description: "Workflow automation tool with 200+ integrations",
      price: "Rp 45.000/month",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "WAHA Plus Cloud",
      description: "Self-hosted WhatsApp HTTP API for unlimited sessions",
      price: "Rp 25.000/month",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />
    }
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard/services"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add Service</h1>
          <p className="text-gray-600 mt-1">Choose a service template to add to your account</p>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search service categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500">Starts from</p>
                <p className="text-lg font-semibold text-gray-900">{service.price}</p>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center">
                <Cloud className="h-4 w-4 mr-2" />
                Deploy
              </button>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching your search criteria</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CreateService;