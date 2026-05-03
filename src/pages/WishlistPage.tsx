/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Trash2, ShoppingBag, Building2, ChevronRight, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { products, suppliers } from '../data/mockData';

export default function WishlistPage() {
  const { savedProducts, savedSuppliers, toggleProduct, toggleSupplier } = useWishlist();
  const [activeTab, setActiveTab] = useState<'products' | 'suppliers'>('products');

  const filteredProducts = products.filter(p => savedProducts.includes(p.id));
  const filteredSuppliers = suppliers.filter(s => savedSuppliers.includes(s.id));

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">My Sourcing Wishlist</h1>
          <p className="mt-2 text-slate-400 text-sm uppercase tracking-widest font-bold">Manage your saved UAE manufacturers and products</p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('products')}
              className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === 'products' ? 'text-red-700 border-b-2 border-red-700 bg-slate-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Saved Products ({savedProducts.length})
            </button>
            <button
              onClick={() => setActiveTab('suppliers')}
              className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === 'suppliers' ? 'text-red-700 border-b-2 border-red-700 bg-slate-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Saved Suppliers ({savedSuppliers.length})
            </button>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'products' ? (
                <motion.div
                  key="products"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map(product => (
                        <div key={product.id} className="group relative bg-white border border-slate-200 rounded p-4 hover:shadow-lg transition-all">
                          <button 
                            onClick={() => toggleProduct(product.id)}
                            className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-md text-red-700 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <Link to={`/product/${product.id}`}>
                            <div className="aspect-square bg-slate-50 rounded mb-4 overflow-hidden border border-slate-100">
                              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                            </div>
                            <h3 className="text-xs font-black text-slate-800 uppercase tracking-tight line-clamp-2 h-8 mb-2 group-hover:text-red-700">
                              {product.name}
                            </h3>
                            <div className="text-red-700 font-black text-lg tracking-tighter">
                              {product.priceRange}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">
                              Min. Order: {product.minOrder}
                            </div>
                          </Link>
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <Link to="/inquiry" className="block w-full py-2 bg-slate-800 text-white text-[10px] font-black uppercase text-center rounded tracking-[0.2em] hover:bg-slate-700">
                              Inquiry Now
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <EmptyState 
                      icon={<ShoppingBag className="w-12 h-12" />}
                      title="No Saved Products"
                      description="You haven't saved any products to your wishlist yet. Explore our UAE product directory."
                      actionLink="/"
                      actionText="Start Sourcing"
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="suppliers"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {filteredSuppliers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredSuppliers.map(supplier => (
                        <div key={supplier.id} className="group relative bg-white border border-slate-200 rounded p-6 hover:border-red-200 transition-all">
                          <button 
                            onClick={() => toggleSupplier(supplier.id)}
                            className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-md text-red-700 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <div className="flex gap-6">
                            <div className="w-24 h-24 bg-slate-50 rounded border border-slate-100 overflow-hidden flex-shrink-0">
                              <img src={supplier.logo} alt={supplier.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="flex-1 pr-10">
                              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide group-hover:text-red-700">{supplier.name}</h3>
                              <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">
                                {supplier.location} • Est. {supplier.established}
                              </p>
                              <div className="mt-4 flex gap-2">
                                {supplier.certificates.slice(0, 3).map(c => (
                                  <span key={c} className="text-[8px] font-black text-slate-400 border border-slate-100 px-1.5 py-0.5 uppercase">
                                    {c}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                            <Link to={`/supplier/${supplier.id}`} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-red-700 flex items-center gap-1">
                              Visit Profile <ArrowRight className="w-3 h-3" />
                            </Link>
                            <span className="text-[10px] font-black text-red-700 uppercase italic">Verified Manufacturer</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <EmptyState 
                      icon={<Building2 className="w-12 h-12" />}
                      title="No Saved Suppliers"
                      description="Follow UAE manufacturers and industrial suppliers to keep track of their latest products."
                      actionLink="/suppliers"
                      actionText="Browse Suppliers"
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ icon, title, description, actionLink, actionText }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  actionLink: string, 
  actionText: string 
}) {
  return (
    <div className="flex flex-col items-center text-center py-20 max-w-sm mx-auto">
      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter">{title}</h3>
      <p className="text-xs text-slate-500 mt-3 leading-relaxed font-bold uppercase tracking-tight">
        {description}
      </p>
      <Link 
        to={actionLink} 
        className="mt-10 px-10 py-3 bg-red-700 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded shadow-lg hover:bg-red-800 transition-all"
      >
        {actionText}
      </Link>
    </div>
  );
}
