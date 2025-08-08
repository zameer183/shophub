import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import LanguageSwitcher from '../components/LanguageSwitcher';

const HomePage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.seller.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Language Switcher */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{t('featuredProducts')}</h2>
          <LanguageSwitcher />
        </div>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 ${
            isRTL ? 'right-3' : 'left-3'
          }`} size={20} />
          <input
            type="text"
            placeholder={t('searchProducts')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full bg-gray-100 rounded-lg py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-4 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-2">Welcome to ShopHub</h2>
        <p className="text-blue-100">Discover amazing products from trusted sellers</p>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;