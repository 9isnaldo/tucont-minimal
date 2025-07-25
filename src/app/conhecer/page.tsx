// src/app/conhecer/page.tsx
"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from '../../components/Header';
import ScrollSection from '@/components/ScrollSection';
import ServiceCards from '@/components/ServiceCards';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';
import ServiceSection from '@/components/sections/ServiceSection';

export default function About() {
  const onboardingItems = [
    {
      title: "Chama no whats ou cadastra por este link",
      description: "A mensagem chegou, o processo começou. É simples, rápido e descomplicado.",
      image: "💬"
    },
    {
      title: "Validamos os dados e enviamos seus acessos",
      description: "Nossa equipe especializada cuida de todos os detalhes para você.",
      image: "✅"
    },
    {
      title: "Wow! Já estamos conectados ao seu sonho empreendedor",
      description: "Da abertura à operação, estamos juntos nesta jornada.",
      image: "🚀"
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-6 bg-tucont-orange text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-h-[calc(55vh)] my-60 text-9xl md:text-6xl font-bold text-white mb-8"
            >
              Sua contabilidade online e pelo whatsapp!
            </motion.h1>
          </div>
        </section>

        {/* Services Section - Agora totalmente autocontido */}
        <ServiceSection />

        {/* About Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-tucont-navy mb-8"
            >
              Quem Somos
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-gray-600 leading-relaxed"
            >
              <p>
                Somos a transformação da contabilidade, utilizamos uma esteira tecnológica para cumprir as obrigações com o governo.
              </p>
              <p>
                Utilizamos o whatsapp, é só nos chamar que resolvemos o que precisar. Simples, rápido e com a ferramenta que está na palma da sua mão.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Onboarding Section - Mantendo o scroll original */}
        <ScrollSection 
          title="Crie sua conta, é grátis e leva menos de 3 minutos."
          items={onboardingItems}
          ctaText="Ah, pode ser por áudio, print, foto, envia aí que entendemos."
          ctaButton="Criar Tuconta"
        />

        {/* Service Cards */}
        <ServiceCards />

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}