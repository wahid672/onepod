import React, { useState } from 'react';
import { Gift, Plus, CreditCard, TrendingDown, TrendingUp, Download, CheckCircle, XCircle, X } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const Billing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [showAddCreditModal, setShowAddCreditModal] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');
  const [creditAmount, setCreditAmount] = useState('0');

  const transactions = [
    {
      date: '7/18/2025',
      description: 'Topup $0.0515 - AI Balance',
      type: 'usage',
      amount: 'Rp -835 credits',
      color: 'text-red-600'
    },
    {
      date: '7/13/2025',
      description: 'Purchase Managed DB - mylog 1GB (Monthly)',
      type: 'usage',
      amount: 'Rp -10.000 credits',
      color: 'text-red-600'
    },
    {
      date: '7/13/2025',
      description: 'Credit purchase: 10000 credits',
      type: 'purchase',
      amount: '+Rp 10.000 credits',
      color: 'text-green-600'
    },
    {
      date: '7/7/2025',
      description: 'Topup $0.01 - AI Balance',
      type: 'usage',
      amount: 'Rp -163 credits',
      color: 'text-red-600'
    },
    {
      date: '7/7/2025',
      description: 'Credit purchase: 1000 credits',
      type: 'purchase',
      amount: '+Rp 1.000 credits',
      color: 'text-green-600'
    }
  ];

  const payments = [
    {
      date: '7/13/2025',
      amount: 'Rp 10.000',
      credits: '10,000 credits',
      status: 'completed'
    },
    {
      date: '7/7/2025',
      amount: 'Rp 1.000',
      credits: '1,000 credits',
      status: 'completed'
    },
    {
      date: '6/12/2025',
      amount: 'Rp 50.000',
      credits: '50,000 credits',
      status: 'failed'
    },
    {
      date: '6/4/2025',
      amount: 'Rp 15.000',
      credits: '15,000 credits',
      status: 'completed'
    }
  ];

  const handleRedeemClick = () => {
    setShowRedeemModal(true);
  };

  const handleAddCreditClick = () => {
    setShowAddCreditModal(true);
  };

  const handleCloseModal = () => {
    setShowRedeemModal(false);
    setVoucherCode('');
  };

  const handleCloseAddCreditModal = () => {
    setShowAddCreditModal(false);
    setCreditAmount('0');
  };

  const handleRedeemSubmit = () => {
    // Handle redeem logic here
    console.log('Redeeming voucher:', voucherCode);
    handleCloseModal();
  };

  const handleAddCreditSubmit = () => {
    // Handle add credit logic here
    console.log('Adding credit:', creditAmount);
    handleCloseAddCreditModal();
  };

  const handleQuickAmount = (amount: string) => {
    setCreditAmount(amount.replace('Rp ', '').replace('.', ''));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
            <p className="text-gray-600 mt-1">Manage your balance and view transaction history</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleRedeemClick}
              className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              <Gift className="h-4 w-4 mr-2" />
              Redeem
            </button>
            <button 
              onClick={handleAddCreditClick}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Credit
            </button>
          </div>
        </div>

        {/* Current Credits */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
              <CreditCard className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Credits</p>
              <p className="text-3xl font-bold text-gray-900">Rp 2</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('transactions')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'transactions'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Transactions</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'payments'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Payments</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'transactions' ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="pb-3">DATE</th>
                      <th className="pb-3">DESCRIPTION</th>
                      <th className="pb-3">TYPE</th>
                      <th className="pb-3 text-right">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-3">
                    {transactions.map((transaction, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-3 text-sm text-gray-900">{transaction.date}</td>
                        <td className="py-3 text-sm text-gray-900">{transaction.description}</td>
                        <td className="py-3">
                          <div className="flex items-center space-x-1">
                            {transaction.type === 'usage' ? (
                              <>
                                <TrendingDown className="h-4 w-4 text-red-500" />
                                <span className="text-sm text-red-600">Usage</span>
                              </>
                            ) : (
                              <>
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-green-600">Purchase</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className={`py-3 text-sm text-right font-medium ${transaction.color}`}>
                          {transaction.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="pb-3">DATE</th>
                      <th className="pb-3">AMOUNT</th>
                      <th className="pb-3">CREDITS</th>
                      <th className="pb-3">STATUS</th>
                      <th className="pb-3">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-3">
                    {payments.map((payment, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-3 text-sm text-gray-900">{payment.date}</td>
                        <td className="py-3 text-sm text-gray-900 font-medium">{payment.amount}</td>
                        <td className="py-3 text-sm text-gray-900">{payment.credits}</td>
                        <td className="py-3">
                          <div className="flex items-center space-x-1">
                            {payment.status === 'completed' ? (
                              <>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-green-600 capitalize">Completed</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span className="text-sm text-red-600 capitalize">Failed</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="py-3">
                          <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors duration-200">
                            <Download className="h-4 w-4" />
                            <span>Invoice</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Redeem Modal */}
      {showRedeemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Redeem Voucher</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Voucher Code Input */}
            <div className="mb-6">
              <label htmlFor="voucherCode" className="block text-sm font-medium text-gray-700 mb-2">
                Voucher Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="voucherCode"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  placeholder="ENTER VOUCHER CODE"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Gift className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Enter your voucher code to redeem credits</p>
            </div>

            {/* Security Verification */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Security Verification</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600">Success!</span>
                  <div className="ml-auto">
                    <div className="flex items-center space-x-1">
                      <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">CF</span>
                      </div>
                      <span className="text-xs text-gray-500">CLOUDFLARE</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Please complete the security verification to proceed with redeeming.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex space-x-3">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleRedeemSubmit}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Redeem
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Credit Modal */}
      {showAddCreditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Top Up Balance</h2>
              <button
                onClick={handleCloseAddCreditModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label htmlFor="creditAmount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount (Rp)
              </label>
              <input
                type="number"
                id="creditAmount"
                value={creditAmount}
                onChange={(e) => setCreditAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="0"
                min="0"
              />
            </div>

            {/* Quick Amount Buttons */}
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleQuickAmount('Rp 50.000')}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Rp 50.000
                </button>
                <button
                  onClick={() => handleQuickAmount('Rp 100.000')}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Rp 100.000
                </button>
                <button
                  onClick={() => handleQuickAmount('Rp 200.000')}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Rp 200.000
                </button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex space-x-3">
              <button
                onClick={handleCloseAddCreditModal}
                className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCreditSubmit}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Top Up
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Billing;