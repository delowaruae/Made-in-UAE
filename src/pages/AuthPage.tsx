/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Lock, User, ShieldCheck, ArrowRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 text-white font-bold">
              UAE
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 uppercase italic">
              MADE IN <span className="text-red-700">UAE</span>
            </span>
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900">{isLogin ? 'Sign In' : 'Create Account'}</h1>
          <p className="mt-2 text-gray-500">Join the UAE's premier B2B marketplace.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          {/* Tab Switcher */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white shadow-md text-blue-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-white shadow-md text-blue-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Join Free
            </button>
          </div>

          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            {!isLogin && (
              <div className="relative">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                <div className="relative mt-1">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-blue-500 focus:bg-white transition-all" 
                  />
                </div>
              </div>
            )}

            <div className="relative">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Work Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-blue-500 focus:bg-white transition-all" 
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Password</label>
                {isLogin && <button className="text-xs font-bold text-blue-600 hover:underline">Forgot?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-blue-500 focus:bg-white transition-all" 
                />
              </div>
            </div>

            <button className="w-full py-4 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2">
              {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="my-8 flex items-center gap-4 text-gray-400">
            <hr className="flex-1 border-gray-100" />
            <span className="text-xs font-bold uppercase">or continue with</span>
            <hr className="flex-1 border-gray-100" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all">
              <Linkedin className="h-5 w-5 text-[#0077b5]" />
              LinkedIn
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Secure B2B infrastructure & data protection
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
