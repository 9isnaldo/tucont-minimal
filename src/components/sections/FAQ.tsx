'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o atendimento via WhatsApp?",
    answer: "Nosso sistema automatizado recebe sua mensagem e responde instantaneamente. Para questões complexas, nossa equipe especializada entra em contato de forma personalizada."
  },
  {
    question: "Quanto tempo leva para abrir uma empresa?",
    answer: "Com nosso sistema automatizado, o processo de abertura leva em média 3-5 dias úteis, muito mais rápido que o método tradicional."
  },
  {
    question: "Vocês atendem que tipo de empresa?",
    answer: "Atendemos MEI, Microempresa, Empresa de Pequeno Porte, Simples Nacional e Lucro Presumido. Cada caso é analisado individualmente."
  },
  {
    question: "Como a IA ajuda na minha contabilidade?",
    answer: "A IA otimiza processos, automatiza cálculos, organiza documentos e gera insights sobre seu negócio, mas sempre com supervisão humana especializada."
  },
  {
    question: "Posso enviar documentos por áudio ou foto?",
    answer: "Sim! Nosso sistema processa áudios, fotos, prints e documentos de qualquer formato. Entendemos sua necessidade e organizamos tudo para você."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-tucont-navy text-center mb-16"
        >
          Perguntas e Respostas
        </motion.h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold text-lg text-tucont-navy pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-tucont-orange transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
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
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-tucont-orange-light to-tucont-orange p-8 rounded-3xl text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-lg mb-4 font-medium">Vem voar com a Tucont!</h3>
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
  );
};

export default FAQ;