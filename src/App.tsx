/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import SupplierDetail from './pages/SupplierDetail';
import InquiryPage from './pages/InquiryPage';
import AuthPage from './pages/AuthPage';
import WishlistPage from './pages/WishlistPage';
import { WishlistProvider } from './context/WishlistContext';

export default function App() {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:slug" element={<CategoryPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="supplier/:id" element={<SupplierDetail />} />
            <Route path="inquiry" element={<InquiryPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="*" element={<div className="p-20 text-center font-bold text-gray-500">404 - Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  );
}
