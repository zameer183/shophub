import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { categories, products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import * as Icons from 'lucide-react';

const CategoriesPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : <Icons.Package size={24} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Sticky Category Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-30">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('categories')}</h2>
          
          {/* Categories Horizontal Scroll */}
          <div className="flex space-x-3 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('allCategories')}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Grid (Mobile) */}
      <div className="p-4 md:hidden">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-all flex flex-col items-center space-y-2 ${
                selectedCategory === category.name ? 'border-blue-500 bg-blue-50' : ''
              }`}
            >
              <div className={`p-3 rounded-full ${
                selectedCategory === category.name ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {getIcon(category.icon)}
              </div>
              <span className="font-medium text-gray-900">{category.name}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        {selectedCategory && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {selectedCategory} ({filteredProducts.length} products)
            </h3>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;