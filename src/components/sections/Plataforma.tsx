'use client';

import { motion } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Plataforma = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/image/tucont-sistema-1.png',
    '/image/tucont-sistema-2.png',
    '/image/tucont-sistema-3.png'
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Resetar para a primeira imagem quando fechar o modal
    if (!isExpanded) {
      setCurrentImageIndex(0);
    }
  };

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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
                src="/image/tucont-sistema-1.png"
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

        {/* Modal para imagem expandida com navegação */}
        {isExpanded && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4"
            onClick={toggleExpand}
          >
            <div className="relative w-full max-w-6xl flex items-center">
              {/* Botão de fechar */}
              <button 
                className="absolute -top-12 -right-4 md:-right-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand();
                }}
              >
                <X className="w-8 h-8 text-gray-800" />
              </button>
              
              {/* Botão anterior */}
              <button 
                className="absolute -left-4 md:-left-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10 mr-4"
                onClick={goToPrevImage}
              >
                <ChevronLeft className="w-8 h-8 text-gray-800" />
              </button>
              
              {/* Container da imagem */}
              <div className="w-full aspect-video relative mx-8">
                <Image
                  src={images[currentImageIndex]}
                  alt={`Plataforma Tucont - Visão expandida ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              
              {/* Botão próximo */}
              <button 
                className="absolute -right-4 md:-right-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10 ml-4"
                onClick={goToNextImage}
              >
                <ChevronRight className="w-8 h-8 text-gray-800" />
              </button>
            </div>
            
            {/* Indicadores de imagem */}
            <div className="flex mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Plataforma;