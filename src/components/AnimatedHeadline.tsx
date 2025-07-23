'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const headlines = [
  "Olá, sou a Tucont, Contabilidade Integrativa!",  
  "Pra você PF ou PJ, sou seu copiloto na Jornada empreendedora,",
  "E óbvio, cumpro as obrigações com o Governo.",
  "O atendimento é humanizado, automatizado e com I.A.",
  "Para você que empreende ou vai empreender.",
  "Diferente de tudo que você ja VIU!"
];

const cards = [
  { title: "Abertura de Empresas", icon: "🏢" },
  { title: "Emissão de Notas Fiscais", icon: "🧾" },
  { title: "Envio de Tributos e notificação de vencimentos e acesso online aos seus documentos", icon: "📋" },
  { title: "Jornada Empreendedora, Educação prática aplicável e Acompanhamento do seu Negócio", icon: "📊" }
];

const AnimatedHeadline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    if (currentIndex < headlines.length) {
      const timer = setTimeout(() => {
        if (currentIndex < headlines.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setShowCards(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (showCards) {
      const finalTimer = setTimeout(() => {
        setShowCards(false);
        setShowFinalMessage(true);
      }, 5000);
      
      return () => clearTimeout(finalTimer);
    }
  }, [showCards]);

  return (
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="flex flex-col items-center justify-center w-full min-h-[50vh]">
        <AnimatePresence mode="wait">
          {currentIndex < headlines.length && !showCards && !showFinalMessage && (
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-4xl md:text-8xl font-bold text-tucont-navy  leading-tight text-center"
            >
              {headlines[currentIndex]}
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCards && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-800/90 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-semibold text-lg leading-tight">{card.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full flex flex-col items-center space-y-8"
            >
              <h2 className="text-3xl md:text-7xl font-bold text-tucont-navy text-center">
                O jogo mudou, Contabilidade Ultrapassada, nunca mais!
              </h2>
              
              <div className="w-full max-w-2xl">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 flex items-center gap-3">
                  <div className="flex-1 px-4 py-3">
                    <input
                      type="text"
                      placeholder="Pergunta aí: Abrir empresa, emitir nota fiscal...."
                      className="w-full text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none text-lg"
                      readOnly
                    />
                  </div>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                    </svg>
                    Resolver
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedHeadline;