import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Cosmetics', icon: 'Sparkles' },
  { id: '2', name: 'Clothing', icon: 'Shirt' },
  { id: '3', name: 'Accessories', icon: 'Watch' },
  { id: '4', name: 'Electronics', icon: 'Smartphone' },
  { id: '5', name: 'Home & Living', icon: 'Home' },
  { id: '6', name: 'Sports', icon: 'Zap' },
  { id: '7', name: 'Books', icon: 'Book' },
  { id: '8', name: 'Jewelry', icon: 'Gem' }
];

export const products: Product[] = [
  // Cosmetics
  {
    id: '1',
    name: 'Premium Foundation Set',
    price: 2499,
    originalPrice: 3199,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cosmetics',
    seller: 'Beauty Palace',
    rating: 4.8,
    reviews: 156,
    description: 'Complete foundation set with primer and concealer'
  },
  {
    id: '7',
    name: 'Skincare Gift Set',
    price: 3999,
    originalPrice: 5499,
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cosmetics',
    seller: 'Glow Beauty',
    rating: 4.7,
    reviews: 142,
    description: 'Complete skincare routine with natural ingredients'
  },
  {
    id: '9',
    name: 'Lipstick Collection',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/2533269/pexels-photo-2533269.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cosmetics',
    seller: 'Glamour Hub',
    rating: 4.6,
    reviews: 89,
    description: 'Set of 6 long-lasting matte lipsticks'
  },
  {
    id: '10',
    name: 'Eye Shadow Palette',
    price: 2299,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/2533271/pexels-photo-2533271.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cosmetics',
    seller: 'Beauty Palace',
    rating: 4.9,
    reviews: 203,
    description: '24-color professional eyeshadow palette'
  },
  {
    id: '11',
    name: 'Face Mask Set',
    price: 1599,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cosmetics',
    seller: 'Skin Care Pro',
    rating: 4.5,
    reviews: 67,
    description: 'Hydrating and rejuvenating face masks'
  },

  // Clothing
  {
    id: '2',
    name: 'Designer Kurta Collection',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    seller: 'Fashion Hub',
    rating: 4.6,
    reviews: 89,
    description: 'Elegant kurta with intricate embroidery work'
  },
  {
    id: '8',
    name: 'Casual Summer Dress',
    price: 2799,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    seller: 'Style Studio',
    rating: 4.6,
    reviews: 98,
    description: 'Light and comfortable summer dress for all occasions'
  },
  {
    id: '12',
    name: 'Formal Shirt Collection',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    seller: 'Gentleman Store',
    rating: 4.7,
    reviews: 134,
    description: 'Premium cotton formal shirts for office wear'
  },
  {
    id: '13',
    name: 'Traditional Shalwar Kameez',
    price: 4299,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    seller: 'Desi Threads',
    rating: 4.8,
    reviews: 176,
    description: 'Handcrafted traditional wear with modern touch'
  },
  {
    id: '14',
    name: 'Winter Jacket',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Clothing',
    seller: 'Winter Wear Co',
    rating: 4.9,
    reviews: 245,
    description: 'Warm and stylish winter jacket for cold weather'
  },

  // Accessories
  {
    id: '3',
    name: 'Luxury Watch',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories',
    seller: 'TimeKeepers',
    rating: 4.9,
    reviews: 234,
    description: 'Premium stainless steel watch with leather strap'
  },
  {
    id: '15',
    name: 'Designer Handbag',
    price: 4599,
    originalPrice: 6999,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories',
    seller: 'Bag Boutique',
    rating: 4.6,
    reviews: 112,
    description: 'Elegant leather handbag for everyday use'
  },
  {
    id: '16',
    name: 'Sunglasses Collection',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories',
    seller: 'Vision Store',
    rating: 4.5,
    reviews: 87,
    description: 'UV protection sunglasses with stylish frames'
  },
  {
    id: '17',
    name: 'Leather Belt Set',
    price: 2299,
    originalPrice: 3199,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessories',
    seller: 'Leather Craft',
    rating: 4.7,
    reviews: 156,
    description: 'Genuine leather belts in multiple colors'
  },

  // Electronics
  {
    id: '4',
    name: 'Wireless Earbuds Pro',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    seller: 'TechWorld',
    rating: 4.7,
    reviews: 178,
    description: 'Noise cancelling wireless earbuds with long battery life'
  },
  {
    id: '18',
    name: 'Smartphone Case Collection',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    seller: 'Mobile Accessories',
    rating: 4.4,
    reviews: 234,
    description: 'Protective cases for all smartphone models'
  },
  {
    id: '19',
    name: 'Bluetooth Speaker',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    seller: 'Audio Tech',
    rating: 4.8,
    reviews: 189,
    description: 'Portable wireless speaker with premium sound quality'
  },
  {
    id: '20',
    name: 'Power Bank 20000mAh',
    price: 2799,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    seller: 'Power Solutions',
    rating: 4.6,
    reviews: 298,
    description: 'High capacity power bank with fast charging'
  },

  // Home & Living
  {
    id: '5',
    name: 'Elegant Table Lamp',
    price: 4299,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/1000057/pexels-photo-1000057.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Living',
    seller: 'Home Decor Plus',
    rating: 4.5,
    reviews: 67,
    description: 'Modern table lamp with adjustable brightness'
  },
  {
    id: '21',
    name: 'Decorative Wall Art',
    price: 1899,
    originalPrice: 2799,
    image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Living',
    seller: 'Art Gallery',
    rating: 4.7,
    reviews: 123,
    description: 'Beautiful wall art to enhance your living space'
  },
  {
    id: '22',
    name: 'Kitchen Utensil Set',
    price: 3299,
    originalPrice: 4599,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Living',
    seller: 'Kitchen Pro',
    rating: 4.8,
    reviews: 167,
    description: 'Complete stainless steel kitchen utensil set'
  },
  {
    id: '23',
    name: 'Bed Sheet Set',
    price: 2599,
    originalPrice: 3599,
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Living',
    seller: 'Comfort Home',
    rating: 4.6,
    reviews: 89,
    description: 'Premium cotton bed sheets with pillow covers'
  },

  // Sports
  {
    id: '6',
    name: 'Sports Running Shoes',
    price: 6499,
    originalPrice: 8999,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sports',
    seller: 'SportsZone',
    rating: 4.8,
    reviews: 293,
    description: 'Comfortable running shoes with advanced cushioning'
  },
  {
    id: '24',
    name: 'Yoga Mat Premium',
    price: 1999,
    originalPrice: 2799,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlT0gbmQQejTEpuFM_gZGtdawzHq-BEUPMOA&s',
    category: 'Sports',
    seller: 'Fitness First',
    rating: 4.7,
    reviews: 145,
    description: 'Non-slip yoga mat for all fitness activities'
  },
  {
    id: '25',
    name: 'Gym Equipment Set',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sports',
    seller: 'Home Gym',
    rating: 4.9,
    reviews: 234,
    description: 'Complete home gym equipment for strength training'
  },
  {
    id: '26',
    name: 'Cricket Bat Professional',
    price: 4599,
    originalPrice: 6999,
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sports',
    seller: 'Cricket Store',
    rating: 4.8,
    reviews: 178,
    description: 'Professional grade cricket bat for serious players'
  },

  // Books
  {
    id: '27',
    name: 'Programming Books Collection',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Books',
    seller: 'Knowledge Hub',
    rating: 4.9,
    reviews: 267,
    description: 'Complete collection of programming and tech books'
  },
  {
    id: '28',
    name: 'Islamic Books Set',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Books',
    seller: 'Islamic Library',
    rating: 4.8,
    reviews: 189,
    description: 'Collection of authentic Islamic literature'
  },
  {
    id: '29',
    name: 'Children Story Books',
    price: 1799,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Books',
    seller: 'Kids Corner',
    rating: 4.7,
    reviews: 123,
    description: 'Educational and entertaining books for children'
  },

  // Jewelry
  {
    id: '30',
    name: 'Gold Plated Jewelry Set',
    price: 5999,
    originalPrice: 8999,
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Jewelry',
    seller: 'Golden Touch',
    rating: 4.6,
    reviews: 156,
    description: 'Elegant gold plated necklace and earring set'
  },
  {
    id: '31',
    name: 'Silver Ring Collection',
    price: 2999,
    originalPrice: 4299,
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Jewelry',
    seller: 'Silver Craft',
    rating: 4.7,
    reviews: 98,
    description: 'Handcrafted silver rings in various designs'
  },
  {
    id: '32',
    name: 'Pearl Bracelet',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Jewelry',
    seller: 'Pearl Paradise',
    rating: 4.8,
    reviews: 134,
    description: 'Genuine pearl bracelet for special occasions'
  }
];