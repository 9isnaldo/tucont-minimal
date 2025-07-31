'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, FileText, FileStack, LineChart, ArrowRight } from "lucide-react";
import InteractiveAi from '@/components/ui/interactive-ai';

const headlines = [
  "Olá, sou a Tucont I.A., Contabilidade Integrativa!",  
  "Seu copiloto no Empreendedorismo e na Contabilidade Online.",
  "Sou para PF, PJ, Profissionais, Startups e Prestadores de Serviço.",
  "Crie ou Evolua sua empresa com nossa I.A. e automações, veja:",
];

const cards = [
  { 
    title: "Criar e Abrir", 
    description: 
      <span>
          • I.A. para ideias, planos e MVP.<br />
          • Automação para criar o CNPJ.
      </span>,
    icon: <Building2 size={80} className="text-tucont-yellow" /> 
  },
  { 
    title: "Vender e Emitir NF", 
    description:
      <span>
          • Plataforma para você vender e emitir notas.<br />
          • Ou peça pelo whatsapp que resolvemos.
      </span>,
    icon: <FileText size={80} className="text-tucont-yellow" /> 
  },
  { 
    title: "Obrigações com o GOV", 
    description: "Envio automático de tributos, notificação inteligente de vencimentos e acesso online centralizado a todos os seus documentos contábeis.", 
    icon: <FileStack size={80} className="text-tucont-yellow" /> 
  },
  { 
    title: "Financeiro e Dados",
    description:
      <span>
          • Plataforma para operações financeiras.<br />
          • Todos os dados no whatsapp.
      </span>,
    icon: <LineChart size={80} className="text-tucont-yellow" /> 
  }
];

const headend = [
  "O jogo mudou, Contabilidade Ultrapassada, nunca mais!",
];

const TypewriterText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Velocidade da digitação (50ms por caractere)

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      // Adiciona um pequeno atraso após terminar de digitar
      const timeout = setTimeout(onComplete, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, onComplete]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

const AnimatedHeadline = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showHeadend, setShowHeadend] = useState(false);
  const [headlineCompleted, setHeadlineCompleted] = useState(false);

  useEffect(() => {
    if (headlineCompleted && currentHeadlineIndex < headlines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentHeadlineIndex(currentHeadlineIndex + 1);
        setHeadlineCompleted(false);
      }, 500); // Tempo entre as frases
      return () => clearTimeout(timer);
    } else if (headlineCompleted && currentHeadlineIndex === headlines.length - 1) {
      const timer = setTimeout(() => {
        setShowCards(true);
      }, 1000); // Tempo antes de mostrar os cards
      return () => clearTimeout(timer);
    }
  }, [headlineCompleted, currentHeadlineIndex]);

  useEffect(() => {
    if (showCards) {
      const headendTimer = setTimeout(() => {
        setShowCards(false);
        setShowHeadend(true);
      }, 10000); // TEMPO DA ANIMAÇÃO - 10 SEGUNDOS
      
      return () => clearTimeout(headendTimer);
    }
  }, [showCards]);

  useEffect(() => {
    if (showHeadend) {
      const finalTimer = setTimeout(() => {
        setShowHeadend(false);
        setShowFinalMessage(true);
      }, 3500); // TEMPO DA ANIMAÇÃO - 3.5 SEGUNDOS
      
      return () => clearTimeout(finalTimer);
    }
  }, [showHeadend]);

  return (
    <div className="max-w-8xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center w-full min-h-[70vh] py-12">
        <AnimatePresence mode="wait">
          {currentHeadlineIndex < headlines.length && !showCards && !showHeadend && !showFinalMessage && (
            <motion.h1
              key={currentHeadlineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-4xl md:text-8xl font-bold text-tucont-navy text-center min-h-[200px] md:min-h-[300px] flex items-center"
            >
              <TypewriterText 
                text={headlines[currentHeadlineIndex]} 
                onComplete={() => setHeadlineCompleted(true)}
              />
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
          {showHeadend && (
            <motion.h2
              key="headend"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-4xl md:text-8xl font-bold text-tucont-navy text-center min-h-[200px] md:min-h-[300px] flex items-center"
            >
              <TypewriterText text={headend[0]} />
            </motion.h2>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full flex flex-col items-center space-y-12 py-12"
            >
              <h2 className="text-4xl md:text-8xl flex font-black text-tucont-navy text-center px-2">
                Crie empresas com a I.A. da
                <span className="flex items-center justify-center px-6">
                  <img src="/image/tucont-name-laranja.svg" alt="Tucont" className="h-16" />
                </span>
              </h2>

              <h3>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-semibold text-center text-gray-600 mb-8 "
                  >
                    Desenvolva sua empresa, conversando com I.A. e evolua com serviços automatizados.
                  </motion.h2>
              </h3>
              
              <InteractiveAi />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedHeadline;