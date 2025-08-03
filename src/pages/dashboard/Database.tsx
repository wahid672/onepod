import React from 'react';
import { RefreshCw, Plus, MoreHorizontal } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const Database: React.FC = () => {
  const databases = [
    {
      name: 'mylog',
      type: 'MySQL v8',
      status: 'active',
      usage: '0 GB / 1 GB',
      autoRenewal: true,
      price: 'Monthly\nRp 10.000',
      expiry: '13/08/2025\n(26 days left)'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Managed Databases</h1>
            <p className="text-gray-600 mt-1">Manage your PostgreSQL, MySQL, and MariaDB databases</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
              <Plus className="h-4 w-4 mr-2" />
              Create Database
            </button>
          </div>
        </div>

        {/* Database Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-7 gap-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
              <div>NAME</div>
              <div>STATUS</div>
              <div>USAGE</div>
              <div>AUTO RENEWAL</div>
              <div>PRICE</div>
              <div>EXPIRY</div>
              <div>ACTIONS</div>
            </div>
          </div>

          {/* Database Rows */}
          <div className="divide-y divide-gray-100">
            {databases.map((database, index) => (
              <div key={index} className="px-6 py-4">
                <div className="grid grid-cols-7 gap-4 items-center">
                  {/* Name */}
                  <div>
                    <div className="text-sm font-medium text-gray-900">{database.name}</div>
                    <div className="text-sm text-gray-500">{database.type}</div>
                  </div>

                  {/* Status */}
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {database.status}
                    </span>
                  </div>

                  {/* Usage */}
                  <div className="text-sm text-gray-900">{database.usage}</div>

                  {/* Auto Renewal */}
                  <div>
                    <div className="flex items-center">
                      <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        database.autoRenewal ? 'bg-indigo-600' : 'bg-gray-200'
                      }`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          database.autoRenewal ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-sm text-gray-900 whitespace-pre-line">{database.price}</div>

                  {/* Expiry */}
                  <div className="text-sm text-gray-900 whitespace-pre-line">{database.expiry}</div>

                  {/* Actions */}
                  <div>
                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Database;