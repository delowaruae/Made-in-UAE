/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Truck, BarChart3, Globe2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories, products, suppliers } from '../data/mockData';
import { useWishlist } from '../context/WishlistContext';

export default function Home() {
  const { toggleProduct, isProductSaved } = useWishlist();

  return (
    <div className="space-y-12 pb-20 bg-slate-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Hero Card */}
          <div className="relative col-span-1 lg:col-span-2 min-h-[350px] overflow-hidden rounded bg-slate-900 p-10 flex flex-col justify-center">
            <div className="absolute top-0 right-0 h-full w-64 bg-red-700 -skew-x-12 translate-x-24 opacity-20 pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <span className="text-red-500 font-black tracking-[0.2em] text-[10px] uppercase mb-4 block">
                Featured Sourcing Hub
              </span>
              <h1 className="text-white text-4xl lg:text-5xl font-light mb-6 leading-tight">
                UAE Manufacturing<br />
                <span className="font-black italic uppercase tracking-tighter">Excellence 2024</span>
              </h1>
              <div className="flex gap-4">
                <button className="bg-white text-slate-900 px-8 py-3 text-xs font-bold uppercase rounded-sm shadow-xl hover:bg-slate-100 transition-all">
                  Source Now
                </button>
                <button className="border border-white/30 text-white px-8 py-3 text-xs font-bold uppercase rounded-sm hover:bg-white/10 transition-all">
                  Register
                </button>
              </div>
            </div>
          </div>

          {/* Side Call to Action */}
          <div className="flex flex-col items-center text-center bg-white border border-slate-200 rounded p-8">
            <div className="w-16 h-16 bg-slate-100 rounded-full mb-4 flex items-center justify-center text-slate-400">
              <Globe2 className="w-8 h-8" />
            </div>
            <h2 className="text-sm font-black text-slate-800 uppercase tracking-wide">Verified Buyers Only</h2>
            <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
              Access 12,000+ UAE Manufacturers & wholesale factory direct prices with full ICV certification support.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 w-full text-center">
              <div>
                <div className="text-xl font-black text-red-700 tracking-tighter">12k+</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase">Suppliers</div>
              </div>
              <div>
                <div className="text-xl font-black text-red-700 tracking-tighter">500k+</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase">Products</div>
              </div>
            </div>
            <button className="mt-auto w-full py-3 bg-slate-800 text-white text-[11px] font-bold uppercase tracking-widest rounded hover:bg-slate-700 transition-colors">
              Quick Quote
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges - Compact */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 bg-white border border-slate-200 rounded p-6 shadow-sm">
          <div className="flex items-center gap-4 border-r border-slate-100 last:border-0 pr-4">
            <ShieldCheck className="h-6 w-6 text-red-700" />
            <div className="text-[10px] uppercase tracking-wider">
              <h4 className="font-black text-slate-800">Verified Sellers</h4>
              <p className="text-slate-400">Audited Profiles</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-r border-slate-100 last:border-0 pr-4">
            <Truck className="h-6 w-6 text-red-700" />
            <div className="text-[10px] uppercase tracking-wider">
              <h4 className="font-black text-slate-800">Direct Logistics</h4>
              <p className="text-slate-400">Global Export</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-r border-slate-100 last:border-0 pr-4">
            <BarChart3 className="h-6 w-6 text-red-700" />
            <div className="text-[10px] uppercase tracking-wider">
              <h4 className="font-black text-slate-800">Trade Data</h4>
              <p className="text-slate-400">Price Trends</p>
            </div>
          </div>
          <div className="flex items-center gap-4 last:border-0">
            <Globe2 className="h-6 w-6 text-red-700" />
            <div className="text-[10px] uppercase tracking-wider">
              <h4 className="font-black text-slate-800">Export Hub</h4>
              <p className="text-slate-400">Jebel Ali Core</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - Sidebar style integrated */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Industry Sidebar */}
          <aside className="w-full lg:w-72 bg-white border border-slate-200 p-6 rounded space-y-1">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1 h-3 bg-red-700"></span>
              All Industries
            </h3>
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`}
                className="flex items-center justify-between p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer rounded transition-all border-l-2 border-transparent hover:border-red-700 uppercase tracking-tight"
              >
                <span>{category.name}</span>
                <ChevronRight className="h-3 w-3 text-slate-300" />
              </Link>
            ))}

            <div className="mt-10 pt-6 border-t border-slate-100">
              <div className="p-4 bg-red-50 rounded">
                <div className="text-[10px] font-black text-red-800 uppercase tracking-tighter underline decoration-red-200">Export Services</div>
                <div className="text-[11px] text-red-900 mt-2 leading-relaxed">UAE Customs clearance & industrial export consulting available.</div>
              </div>
            </div>
          </aside>

          {/* Main Grid Content */}
          <div className="flex-1 space-y-12">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black text-slate-800 uppercase flex items-center gap-2">
                  <span className="w-1 h-4 bg-red-700"></span>
                  Top Industrial Selections
                </h3>
                <Link to="/products" className="text-[11px] font-black text-red-700 hover:underline uppercase tracking-widest">
                  View All Products →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    key={product.id}
                    className="bg-white border border-slate-200 rounded p-4 group relative cursor-pointer hover:shadow-lg transition-all"
                  >
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleProduct(product.id);
                      }}
                      className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-slate-400 hover:text-red-700 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${isProductSaved(product.id) ? 'fill-current text-red-700' : ''}`} />
                    </button>
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-square bg-slate-50 rounded mb-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-xs font-black text-slate-800 line-clamp-2 leading-tight h-8 mb-2 group-hover:text-red-700 transition-colors uppercase tracking-tight">
                        {product.name}
                      </div>
                      <div className="text-red-700 font-black text-lg tracking-tighter">
                        {product.priceRange} 
                        <span className="text-[10px] text-slate-400 font-bold ml-1 uppercase">/ Unit</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-widest">MOQ: {product.minOrder}</div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                        <span className="text-[9px] text-slate-400 uppercase tracking-tight font-black">Verified UAE Manufacturer</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Featured Manufacturers */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black text-slate-800 uppercase flex items-center gap-2">
                  <span className="w-1 h-4 bg-red-700"></span>
                  Verified High-Output Suppliers
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {suppliers.slice(0, 2).map((supplier) => (
                  <Link 
                    key={supplier.id}
                    to={`/supplier/${supplier.id}`}
                    className="flex flex-col gap-5 rounded border border-slate-200 bg-white p-5 transition-all hover:border-red-200 hover:shadow-md"
                  >
                    <div className="flex gap-5">
                      <div className="h-20 w-20 overflow-hidden rounded border border-slate-100 bg-slate-50 flex-shrink-0">
                        <img src={supplier.logo} alt={supplier.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xs font-black text-slate-800 uppercase tracking-wide">{supplier.name}</h3>
                          <ShieldCheck className="h-3 w-3 text-red-700" />
                        </div>
                        <p className="mt-2 text-[10px] text-slate-500 uppercase tracking-tighter font-bold">{supplier.location} • Est. {supplier.established}</p>
                        <div className="mt-3 flex gap-1">
                          {supplier.certificates.slice(0, 2).map(c => (
                            <span key={c} className="text-[8px] font-black text-slate-400 border border-slate-100 px-1.5 py-0.5 uppercase">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="container mx-auto px-6">
        <div className="rounded bg-slate-900 overflow-hidden relative p-12 text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-white text-3xl font-black italic tracking-tighter uppercase mb-4">Scale Your Global Supply Chain</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 font-medium">Connect with verified industrial entities in the UAE. Quality compliant with international standards.</p>
            <div className="flex justify-center gap-4">
              <button className="bg-red-700 text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors shadow-lg">Become a Partner</button>
              <button className="border border-white/20 text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Post RFQ</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
