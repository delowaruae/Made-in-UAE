/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Mail, MapPin, Star, MessageSquare, ChevronRight, Share2, Heart } from 'lucide-react';
import { products, suppliers } from '../data/mockData';
import { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { toggleProduct, isProductSaved } = useWishlist();
  const product = products.find(p => p.id === id);
  const supplier = suppliers.find(s => s.id === product?.supplierId);
  const [activeImage, setActiveImage] = useState(product?.images[0] || '');

  if (!product || !supplier) {
    return <div className="p-20 text-center">Product not found.</div>;
  }

  const isSaved = isProductSaved(product.id);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to={`/category/${product.category}`} className="hover:text-blue-600">Category</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="truncate font-medium text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Gallery */}
        <div className="lg:col-span-2 space-y-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="aspect-[4/3] w-full">
              <img src={activeImage} alt={product.name} className="h-full w-full object-contain p-8" />
            </div>
            <div className="flex gap-4 p-4 border-t border-gray-50">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-all ${activeImage === img ? 'border-blue-600 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Description & Specs */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
            <p className="mt-4 leading-relaxed text-gray-600">{product.description}</p>
            
            <h3 className="mt-10 font-bold text-gray-900">Specifications</h3>
            <div className="mt-4 grid grid-cols-1 gap-y-1 sm:grid-cols-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b border-gray-50 py-3">
                  <span className="w-1/3 text-sm font-medium text-gray-500">{key}</span>
                  <span className="w-2/3 text-sm font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Pricing & Supplier Card */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex gap-2">
                <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100"><Share2 className="h-5 w-5" /></button>
                <button 
                  onClick={() => toggleProduct(product.id)}
                  className={`rounded-full p-2 transition-colors ${isSaved ? 'text-red-700 bg-red-50' : 'text-gray-400 hover:bg-gray-100'}`}
                >
                  <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">{product.priceRange}</span>
                <span className="text-sm text-gray-400">/ Unit (Excl. VAT)</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700">
                <ShieldCheck className="h-5 w-5" />
                Minimum Order Quantity: {product.minOrder}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full rounded-full bg-red-700 py-4 font-bold text-white shadow-lg transition-all hover:bg-red-800 active:scale-95">
                Inquiry Now
              </button>
              <button className="w-full rounded-full border border-slate-200 py-4 font-bold text-slate-700 hover:bg-slate-50">
                Live Chat
              </button>
            </div>
          </div>

          {/* Supplier Info */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src={supplier.logo} alt={supplier.name} className="h-14 w-14 rounded-lg object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 group">
                  <Link to={`/supplier/${supplier.id}`} className="hover:text-blue-600 flex items-center gap-1">
                    {supplier.name} <ChevronRight className="h-4 w-4" />
                  </Link>
                </h4>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <span className="ml-1 font-bold">5.0</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="h-4 w-4" /> {supplier.location}
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MessageSquare className="h-4 w-4" /> Responds in 2h
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {supplier.certificates.slice(0, 2).map(c => (
                <span key={c} className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                  {c}
                </span>
              ))}
            </div>
            
            <button className="mt-6 w-full rounded-lg border border-blue-100 bg-blue-50 py-3 text-sm font-bold text-blue-900 hover:bg-blue-100">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
