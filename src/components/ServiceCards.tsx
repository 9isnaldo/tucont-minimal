'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Da ideia a operação, do plano a execução, nós vamos com você!",
    icon: "🚀",
    description: "Acompanhamento completo da jornada empreendedora"
  },
  {
    title: "Educação, materiais e frameworks aplicáveis imediatamente",
    icon: "📚",
    description: "Conhecimento prático para seu negócio crescer"
  },
  {
    title: "Do MVP ao Go-to-Market",
    icon: "🎯",
    description: "Estratégia de lançamento e validação de produtos"
  },
  {
    title: "Venda, emita notas e controle o financeiro em nosso ERP",
    icon: "💰",
    description: "Sistema integrado para gestão completa"
  },
  {
    title: "Consultoria e Mentoria 1:1 e especializada",
    icon: "👥",
    description: "Atendimento personalizado para seu crescimento"
  }
];

const ServiceCards = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-tucont-navy mb-4">
            Copiloto da sua Jornada Empreendedora? Sim, nossa cereja do bolo!
          </h2>
          <p className="text-xl text-gray-600">Planos, estratégia e operação</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-tucont-navy mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;