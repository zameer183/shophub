export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  seller: string;
  rating: number;
  reviews: number;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  seller: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export type Language = 'en' | 'ur' | 'roman';

export interface Translations {
  [key: string]: {
    en: string;
    ur: string;
    roman: string;
  };
}