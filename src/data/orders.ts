import { Order } from '../types';

export const sampleOrders: Order[] = [
  {
    id: 'ORD001',
    items: [
      {
        id: '1',
        name: 'Premium Foundation Set',
        price: 2499,
        image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Cosmetics',
        seller: 'Beauty Palace',
        rating: 4.8,
        reviews: 156,
        description: 'Complete foundation set with primer and concealer',
        quantity: 1
      }
    ],
    total: 2499,
    status: 'delivered',
    date: '2024-01-15',
    seller: 'Beauty Palace'
  },
  {
    id: 'ORD002',
    items: [
      {
        id: '3',
        name: 'Luxury Watch',
        price: 8999,
        image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Accessories',
        seller: 'TimeKeepers',
        rating: 4.9,
        reviews: 234,
        description: 'Premium stainless steel watch with leather strap',
        quantity: 1
      }
    ],
    total: 8999,
    status: 'shipped',
    date: '2024-01-18',
    seller: 'TimeKeepers'
  },
  {
    id: 'ORD003',
    items: [
      {
        id: '4',
        name: 'Wireless Earbuds Pro',
        price: 5999,
        image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Electronics',
        seller: 'TechWorld',
        rating: 4.7,
        reviews: 178,
        description: 'Noise cancelling wireless earbuds',
        quantity: 2
      }
    ],
    total: 11998,
    status: 'processing',
    date: '2024-01-20',
    seller: 'TechWorld'
  }
];