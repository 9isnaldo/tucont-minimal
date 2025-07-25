'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, FileText, FileStack, LineChart, Star } from "lucide-react";

const headlines = [
  "Olá, sou a Tucont, Contabilidade Integrativa!",  
  "Pra você PF ou PJ, sou seu copiloto na Jornada empreendedora,",
  "E óbvio, cumpro as obrigações com o Governo.",
  "O atendimento é humanizado, automatizado e com I.A.",
  "Para você que empreende ou vai empreender.",
  "Diferente de tudo que você ja VIU!"
];

const cards = [
  { 
    title: "Abertura de Empresas", 
    description: "Processo completo de abertura com acompanhamento personalizado desde o primeiro passo até a operação regular da sua empresa.",
    icon: <Building2 size={80} className="text-tucont-yellow" /> 
  },
  { 
    title: "Emissão de Notas Fiscais", 
    description: "Sistema integrado para emissão, gestão e armazenamento seguro de todas as suas notas fiscais em um único lugar.",
    icon: <FileText size={80} className="text-tucont-yellow" /> 
  },
  { 
    title: "Gestão Tributária", 
    description: "Envio automático de tributos, notificação inteligente de vencimentos e acesso online centralizado a todos os seus documentos contábeis.", 
    icon: <FileStack size={80} className="text-tucont-yellow" /> 
  },
  { 
    title: "Jornada Empreendedora", 
    description: "Programa completo de educação financeira e empresarial com acompanhamento mensal do crescimento do seu negócio.", 
    icon: <LineChart size={80} className="text-tucont-yellow" /> 
  }
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
      }, 3500); //TEMPO DA ANIMAÇÃO - 3 SEGUINGOS
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (showCards) {
      const finalTimer = setTimeout(() => {
        setShowCards(false);
        setShowFinalMessage(true);
      }, 8000); // TEMPO DA ANIMAÇÃO - 8 SEGUINGOS
      
      return () => clearTimeout(finalTimer);
    }
  }, [showCards]);

  return (
    <div className="max-w-8xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center w-full min-h-[70vh] py-12">
        <AnimatePresence mode="wait">
          {currentIndex < headlines.length && !showCards && !showFinalMessage && (
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-4xl md:text-8xl font-bold text-tucont-navy text-center "
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
              className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8 px-2"
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-tucont-navy text-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col h-full min-h-[450px] w-full"
                >
                  <div className="mb-8 flex justify-center">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-3xl mb-6 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-xl text-center flex-grow leading-relaxed">
                    {card.description}
                  </p>
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
              className="w-full flex flex-col items-center space-y-12 py-12"
            >
              <h2 className="text-4xl md:text-7xl max-w-6xl font-black text-tucont-navy text-center px-4">
                O jogo mudou, Contabilidade Ultrapassada, nunca mais!
              </h2>
              
              <div className="w-full max-w-4xl px-4">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-3 flex items-center gap-4">
                  <div className="flex-1 px-4 py-4">
                    <input
                      type="text"
                      placeholder="Pergunta aí: Abrir empresa, emitir nota fiscal...."
                      className="w-full text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none text-xl"
                      readOnly
                    />
                  </div>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg text-lg"
                  >
                    <Star className="w-6 h-6" />
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