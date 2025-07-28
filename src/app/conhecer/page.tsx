"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from '../../components/Header';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';
import ServiceSection from '@/components/sections/ServiceSection';
import Banner from '@/components/sections/Banner';
import { Rocket, MessageSquare, CheckCircle } from 'lucide-react';

export default function About() {
  const onboardingItems = [
    {
      title: "Chama no whatsapp ou cadastra por este link",
      description:
        <span>
          A mensagem chegou, o processo começou.<br />
          É simples, rápido e descomplicado.
        </span>
      ,
      icon: <MessageSquare className="w-16 h-16 mx-auto text-blue-500" />,
      iconColor: 'text-blue-500'
    },
    {
      title: "Validamos os dados e enviamos seus acessos",
      description: "Nossa equipe especializada cuida de todos os detalhes para você.",
      icon: <CheckCircle className="w-16 h-16 mx-auto text-green-500" />,
      iconColor: 'text-green-600'
    },
    {
      title: "Wow! Já estamos conectados ao seu sonho empreendedor",
      description: "Da abertura à operação, estamos juntos nesta jornada.",
      icon: <Rocket className="w-16 h-16 mx-auto text-orange-500" />,
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Banner />

        {/* Services Section */}
        <ServiceSection />

        {/* About Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-card rounded-3xl p-8 shadow-2xl border border-border"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-tucont-navy text-center mb-10">
                Quem Somos
              </h2>
              
              <div className="space-y-6 text-xl text-center text-gray-600 leading-relaxed">
                <p>
                  Somos a transformação da contabilidade, utilizamos uma esteira tecnológica para cumprir as obrigações com o governo.
                </p>
                <p>
                  Utilizamos o whatsapp, é só nos chamar que resolvemos o que precisar. Simples, rápido e com a ferramenta que está na palma da sua mão.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Onboarding Section */}
        <section className="py-32 px-6 min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-tucont-navy text-center mb-20"
            >
              Crie sua conta, é grátis e leva menos de 3 minutos.
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {onboardingItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center space-y-6"
                >
                  <div className={`mb-6 ${item.iconColor}`}>
                    {React.cloneElement(item.icon, { className: `w-16 h-16 mx-auto ${item.iconColor}` })}
                  </div>
                  <h3 className="text-2xl font-bold text-tucont-navy">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mt-16"
              transition={{ delay: 0.1, duration: 1 }}
            >
              <div className="bg-gradient-to-r from-tucont-orange to-tucont-orange-light p-8 rounded-3xl text-white shadow-2xl max-w-2xl mx-auto">
                <p className="text-lg mb-4 font-medium">
                  Ah, pode ser por áudio, print, foto, envia aí que entendemos.
                </p>
                <a
                  href="https://wa.me/5531975740510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-tucont-navy px-8 py-4 rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-lg inline-block"
                >
                  Criar Tuconta
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}