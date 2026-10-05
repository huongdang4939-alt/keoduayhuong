export interface ProductVariant {
  weight: string;
  weightCategory: '250g' | '300g' | '400g' | '500g';
  image: string;
  shortDesc?: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  flavor: string;
  weight: string;
  weightCategory: '250g' | '300g' | '400g' | '500g';
  image: string;
  description: string;
  shortDesc?: string;
  ingredients: string[];
  features: string[];
  highlights?: string[];
  tasteProfile?: string;
  shelfLife?: string;
  storage?: string;
  packaging?: string;
  isSpecialty?: boolean; // e.g. Kẹo dừa sáp
  badge?: string;
  variants?: ProductVariant[];
}

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  customerType: 'wholesale' | 'retail' | 'distributor';
  productInterest: string;
  message: string;
}
