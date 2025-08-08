import React, { useState } from 'react';
import { User, Package, Info, LogIn, UserPlus, Settings, Heart, HelpCircle, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const ProfilePage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const profileMenuItems = [
    { icon: User, label: t('myProfile'), id: 'profile' },
    { icon: Package, label: t('myOrders'), id: 'orders' },
    { icon: Heart, label: 'Wishlist', id: 'wishlist' },
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: HelpCircle, label: 'Help & Support', id: 'help' },
    { icon: Shield, label: 'Privacy Policy', id: 'privacy' },
    { icon: Info, label: t('aboutSite'), id: 'about' }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleBackToProfile = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  // Show Login Page
  if (showLogin) {
    return (
      <LoginPage
        onBack={handleBackToProfile}
        onLogin={handleLogin}
        onSwitchToRegister={handleShowRegister}
      />
    );
  }

  // Show Register Page
  if (showRegister) {
    return (
      <RegisterPage
        onBack={handleBackToProfile}
        onRegister={handleRegister}
        onSwitchToLogin={handleShowLogin}
      />
    );
  }

  // Guest Profile View
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-white shadow-sm p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{t('profile')}</h2>
        </div>

        <div className="p-4">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white mb-6">
            <h3 className="text-xl font-bold mb-2">Welcome to ShopHub</h3>
            <p className="text-blue-100 mb-4">Join us to get personalized recommendations and track your orders</p>
          </div>

          {/* Auth Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleShowLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <LogIn size={20} />
              <span className="font-medium">{t('login')}</span>
            </button>

            <button
              onClick={handleShowRegister}
              className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <UserPlus size={20} />
              <span className="font-medium">{t('register')}</span>
            </button>
          </div>

          {/* Guest Menu */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-4 border-b">
              <h4 className="font-semibold text-gray-900">Quick Access</h4>
            </div>
            <div className="space-y-1">
              {profileMenuItems.filter(item => ['help', 'privacy', 'about'].includes(item.id)).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center space-x-3"
                  >
                    <Icon size={20} className="text-gray-600" />
                    <span className="text-gray-900">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Logged In Profile View
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-900">{t('profile')}</h2>
      </div>

      <div className="p-4">
        {/* User Profile Card */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ahmad Ali</h3>
              <p className="text-gray-500">ahmad.ali@example.com</p>
              <p className="text-sm text-green-600">✓ Verified Account</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">15</div>
            <div className="text-sm text-gray-600">Orders</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">Delivered</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">28</div>
            <div className="text-sm text-gray-600">Wishlist</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="space-y-1">
            {profileMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
                >
                  <Icon size={20} className="text-gray-600" />
                  <span className="text-gray-900 flex-1">{item.label}</span>
                  <span className="text-gray-400">›</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;