/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, LayoutGrid, List as ListIcon, Heart } from 'lucide-react';
import { categories, products } from '../data/mockData';
import { useWishlist } from '../context/WishlistContext';

export default function CategoryPage() {
  const { slug } = useParams();
  const { toggleProduct, isProductSaved } = useWishlist();
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => !category || p.category === category.id);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">{category?.name || 'All Products'}</h1>
        <p className="mt-2 text-lg text-gray-500">{category?.description || 'Browse premium UAE-made products across all industries.'}</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filters Sidebar */}
        <aside className="w-full space-y-8 lg:w-64">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900 uppercase tracking-wider text-xs">
              <Filter className="h-4 w-4" /> Filters
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700">Sub-Categories</label>
                <div className="mt-3 space-y-2">
                  {['Manufacturing', 'Assembly', 'Raw Materials', 'Finishing'].map(sub => (
                    <label key={sub} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900 h-4 w-4" />
                      {sub}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">Minimum Order</label>
                <select className="mt-2 w-full rounded-lg border border-gray-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100">
                  <option>Any MOQ</option>
                  <option>Less than 100 units</option>
                  <option>100 - 500 units</option>
                  <option>More than 500 units</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">Supplier Type</label>
                <div className="mt-3 space-y-2">
                  {['Verified Supplier', 'Top Rated', 'Factory Direct'].map(type => (
                    <label key={type} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-900 h-4 w-4" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="text-sm font-medium text-gray-500">
              Showing <span className="text-gray-900 font-bold">{categoryProducts.length}</span> products
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1">
                <button className="rounded bg-blue-900 p-1.5 text-white"><LayoutGrid className="h-4 w-4" /></button>
                <button className="rounded p-1.5 text-gray-400 hover:bg-gray-50"><ListIcon className="h-4 w-4" /></button>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600">
                Sort by: Featured <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {categoryProducts.map((product) => (
              <div key={product.id} className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl">
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square w-full overflow-hidden bg-gray-50">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-sm font-bold text-gray-900 group-hover:text-blue-900">
                      {product.name}
                    </h3>
                    <div className="mt-4">
                      <div className="text-xl font-extrabold text-blue-900">{product.priceRange}</div>
                      <div className="mt-1 text-xs text-gray-400">Min. Order: {product.minOrder}</div>
                    </div>
                  </div>
                </Link>
                <div className="flex gap-2 p-5 pt-0">
                  <button className="flex-1 rounded-lg bg-blue-900 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-800">
                    Inquiry
                  </button>
                  <button 
                    onClick={() => toggleProduct(product.id)}
                    className={`rounded-lg border px-4 py-2 transition-colors ${
                      isProductSaved(product.id) ? 'border-red-100 bg-red-50 text-red-700' : 'border-gray-100 bg-gray-50 text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isProductSaved(product.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
