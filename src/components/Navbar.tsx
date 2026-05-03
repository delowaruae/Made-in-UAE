/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Search, Menu, User, Globe, ShoppingBag, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      {/* Top Utility Nav */}
      <nav className="hidden h-8 bg-slate-900 text-white text-[10px] md:flex items-center justify-between px-6 border-b border-slate-700">
        <div className="flex gap-4 items-center uppercase tracking-wider">
          <span className="opacity-80">Welcome to Made in UAE B2B</span>
          <span className="flex items-center gap-1 opacity-80 cursor-pointer hover:opacity-100">
            <Globe className="h-2.5 w-2.5" />
            English (AED)
          </span>
          <span className="opacity-80 cursor-pointer hover:opacity-100 underline decoration-slate-600">Sell on MadeInUAE</span>
        </div>
        <div className="flex gap-6 items-center uppercase tracking-wider font-bold">
          <span className="cursor-pointer hover:text-red-500 transition-colors">Help Center</span>
          <span className="cursor-pointer hover:text-red-500 transition-colors">Quotes</span>
          <Link to="/wishlist" className="cursor-pointer hover:text-red-500 transition-colors">Wishlist</Link>
          <Link to="/auth" className="cursor-pointer hover:text-red-500 transition-colors">Sign In</Link>
        </div>
      </nav>

      {/* Main Header */}
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-red-700 text-white font-bold text-xl ring-2 ring-red-700/20">
              UAE
            </div>
            <div className="leading-tight">
              <div className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">
                MADE IN <span className="text-red-700">UAE</span>
              </div>
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Global Trade Solutions Hub</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden max-w-2xl flex-1 md:flex h-11">
            <div className="relative flex-1 group">
              <input
                type="text"
                placeholder="Search UAE Manufacturers, Products or Suppliers..."
                className="w-full h-full border-2 border-red-700 border-r-0 px-6 text-sm focus:outline-none bg-white transition-all placeholder:text-slate-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="h-4 w-4" />
              </div>
            </div>
            <button className="bg-red-700 px-10 text-white font-bold text-sm hover:bg-red-800 transition-colors uppercase tracking-widest">
              Search
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex gap-6 items-center">
              <div className="text-center cursor-pointer hover:text-red-700 transition-colors">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-tight">RFQ</div>
                <div className="text-[9px] text-slate-500 uppercase font-medium">Get Quotes</div>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="text-center cursor-pointer hover:text-red-700 transition-colors">
                <div className="text-xs font-bold text-slate-700 font-mono">AED 0.00</div>
                <div className="text-[9px] text-slate-500 uppercase font-medium">My Sourcing</div>
              </div>
            </div>
            
            <button className="rounded-full p-2 text-slate-700 hover:bg-slate-100 md:hidden">
              <Search className="h-6 w-6" />
            </button>
            <button 
              className="rounded-full p-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 top-full w-full border-t border-slate-200 bg-white p-6 shadow-2xl md:hidden"
        >
          <div className="grid gap-6">
            <Link to="/categories" className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-50 pb-2">
              Categories <ChevronDown className="h-4 w-4" />
            </Link>
            <Link to="/suppliers" className="text-sm font-bold uppercase tracking-wider text-slate-900">Featured Suppliers</Link>
            <Link to="/wishlist" className="text-sm font-bold uppercase tracking-wider text-slate-900">Wishlist</Link>
            <Link to="/inquiry" className="text-sm font-bold uppercase tracking-wider text-red-700">Request Quote</Link>
            <hr className="border-slate-100" />
            <div className="grid grid-cols-2 gap-4">
              <Link to="/auth" className="flex justify-center rounded border border-slate-200 py-3 text-xs font-bold uppercase text-slate-700">Sign In</Link>
              <Link to="/auth" className="flex justify-center rounded bg-red-700 py-3 text-xs font-bold uppercase text-white">Join Free</Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
