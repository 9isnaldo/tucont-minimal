// src/components/sections/ServiceSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileDigit, FileSearch, BarChart } from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

const ServiceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Dados dos serviços - agora dentro do componente
  const serviceItems: ServiceItem[] = [
    {
      title: "Abertura de Empresa",
      description: "Processo 100% digital e automatizado. Em poucos cliques, sua empresa está pronta para funcionar. Nosso sistema cuida de toda a burocracia enquanto você foca no que realmente importa.",
      image: "🏢"
    },
    {
      title: "Emissão de Notas Fiscais",
      description: "Emita suas notas fiscais de forma rápida e segura. Sistema integrado que simplifica todo o processo, com validação automática e envio direto aos clientes.",
      image: "🧾"
    },
    {
      title: "Tributos e Documentos",
      description: "Nunca mais perca prazos! Enviamos automaticamente seus tributos e notificamos sobre vencimentos. Todos os seus documentos organizados e acessíveis online 24/7.",
      image: "📋"
    },
    {
      title: "Dados e Insights",
      description: "Transformamos seus dados em decisões estratégicas. Relatórios inteligentes, análises de performance e insights que impulsionam o crescimento do seu negócio.",
      image: "📊"
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <PhoneMockup content={phoneContent} />

          <div className="flex flex-col justify-center h-[650px]">
            <span className="text-3xl font-bold text-tucont-navy mb-20">Subtitulos</span>
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
      </div>
    </section>
  );
};

export default ServiceSection;