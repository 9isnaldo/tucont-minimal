import React from 'react';
import Link from 'next/link';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm">
      <div className="mmx-auto px-6 py-4 flex justify-between items-center">
        <div className='flex items-center gap-8'>
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center">
              <img src="/image/tucont-azul.svg" alt="Tucont" className="h-10" />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link 
            href="/conhecer" 
            className="relative text-tucont-navy text-2xl font-medium group overflow-hidden"
          >
            <span className="relative inline-block">
              <span className="block group-hover:translate-y-[-100%] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]">
                Conhecer a Tucont
              </span>
              <span className="absolute left-0 top-0 text-tucont-navy translate-y-[100%] group-hover:translate-y-0 block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]">
                Conhecer a <span className="text-tucont-orange">Tucont</span>
              </span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tucont-navy transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
          </Link>

          <Link 
            href="/jornada" 
            className="relative text-tucont-navy text-2xl font-medium group overflow-hidden"
          >
            <span className="relative inline-block">
              <span className="block group-hover:translate-y-[-100%] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]">
                Jornada Empreendedora
              </span>
              <span className="absolute left-0 top-0 text-tucont-navy translate-y-[100%] group-hover:translate-y-0 block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]">
                Jornada <span className="text-tucont-orange">Empreendedora</span>
              </span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tucont-navy transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/conhecer" 
            className="bg-tucont-navy text-white px-6 py-3 rounded-3xl hover:bg-tucont-orange transition-all duration-300 font-medium rounded-3xl hover:shadow-xl transform hover:scale-105"
            rel="noopener noreferrer"
          >
            Planos
          </Link>
          
          <a 
            href="https://app.tucont.com.br/auth/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-tucont-navy text-white px-6 py-3 rounded-3xl hover:bg-tucont-orange transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Acessar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;