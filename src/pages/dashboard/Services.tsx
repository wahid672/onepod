import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Plus } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const Services: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Services</h1>
            <p className="text-gray-600 mt-1">Manage your managed services</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
            <Link 
              to="/dashboard/services/create"
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Link>
          </div>
        </div>

        {/* Services Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-7 gap-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
              <div>NAME</div>
              <div>TYPE</div>
              <div>STATUS</div>
              <div>PLAN</div>
              <div>AUTO RENEWAL</div>
              <div>EXPIRY</div>
              <div>ACTIONS</div>
            </div>
          </div>

          {/* Empty State */}
          <div className="px-6 py-16 text-center">
            <div className="text-gray-500 text-lg">
              No services found matching your criteria
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Services;