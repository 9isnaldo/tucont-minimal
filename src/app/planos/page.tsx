'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ChevronDown, ChevronUp, Phone, Zap, Shield, Users, TrendingUp, Clock, Mail } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

const Planos = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Tucont Essencial",
      description: "Para empreendedores que estão começando",
      monthlyPrice: "R$ 149,00",
      annualPrice: "R$ 134,10", // 10% discount
      features: [
        "Contabilidade completa",
        "Processo de abertura",
        "Emissão de NFs pela PJZen",
        "Até 1 sócio (Pró-Labore)",
        "Até 25K de faturamento/mês"
      ],
      cta: "COMECE AGORA",
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Tucont Evoluindo",
      description: "Para empresas que querem escalar",
      monthlyPrice: "R$ 299,00",
      annualPrice: "R$ 269,10",
      features: [
        "Contabilidade completa",
        "Processo de abertura",
        "Emissão de NFs pela PJZen",
        "Até 2 sócios (Pró-Labore)",
        "Até 100K de faturamento/mês"
      ],
      cta: "COMECE AGORA",
      popular: true,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Tucont Crescimento",
      description: "Para empresas em pleno crescimento",
      monthlyPrice: "R$ 499,00",
      annualPrice: "R$ 449,10",
      features: [
        "Contabilidade completa",
        "Processo de abertura",
        "Emissão de NFs pela PJZen",
        "Até 5 sócios (Pró-Labore)",
        "Até 500K de faturamento/mês",
        "BPO Financeiro completo",
        "Mentoria estratégica semanal"
      ],
      cta: "COMECE AGORA",
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "Posso mudar de plano a qualquer momento?",
      answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de faturamento."
    },
    {
      question: "O que está incluído no BPO Financeiro?",
      answer: "O BPO Financeiro inclui: conciliação bancária, controle de fluxo de caixa, emissão de relatórios financeiros, gestão de contas a pagar e receber, e análise de indicadores financeiros."
    },
    {
      question: "Como funciona a mentoria estratégica?",
      answer: "A mentoria é realizada por especialistas certificados através de sessões individuais, onde desenvolvemos estratégias personalizadas para o crescimento do seu negócio."
    },
    {
      question: "Existe período de carência ou fidelidade?",
      answer: "Não há período de carência ou fidelidade. Você pode cancelar seu plano a qualquer momento com 30 dias de antecedência."
    },
    {
      question: "Os dados da minha empresa ficam seguros?",
      answer: "Sim, utilizamos criptografia de ponta a ponta, servidores seguros e compliance total com a LGPD. Seus dados estão 100% protegidos."
    }
  ];

  const handlePlanClick = (plan: any) => {
    const message = `Olá! Tenho interesse no plano ${plan.name}. Gostaria de mais informações.`;
    window.open(`https://wa.me/5531975740510?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 px-6 bg-white"
        >
          <div className="max-w-7xl mx-auto text-center">
                      
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-black mb-6 leading-tight text-tucont-navy"
            >
              Escolha o plano ideal para <span className="text-tucont-orange">acelerar</span> seu <span className="text-tucont-orange">negócio</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 font-semibold"
            >
              Soluções completas que combinam <span className="text-tucont-navy">tecnologia avançada </span> 
              com <span className=" text-tucont-orange">mentoria estratégica</span> para o crescimento sustentável.
            </motion.p>
          </div>
        </motion.section>

        {/* Plans Section */}
        <section className="py-20 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tucont-navy/5 via-transparent to-tucont-orange/5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-16"
            >
              <div className="bg-white border border-gray-200 rounded-full p-2 flex shadow-sm">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-tucont-orange text-white shadow-lg'
                      : 'text-gray-600 hover:text-tucont-navy'
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setBillingCycle('annually')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'annually'
                      ? 'bg-tucont-orange text-white shadow-lg'
                      : 'text-gray-600 hover:text-tucont-navy'
                  }`}
                >
                  Anual
                  <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">-10%</span>
                </button>
              </div>
            </motion.div>

            {/* Plans Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {plans.map((plan, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`relative group ${plan.popular ? 'transform scale-105' : ''}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Mais Popular
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative bg-white border ${plan.popular ? 'border-tucont-orange/50 shadow-xl' : 'border-gray-200 shadow-md'} rounded-3xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.name}
                      </h3>
                      
                      <div className="flex items-baseline justify-center gap-2 mb-4">
                        <span className="text-4xl font-bold text-tucont-navy">
                          {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-gray-500 text-lg">MENSAL</span>
                      </div>
                    </div>

                    {/* Compact Features */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => handlePlanClick(plan)}
                      className={`w-full rounded-3xl py-3 font-semibold text-lg mb-4 transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-tucont-orange hover:bg-orange-600 text-white shadow-md hover:shadow-lg'
                          : 'bg-tucont-navy hover:bg-blue-800 text-white shadow-md hover:shadow-lg'
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {/* Saiba Mais Button */}
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === index ? null : index)}
                      className="text-tucont-orange hover:text-orange-600 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      Saiba mais
                      {expandedPlan === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedPlan === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-gray-600">{plan.description}</p>
                            <div className="space-y-3">
                              <h4 className="text-tucont-navy font-semibold">Recursos adicionais:</h4>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div>• Backup automático de dados</div>
                                <div>• Certificado digital incluído</div>
                                <div>• Relatórios personalizados</div>
                                <div>• Suporte especializado</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-10 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-center text-tucont-navy mb-12"
            >
              Compare todos os recursos
            </motion.h2>
            
            {/* Definindo a interface para tableFeatures */}
            {(() => {
              interface TableFeature {
                name: string;
                values: string[];
                icon?: React.ReactNode;
              }

              const tableFeatures: TableFeature[] = [
                {
                  name: "Notas fiscais/mês",
                  values: ["100", "500", "Ilimitado"],
                  icon: <Zap className="w-5 h-5" />
                },
                {
                  name: "Usuários",
                  values: ["1", "3", "5"],
                  icon: <Users className="w-5 h-5" />
                },
                {
                  name: "Mentoria",
                  values: ["-", "Mensal", "Semanal"],
                  icon: <TrendingUp className="w-5 h-5" />
                },
                {
                  name: "BPO Financeiro",
                  values: ["-", "✓", "✓ Completo"],
                  icon: <Shield className="w-5 h-5" />
                },
                {
                  name: "Suporte",
                  values: ["Comercial", "Prioritário", "VIP"],
                  icon: <Clock className="w-5 h-5" />
                }
              ];

              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
                >
                  {/* Table Header */}
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <div className="p-6 pl-8 text-left">
                      <h3 className="text-lg text-center font-semibold text-tucont-navy">Recursos</h3>
                    </div>
                    {plans.map((plan, index: number) => (
                      <div 
                        key={index} 
                        className={`p-6 text-center border-l border-gray-200 ${
                          plan.popular ? 'bg-tucont-orange/5' : ''
                        }`}
                      >
                        <h4 className={`text-lg font-semibold ${
                          index === 0 ? 'text-blue-600' : 
                          index === 1 ? 'text-tucont-orange' : 
                          'text-purple-600'
                        }`}>
                          {plan.name.split(' ')[1]}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-gray-200">
                    {tableFeatures.map((feature: TableFeature, index: number) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="grid grid-cols-4 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="p-6 pl-8 flex items-center">
                          <span className="text-tucont-navy font-medium">{feature.name}</span>
                        </div>
                        
                        {feature.values.map((value: string, i: number) => (
                          <div 
                            key={i}
                            className={`p-6 text-center border-l border-gray-200 flex items-center justify-center ${
                              plans[i].popular ? 'bg-tucont-orange/5' : ''
                            }`}
                          >
                            {value === "✓" ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : value === "✓ Completo" ? (
                              <span className="text-green-600 font-medium">Completo</span>
                            ) : value === "-" ? (
                              <span className="text-gray-400">—</span>
                            ) : (
                              <span className={`${
                                value === "Ilimitado" ? 'font-semibold text-tucont-navy' : 'text-gray-700'
                              }`}>
                                {value}
                              </span>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </div>

                  {/* Table Footer */}
                  <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(`https://wa.me/5531975740510?text=${encodeURIComponent("Gostaria de comparar os planos e entender qual é o melhor para mim")}`, '_blank')}
                      className="inline-flex items-center gap-2 bg-tucont-navy hover:bg-blue-800 text-white px-6 py-3 rounded-3xl font-medium transition-all"
                    >
                      Quero ajuda para escolher
                    </motion.button>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-center text-tucont-navy mb-16"
            >
              Perguntas Frequentes
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
                    onClick={() => setExpandedPlan(expandedPlan === index ? null : index)}
                  >
                    <h3 className="font-semibold text-lg text-tucont-navy pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-orange-500 transition-transform duration-300 flex-shrink-0 ${
                        expandedPlan === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedPlan === index && (
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

            {/* Final CTA - Integrado na mesma seção */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-8 rounded-3xl text-white shadow-2xl max-w-2xl mx-auto">
                <h3 className="text-lg font-medium mb-4">
                  Não sabe qual plano escolher?
                </h3>
                <p className="mb-6">
                  Fale conosco e nossa equipe te ajudará a encontrar a solução perfeita para sua empresa.
                </p>
                <button
                  onClick={() => window.open(`https://wa.me/5531975740510?text=${encodeURIComponent("Quero ajuda para escolher o melhor plano para minha empresa")}`, '_blank')}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Falar com nossa equipe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Planos;