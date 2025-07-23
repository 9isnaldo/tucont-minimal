import React from 'react';
import Link from 'next/link';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-tucont-navy to-tucont-orange rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-tucont-navy">tucont</span>
          </Link>
          
          <Link 
            href="/conhecer" 
            className="text-tucont-navy hover:text-tucont-orange transition-colors duration-300 font-medium"
          >
            Conhecer a Tucont Integrativa
          </Link>
        </div>
        
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-tucont-navy text-white px-6 py-3 rounded-full hover:bg-tucont-orange transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Acessar
        </a>
      </div>
    </header>
  );
};

export default Header;