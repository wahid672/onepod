import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Package, 
  Bot, 
  Database, 
  CreditCard, 
  Users, 
  Settings, 
  HelpCircle,
  User
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();

  const sidebarItems = [
    { name: 'Services', icon: Package, path: '/dashboard/services' },
    { name: 'AI', icon: Bot, path: '/dashboard/ai' },
    { name: 'Database', icon: Database, path: '/dashboard/database' },
    { name: 'Billing', icon: CreditCard, path: '/dashboard/billing' },
    { name: 'Affiliate', icon: Users, path: '/dashboard/affiliate' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
    { name: 'Support', icon: HelpCircle, path: '/dashboard/support' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">
              Easy<span className="text-indigo-600">Deploy</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className="px-3">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 mb-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex-1"></div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">User</div>
                  <div className="text-gray-500">smartappsindonesia@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;