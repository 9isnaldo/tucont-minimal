'use client';

import { motion } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Plataforma = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-20 px-6 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <p className="text-3xl md:text-5xl font-bold text-tucont-navy mb-20 leading-tight">
            A maior plataforma do mundo de jornada empreendedora
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-tucont-orange to-tucont-orange-light p-8 rounded-3xl shadow-2xl h-[400px] flex flex-col">
            {/* Container da imagem */}
            <div 
              className="relative w-full h-48 flex-grow mb-4 cursor-pointer overflow-hidden rounded-xl"
              onClick={toggleExpand}
            >
              <Image
                src="/image/tucont-sistema.png"
                alt="Plataforma Tucont"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Ícone de zoom */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-12 h-12 text-white opacity-90" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-2">Plataforma Integrativa</h3>
            <p className="text-white font-semibold">Sua jornada empreendedora em uma só plataforma</p>
          </div>
        </motion.div>

        {/* Modal para imagem expandida com botão na diagonal fora */}
        {isExpanded && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
            {/* Container do botão posicionado absolutamente na diagonal */}
            <div className="relative w-full max-w-6xl">
              <button 
                className="absolute -top-8 -right-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand();
                }}
              >
                <X className="w-8 h-8 text-gray-800" />
              </button>
              
              <div className="aspect-video relative">
                <Image
                  src="/image/tucont-sistema.png"
                  alt="Plataforma Tucont - Visão expandida"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[85vh] mx-auto"
                  onClick={toggleExpand}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Plataforma;