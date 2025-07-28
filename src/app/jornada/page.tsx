'use client';

import { motion } from 'framer-motion';
import { Check, Star, Apple, Rocket,   Target, Landmark, BookOpen, Users, LineChart, Handshake, ChevronDown } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Journey = () => {
  const journeyFaqs = [
    {
      question: "Como funciona o acompanhamento da jornada empreendedora?",
      answer: "Oferecemos mentoria personalizada, frameworks práticos e acompanhamento próximo em cada etapa do seu negócio, desde a validação da ideia até a busca por investidores."
    },
    {
      question: "Vocês ajudam na preparação para investidores?",
      answer: "Sim! Organizamos toda a parte financeira e contábil, criamos pitch decks profissionais e preparamos contratos de vesting para apresentações a investidores."
    },
    {
      question: "Como funciona a consultoria 1:1?",
      answer: "Sessões personalizadas com especialistas em cada área do seu negócio, focadas em resolver desafios específicos e acelerar o crescimento da sua empresa."
    },
    {
      question: "Vocês oferecem materiais educativos?",
      answer: "Sim! Temos uma biblioteca completa de frameworks, templates, guias práticos e materiais educativos que você pode aplicar imediatamente no seu negócio."
    },
    {
      question: "Como vocês ajudam no Go-to-Market?",
      answer: "Desenvolvemos estratégias de lançamento, validação de mercado, posicionamento de produto e planos de crescimento personalizados para seu negócio."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section - Estilo Hotmart */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Conteúdo à esquerda */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <span className="bg-orange-500 ite text-white px-4 py-2 rounded-full text-sm font-medium">
                    Nossa Plataforma!
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold text-tucont-navy mb-20 leading-tight"
                >
                  Copiloto da sua Jornada Empreendedora? Sim, nossa{' '}
                  <span className="text-orange-500">cereja do bolo!</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-medium text-gray-700 mb-8"
                >
                  Planos, estratégia e operação
                </motion.p>

                {/* Tópicos com check marks */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Começar não é fácil? Te ajudamos da criação até a validação
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Aprenda, pratique e evolua: Aulas e materiais testados, conhecimento prático que acelera seu negócio
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Cabe no seu bolso: Não cobramos taxa de adesão e você para quando quiser
                    </p>
                  </div>
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-2 pt-4"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">4.8</span>
                  <span className="text-gray-500 text-sm">baseado em +1.000 empreendedores</span>
                </motion.div>
              </div>

              {/* Formulário à direita */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-3xl p-8 shadow-2xl border border-border"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Comece na <span className="text-orange-500">tucont</span> gratuitamente
                  </h3>
                  <p className="text-gray-600">Cadastre-se com uma das contas</p>
                </div>

                {/* Botões sociais */}
                <div className="space-y-3 mb-6">
                  <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl py-3 px-4 hover:border-gray-300 transition-colors">
                    <Apple className="w-5 h-5 text-gray-700" />
                    <span className="font-medium text-gray-700">Continuar com Apple</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl py-3 px-4 hover:border-gray-300 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="font-medium text-gray-700">Continuar com Google</span>
                  </button>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou crie a sua com o e-mail</span>
                  </div>
                </div>

                {/* Formulário */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Digite seu nome completo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Digite seu email principal"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="password"
                      placeholder="Digite uma senha"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <p className="text-xs text-gray-500">
                    Ao me cadastrar, declaro que sou maior de idade, li e concordo com os{' '}
                    <a href="#" className="text-orange-500 hover:underline">Termos e as Políticas</a> da plataforma.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-md"
                  >
                    Cadastre-se agora
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção da Plataforma */}
        <section className="py-20 px-6 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <p className="text-3xl md:text-5xl font-bold text-tucont-navy mb-20 leading-tight">
                A maior plataforma do mundo de jornada empreendedora
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-tucont-orange to-tucont-orange-light p-8 rounded-3xl shadow-2xl transform perspective-1000 rotate-x-12">
                <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plataforma Integrativa</h3>
                  <p className="text-white">Sua jornada empreendedora em uma só plataforma</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 1: Tirar Ideia do Papel */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-tucont-navy text-center mb-20"
            >
              Tirar Ideia do Papel
            </motion.h2>

            <div className="space-y-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >
                <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border text-center">
                  <div className='flex justify-center'>
                    <Rocket className="w-16 h-16 mb-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Da ideia a operação, do plano a execução, nós vamos com você!
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Acompanhamento completo da jornada empreendedora
                  </p>
                </div>
                
                <div className="space-y-6 text-center">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Transforme sua ideia em realidade
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Do conceito inicial até a operação completa, oferecemos suporte integral para tirar sua ideia do papel e transformá-la em um negócio próspero.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:grid-flow-col-dense"
              >
                <div className="lg:col-start-2">
                  <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border text-center">
                    <div className='flex justify-center'>
                      <Target className="w-16 h-16 mb-6 text-red-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Do MVP ao Go-to-Market
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Estratégia de lançamento e validação de produtos
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-center lg:col-start-1">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Validação e Lançamento
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Desenvolvemos seu MVP, testamos no mercado e criamos estratégias eficazes de Go-to-Market para garantir o sucesso do seu lançamento.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção 2: Gestão e Acompanhamento */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20"
            >
              Gestão e Acompanhamento
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border text-center">
                <div className='flex justify-center'>
                  <Landmark className="w-16 h-16 mb-6 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Venda, emita notas e controle o financeiro em nosso ERP
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistema integrado para gestão completa
                </p>
              </div>
              
              <div className="space-y-6 text-center">
                <h3 className="text-3xl font-bold text-gray-900">
                  Controle Total do seu Negócio
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nossa plataforma ERP integrada permite que você gerencie vendas, emita notas fiscais e controle todo o financeiro em um só lugar, com relatórios em tempo real.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção 3: Tracionar e Evoluir */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20"
            >
              Tracionar e Evoluir
            </motion.h2>

            <div className="space-y-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >
                <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border text-center">
                  <div className='flex justify-center'>
                    <BookOpen className="w-16 h-16 mb-6 text-violet-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Educação, materiais e frameworks aplicáveis imediatamente
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Conhecimento prático para seu negócio crescer
                  </p>
                </div>
                
                <div className="space-y-6 text-center">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Conhecimento que Transforma
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Acesso a materiais educativos, frameworks testados e conhecimento prático que você pode aplicar imediatamente para acelerar o crescimento do seu negócio.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:grid-flow-col-dense"
              >
                <div className="lg:col-start-2">
                  <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border text-center">
                    <div className='flex justify-center'>
                      <Users className="w-16 h-16 mb-6 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Consultoria e Mentoria 1:1 e especializada
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Atendimento personalizado para seu crescimento
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-center lg:col-start-1">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Mentoria Especializada
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Sessões individuais com especialistas em cada área do seu negócio, oferecendo orientação personalizada e estratégias específicas para seus desafios.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção 4: Voar mais alto - Investidores */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20"
            >
              Voar mais alto - Investidores
            </motion.h2>

            <div className="space-y-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >
                <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border text-center">
                  <div className='flex justify-center'>
                    <LineChart className="w-16 h-16 mb-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Preparar para investidores
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Contratos de Vesting, organização financeira e contábil, Pitch Deck
                  </p>
                </div>
                
                <div className="space-y-6 text-center">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Pronto para Investimento
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Organizamos toda documentação, criamos pitch decks profissionais e estruturamos contratos de vesting para apresentar seu negócio aos investidores com confiança.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:grid-flow-col-dense"
              >
                <div className="lg:col-start-2">
                  <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border text-center">
                    <div className='flex justify-center'>
                      <Handshake className="w-16 h-16 mb-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Negociações com o Mercado
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Rodadas de investimentos, M&A, Diluição
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-center lg:col-start-1">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Negociações Estratégicas
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Suporte completo em rodadas de investimento, processos de M&A e estruturação de diluição, garantindo as melhores condições para seu negócio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Jornada Integrativa */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-tucont-navy text-center mb-16"
            >
              Perguntas e Respostas sobre a Jornada Integrativa
            </motion.h2>

            <div className="space-y-8 max-w-4xl mx-auto">
              {journeyFaqs.map((faq, index) => (
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
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-900 to-orange-500 p-8 rounded-3xl text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Vem voar com a Tucont!</h3>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-lg inline-block"
              >
                Assinar JE
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journey;