'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, FileText, FileStack, LineChart } from "lucide-react";
import InteractiveAi from '@/components/ui/interactive-ai';

const headlines: string[] = [
  "Olá, sou a Tucont I.A., Contabilidade Integrativa!",  
  "Seu copiloto no Empreendedorismo e na Contabilidade Online.",
  "Sou para PF, PJ, Profissionais, Startups e Prestadores de Serviço.",
  "Crie ou Evolua sua empresa com nossa I.A. e automações, veja:",
];

interface Card {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const cards: Card[] = [
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

const headend: string[] = [
  "O jogo mudou, Contabilidade Ultrapassada, nunca mais!",
];

interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
  speed?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  onComplete, 
  speed = 50, 
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, onComplete, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`inline-block ${className}`}
    >
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

const AnimatedHeadline: React.FC = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showHeadend, setShowHeadend] = useState(false);
  const [headlineCompleted, setHeadlineCompleted] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (headlineCompleted && currentHeadlineIndex < headlines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentHeadlineIndex(currentHeadlineIndex + 1);
        setHeadlineCompleted(false);
      }, 500);
      return () => clearTimeout(timer);
    } else if (headlineCompleted && currentHeadlineIndex === headlines.length - 1) {
      const timer = setTimeout(() => {
        setShowCards(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [headlineCompleted, currentHeadlineIndex]);

  useEffect(() => {
    if (showCards) {
      const headendTimer = setTimeout(() => {
        setShowCards(false);
        setShowHeadend(true);
      }, 10000);
      return () => clearTimeout(headendTimer);
    }
  }, [showCards]);

  useEffect(() => {
    if (showHeadend) {
      const finalTimer = setTimeout(() => {
        setShowHeadend(false);
        setShowFinalMessage(true);
      }, 3500);
      return () => clearTimeout(finalTimer);
    }
  }, [showHeadend]);

  const renderFinalMessage = () => {
    const fullText = "Crie empresas com a I.A. da Tucont";
    const logoPosition = fullText.indexOf("Tucont");
    const beforeLogo = fullText.substring(0, logoPosition);
    const afterLogo = fullText.substring(logoPosition + "Tucont".length);

    return (
      <h2 className="text-4xl md:text-8xl font-black text-tucont-navy text-center px-2 flex flex-wrap justify-center items-center">
        <TypewriterText 
          text={beforeLogo} 
          onComplete={() => setShowLogo(true)}
          speed={30}
          className="whitespace-pre"
        />
        {showLogo && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center px-2"
          >
            <img src="/image/tucont-name-laranja.svg" alt="Tucont" className="h-16" />
          </motion.span>
        )}
        {showLogo && (
          <TypewriterText 
            text={afterLogo} 
            speed={30}
            className="whitespace-pre"
          />
        )}
      </h2>
    );
  };

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
              <TypewriterText text={headend[0]} speed={40} />
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
              {renderFinalMessage()}

              <h3>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-semibold text-center text-gray-600 mb-8"
                >
                  <TypewriterText 
                    text="Desenvolva sua empresa, conversando com I.A. e evolua com serviços automatizados." 
                    speed={30}
                  />
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