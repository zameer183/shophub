import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Star } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';

const ExplorePage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  const trendingSearches = ['Foundation', 'Kurta', 'Watch', 'Earbuds', 'Shoes'];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Search Header */}
      <div className="bg-white shadow-sm p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('explore')}</h2>
        
        {/* Search Bar */}
        <div className="relative mb-4">
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

        {/* Sort and Filter */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
          
          <div className="text-sm text-gray-600">
            {filteredProducts.length} results
          </div>
        </div>

        {/* Trending Searches */}
        {!searchTerm && (
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp size={16} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Trending Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchTerm(term)}
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="p-4">
        {searchTerm && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Search results for "{searchTerm}"
            </h3>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No products found for "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Featured Products when no search */}
        {!searchTerm && (
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="text-yellow-500" size={20} />
              <h3 className="text-lg font-semibold text-gray-900">Featured Products</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;