import React from 'react';
import Link from 'next/link';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 flex items-center justify-center">
              <img src="/image/logo-tucont.svg" alt="Tucont" className="w-40 h-40" />
            </div>
          </Link>
          
          <Link 
            href="/conhecer" 
            className="text-tucont-navy hover:text-tucont-orange transition-colors duration-300 text-2xl font-medium"
          >
            Conhecer a Tucont
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/conhecer" 
            className="bg-tucont-navy text-white px-6 py-3 rounded-lg hover:bg-tucont-orange transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            rel="noopener noreferrer"
          >
            Planos
          </Link>
          
          <a 
            href="https://app.tucont.com.br/auth/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-tucont-navy text-white px-6 py-3 rounded-lg hover:bg-tucont-orange transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Acessar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;