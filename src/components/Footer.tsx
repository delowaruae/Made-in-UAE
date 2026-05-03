/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-12">
            <div className="flex items-center gap-2 grayscale opacity-60">
              <div className="w-3 h-3 bg-slate-800"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">ICV Certified Suppliers</span>
            </div>
            <div className="flex items-center gap-2 grayscale opacity-60">
              <div className="w-3 h-3 bg-slate-800"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">Dubai Exports Partner</span>
            </div>
          </div>
          
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Terms</span>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Compliance</span>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-tighter">
            &copy; {new Date().getFullYear()} Made in UAE B2B Marketplace. Part of Global Sourcing Network.
          </div>
        </div>
      </div>
    </footer>
  );
}
