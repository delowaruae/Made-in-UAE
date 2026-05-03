/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Mail, Send, FileText, Info } from 'lucide-react';

export default function InquiryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Request for Quotation (RFQ)</h1>
          <p className="mt-2 text-lg text-gray-500">Tell us what you need, and we'll connect you with the best UAE suppliers within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* RFQ Form */}
          <div className="lg:col-span-2">
            <form className="rounded-2xl bg-white p-8 shadow-sm space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-gray-700">Product Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Aluminium Alloy 6061"
                    className="mt-2 w-full rounded-xl border border-gray-200 p-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Category</label>
                  <select className="mt-2 w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 appearance-none">
                    <option>Industrial Machinery</option>
                    <option>Renewable Energy</option>
                    <option>Petrochemicals</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">Quantity Needed</label>
                <div className="mt-2 flex">
                  <input 
                    type="number" 
                    className="flex-1 rounded-l-xl border border-gray-200 p-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100" 
                  />
                  <select className="rounded-r-xl border-y border-r border-gray-200 bg-gray-50 px-4 text-sm font-bold text-gray-700 outline-none">
                    <option>Pieces</option>
                    <option>Tons</option>
                    <option>Meters</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">Detailed Message</label>
                <textarea 
                  rows={6} 
                  placeholder="Describe your specifications, quality requirements, and target price..."
                  className="mt-2 w-full rounded-xl border border-gray-200 p-3 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">Attachment</label>
                <div className="mt-2 flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 px-6 py-6 transition-all hover:border-blue-300 hover:bg-blue-50 cursor-pointer">
                  <div className="text-center">
                    <FileText className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Upload technical specs or blueprints (PDF, JPG, PNG)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
                <span className="text-xs text-gray-500">I agree to share my contact information with verified suppliers for the purpose of receiving quotes.</span>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 py-4 font-bold text-white shadow-xl transition-all hover:bg-red-800 active:scale-[0.98]">
                <Send className="h-5 w-5" /> Submit RFQ
              </button>
            </form>
          </div>

          {/* Sourcing Benefits */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-amber-50 p-6 text-amber-900">
              <h3 className="flex items-center gap-2 font-bold">
                <Info className="h-5 w-5 text-amber-600" /> Pro Tips
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Be specific about your certifications (e.g. ISO, CE) and shipping terms (e.g. FOB Dubai, CIF London) to get the most accurate quotes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Why use RFQ?</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-1"><ShieldCheck className="h-4 w-4 text-blue-900" /></div>
                  <div className="text-sm">Connect with <span className="font-bold">Verified Manufacturers</span> only.</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-1"><Mail className="h-4 w-4 text-blue-900" /></div>
                  <div className="text-sm">Receive multiple quotes <span className="font-bold">within 24 hours</span>.</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-1"><FileText className="h-4 w-4 text-blue-900" /></div>
                  <div className="text-sm">Direct factory transparent <span className="font-bold">wholesale pricing</span>.</div>
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest">Global Support</h3>
              <p className="mt-2 text-sm text-blue-700">Need help sourcing for a large project? Our regional agents are ready to assist you.</p>
              <button className="mt-6 font-bold text-blue-900 hover:underline">Contact Expert Agent →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
