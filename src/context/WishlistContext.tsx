/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

interface WishlistContextType {
  savedProducts: string[];
  savedSuppliers: string[];
  toggleProduct: (productId: string) => void;
  toggleSupplier: (supplierId: string) => void;
  isProductSaved: (productId: string) => boolean;
  isSupplierSaved: (supplierId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [savedProducts, setSavedProducts] = useState<string[]>(() => {
    const saved = localStorage.getItem('wishlist_products');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedSuppliers, setSavedSuppliers] = useState<string[]>(() => {
    const saved = localStorage.getItem('wishlist_suppliers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist_products', JSON.stringify(savedProducts));
  }, [savedProducts]);

  useEffect(() => {
    localStorage.setItem('wishlist_suppliers', JSON.stringify(savedSuppliers));
  }, [savedSuppliers]);

  const toggleProduct = (productId: string) => {
    setSavedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const toggleSupplier = (supplierId: string) => {
    setSavedSuppliers(prev => 
      prev.includes(supplierId) 
        ? prev.filter(id => id !== supplierId) 
        : [...prev, supplierId]
    );
  };

  const isProductSaved = (productId: string) => savedProducts.includes(productId);
  const isSupplierSaved = (supplierId: string) => savedSuppliers.includes(supplierId);

  return (
    <WishlistContext.Provider value={{ 
      savedProducts, 
      savedSuppliers, 
      toggleProduct, 
      toggleSupplier,
      isProductSaved,
      isSupplierSaved
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
