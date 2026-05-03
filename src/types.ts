/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  description: string;
}

export interface Supplier {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  location: string;
  established: number;
  businessType: string[];
  employees: string;
  rating: number;
  description: string;
  isVerified: boolean;
  certificates: string[];
}

export interface Product {
  id: string;
  name: string;
  priceRange: string;
  minOrder: string;
  category: string;
  images: string[];
  supplierId: string;
  description: string;
  specifications: Record<string, string>;
  isHot: boolean;
}

export interface Inquiry {
  id: string;
  productId?: string;
  supplierId: string;
  buyerName: string;
  buyerEmail: string;
  message: string;
  createdAt: string;
}
