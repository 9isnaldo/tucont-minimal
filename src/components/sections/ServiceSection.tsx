// src/components/sections/ServiceSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileDigit, FileSearch, BarChart, FileText, Receipt, FileArchive, PieChart, TrendingUp , } from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';

interface ServiceItem {
  title: string;
  description: string;
}

const ServiceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [openIndexNotaFiscal, setOpenIndexNotaFiscal] = useState<number | null>(0);
  const [openIndexTributos, setOpenIndexTributos] = useState<number | null>(0);
  const [openIndexDados, setOpenIndexDados] = useState<number | null>(0);

  // Dados dos serviços
  const serviceItems: ServiceItem[] = [
    {
      title: "Abertura de Empresa",
      description: "Processo 100% digital e automatizado. Em poucos cliques, sua empresa está pronta para funcionar. Nosso sistema cuida de toda a burocracia enquanto você foca no que realmente importa.",
    },
    {
      title: "Emissão de Notas Fiscais",
      description: "Emita suas notas fiscais de forma rápida e segura. Sistema integrado que simplifica todo o processo, com validação automática e envio direto aos clientes.",
    },
    {
      title: "Tributos e Documentos",
      description: "Nunca mais perca prazos! Enviamos automaticamente seus tributos e notificamos sobre vencimentos. Todos os seus documentos organizados e acessíveis online 24/7.",
    },
    {
      title: "Dados e Insights",
      description: "Transformamos seus dados em decisões estratégicas. Relatórios inteligentes, análises de performance e insights que impulsionam o crescimento do seu negócio.",
    }
  ];

  const NotaFiscal: ServiceItem[] = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    }
  ];

  const Tributos: ServiceItem[] = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    }
  ];

  const Dados: ServiceItem[] = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    }
  ];

  // Cores e ícones para cada seção
  const iconColors = [
    'text-emerald-500',
    'text-violet-500', 
    'text-amber-500',
    'text-cyan-500',
  ];

  const itemIcons = [
    <BookOpen key="book-open" className={`w-7 h-7 ${iconColors[0]}`} />,
    <FileDigit key="file-digit" className={`w-7 h-7 ${iconColors[1]}`} />,
    <FileSearch key="file-search" className={`w-7 h-7 ${iconColors[2]}`} />,
    <TrendingUp key="trending" className={`w-7 h-7 ${iconColors[3]}`} />
  ];

  const notaFiscalIcons = [
    <FileText key="file-text" className={`w-7 h-7 ${iconColors[1]}`} />,
    <Receipt key="receipt" className={`w-7 h-7 ${iconColors[1]}`} />,
    <FileSearch key="file-search" className={`w-7 h-7 ${iconColors[2]}`} />,
    <BarChart key="bar-chart" className={`w-7 h-7 ${iconColors[3]}`} />,
  ];

  const tributosIcons = [
    <FileArchive key="file-archive" className={`w-7 h-7 ${iconColors[2]}`} />,
    <FileSearch key="file-search" className={`w-7 h-7 ${iconColors[2]}`} />,
    <FileSearch key="file-search" className={`w-7 h-7 ${iconColors[2]}`} />,
    <BarChart key="bar-chart" className={`w-7 h-7 ${iconColors[3]}`} />,
  ];

  const dadosIcons = [
    <PieChart key="pie-chart" className={`w-7 h-7 ${iconColors[3]}`} />,
    <BarChart key="bar-chart" className={`w-7 h-7 ${iconColors[3]}`} />,
    <FileSearch key="file-search" className={`w-7 h-7 ${iconColors[2]}`} />,
    <BarChart key="bar-chart" className={`w-7 h-7 ${iconColors[3]}`} />,
  ];

  const phoneContent = (
    <div className="flex items-center justify-center rounded-2xl overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/video-demo.mp4" type="video/mp4" />
      </video>
    </div>
  );

  return (
    <section className="py-32 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-tucont-navy text-center mb-20"
        >
          Sem perda de tempo, nossos serviços automatizados
        </motion.h2>

        {/* Seção 1 - Celular ESQUERDA, texto DIREITA - TODOS OS 4 ITENS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <PhoneMockup content={phoneContent} />
          <div className="flex flex-col justify-center h-[650px]">
            <span className="text-3xl font-bold text-tucont-orange mb-20">Abertura de Empresa</span>
            <div className="space-y-20">
              {serviceItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left flex items-center space-x-5"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div>
                      {itemIcons[index]}
                    </div>
                    <h3 className="text-3xl font-bold text-tucont-navy hover:text-tucont-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pt-3">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção 2 - Texto ESQUERDA, Celular DIREITA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="flex flex-col justify-center h-[650px] lg:order-1">
            <span className="text-3xl font-bold text-tucont-orange mb-20">Emissão de Notas Fiscais</span>
            <div className="space-y-20">
              {NotaFiscal.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left flex items-center space-x-5"
                    onClick={() => setOpenIndexNotaFiscal(openIndexNotaFiscal === index ? null : index)}
                  >
                    <div>
                      {notaFiscalIcons[index]}
                    </div>
                    <h3 className="text-3xl font-bold text-tucont-navy hover:text-tucont-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                  </button>
                  
                  <AnimatePresence>
                    {openIndexNotaFiscal === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pt-3">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <PhoneMockup content={phoneContent} className="lg:order-2" />
        </div>

        {/* Seção 3 - Celular ESQUERDA, texto DIREITA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <PhoneMockup content={phoneContent} />
          <div className="flex flex-col justify-center h-[650px]">
            <span className="text-3xl font-bold text-tucont-orange mb-20">Tributos e Documentos</span>
            <div className="space-y-20">
              {Tributos.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left flex items-center space-x-5"
                    onClick={() => setOpenIndexTributos(openIndexTributos === index ? null : index)}
                  >
                    <div>
                      {tributosIcons[index]}
                    </div>
                    <h3 className="text-3xl font-bold text-tucont-navy hover:text-tucont-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                  </button>
                  
                  <AnimatePresence>
                    {openIndexTributos === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pt-3">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção 4 - Texto ESQUERDA, Celular DIREITA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col justify-center h-[650px] lg:order-1">
            <span className="text-3xl font-bold text-tucont-orange mb-20">Dados e Insights</span>
            <div className="space-y-20">
              {Dados.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left flex items-center space-x-5"
                    onClick={() => setOpenIndexDados(openIndexDados === index ? null : index)}
                  >
                    <div>
                      {dadosIcons[index]}
                    </div>
                    <h3 className="text-3xl font-bold text-tucont-navy hover:text-tucont-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                  </button>
                  
                  <AnimatePresence>
                    {openIndexDados === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pt-3">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <PhoneMockup content={phoneContent} className="lg:order-2" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;