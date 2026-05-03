/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Globe, Award, Users, Calendar, ArrowRight, Heart } from 'lucide-react';
import { products, suppliers } from '../data/mockData';
import { useWishlist } from '../context/WishlistContext';

export default function SupplierDetail() {
  const { id } = useParams();
  const { toggleSupplier, isSupplierSaved } = useWishlist();
  const supplier = suppliers.find(s => s.id === id);
  const supplierProducts = products.filter(p => p.supplierId === id);

  if (!supplier) {
    return <div className="p-20 text-center">Supplier not found.</div>;
  }

  const isSaved = isSupplierSaved(supplier.id);

  return (
    <div className="pb-20">
      {/* Cover Backdrop */}
      <div className="relative h-64 w-full md:h-80 lg:h-96">
        <img src={supplier.coverImage} alt={supplier.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Profile Header */}
        <div className="-mt-20 flex flex-col items-end gap-6 md:flex-row md:items-center">
          <div className="h-40 w-40 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
            <img src={supplier.logo} alt={supplier.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 space-y-2 md:pt-14">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-gray-900">{supplier.name}</h1>
              {supplier.isVerified && <ShieldCheck className="h-8 w-8 text-blue-600" />}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-gray-100 lg:text-gray-500">
              <div className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {supplier.location}</div>
              <div className="flex items-center gap-1 font-bold text-amber-500">★ {supplier.rating} (Verified Reviews)</div>
            </div>
          </div>
          <div className="flex gap-3 md:pt-14">
            <button 
              onClick={() => toggleSupplier(supplier.id)}
              className={`rounded-full px-8 py-3 font-bold shadow-lg transition-all flex items-center gap-2 ${
                isSaved ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-red-700 text-white hover:bg-red-800'
              }`}
            >
              <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
              {isSaved ? 'Saved' : 'Save Supplier'}
            </button>
            <button className="rounded-full border border-gray-200 bg-white px-8 py-3 font-bold text-gray-700 hover:bg-gray-50">
              Chat
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-12">
            <section className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">About Company</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{supplier.description}</p>
              
              <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="space-y-1">
                  <Calendar className="h-6 w-6 text-blue-900" />
                  <div className="text-xs text-gray-400">Established</div>
                  <div className="font-bold text-gray-900">{supplier.established}</div>
                </div>
                <div className="space-y-1">
                  <Award className="h-6 w-6 text-blue-900" />
                  <div className="text-xs text-gray-400">Business Type</div>
                  <div className="font-bold text-gray-900">{supplier.businessType.join(', ')}</div>
                </div>
                <div className="space-y-1">
                  <Users className="h-6 w-6 text-blue-900" />
                  <div className="text-xs text-gray-400">Employees</div>
                  <div className="font-bold text-gray-900">{supplier.employees}</div>
                </div>
                <div className="space-y-1">
                  <Globe className="h-6 w-6 text-blue-900" />
                  <div className="text-xs text-gray-400">Main Markets</div>
                  <div className="font-bold text-gray-900">Global</div>
                </div>
              </div>
            </section>

            {/* Products Gallery */}
            <section>
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                <Link to="/products" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
                  View All Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {supplierProducts.map(product => (
                  <Link 
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600">{product.name}</h3>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-900">{product.priceRange}</span>
                        <span className="text-xs text-gray-400">Min. Order: {product.minOrder}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Verification & Side Stats */}
          <div className="space-y-6 text-gray-900">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-bold">
                <ShieldCheck className="h-6 w-6 text-blue-600" /> Trust Verification
              </h3>
              <p className="mt-2 text-sm text-gray-500">This supplier has completed onsite verification by independent 3rd party agencies.</p>
              
              <ul className="mt-6 space-y-4">
                {supplier.certificates.map(cert => (
                  <li key={cert} className="flex items-center gap-3 rounded-lg border border-gray-50 bg-gray-50 p-3 italic">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">{cert} Certified</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-blue-900 p-8 text-white">
              <h3 className="text-xl font-bold">Quick Contact</h3>
              <p className="mt-2 text-sm text-blue-200">Connect with the export team directly for quotes and samples.</p>
              
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-lg bg-amber-500 py-3 font-bold text-blue-900 hover:bg-amber-400">
                  Send Inquiry Now
                </button>
                <div className="text-center text-xs text-blue-300">Responds in ~2 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
