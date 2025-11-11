'use client';

import { useState } from "react";
import { Users, Lightbulb, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { CaptureModal } from "../ui/capture-modal";

export const Sobre = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#ebf4ff]/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#fff4ed]/40 to-transparent"></div>
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-100/30 blur-xl animate-[float1_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-orange-100/30 blur-xl animate-[float2_10s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-8 shadow-lg gap-2 bg-[#f5f7fa] backdrop-blur-xl border border-[#1e90ff]/30 text-[#1e90ff] px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Empreendedorismo Integrativo</span>
          </div>
          <h2 className="text-tucont-navy text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Por que escolhem a <span className="text-tucont-orange">Tucont</span>?
          </h2>
          <p className="text-2xl text-[#6b7280] font-semibold">
            Porque transformamos a contabilidade em uma <span className="text-[#1e90ff]">experiência humana</span> e tecnológica.
          </p>
        </div>

        {/* 1º Bloco - Nosso Sonho Grande */}
        <div className="mb-20 bg-gradient-to-r from-[#ebf4ff] to-[#fff4ed] p-8 rounded-2xl border border-gray-100 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h3 className="text-3xl font-bold text-tucont-navy mb-5">
                Nosso <span className="text-tucont-orange">Sonho Grande</span>
              </h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Contribuir para o Brasil chegar a 50 milhões de PJs e
                  mudar a sociedade pelo despertar do empreendedorismo.
                </p>
                <p className="text-[#ff8c00] font-medium">
                  "O empreendedorismo muda vidas e transforma realidades"
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200 w-full max-w-md relative">
                <div className="absolute -top-3 -right-3 bg-[#ff8c00] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Meta 2030
                </div>
                <div className="flex items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tucont-navy mb-1">21MM</div>
                    <div className="text-gray-500 text-sm">Atual</div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="h-2 bg-gradient-to-r from-[#ff8c00] to-[#1e90ff] rounded-full shadow-inner"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1e90ff] mb-1">50MM</div>
                    <div className="text-gray-500 text-sm">Meta</div>
                  </div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-4">
                  Pessoas Jurídicas no Brasil
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2º Bloco - Temos experiência */}
        <div className="mb-20 flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-2xl hover:shadow-2xl transition-shadow">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full h-80 max-w-md">
              <div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-white shadow-2xl">
                <img 
                  src="/image/Geraldo.png" 
                  alt="Geraldo Oliveira" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white font-medium">Geraldo Oliveira</div>
                  <div className="text-[#ffb74d] text-sm">Fundador & CEO</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Jornada <span className="text-[#1e90ff]">Real</span>
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Depois de criar e ajudar mais de <span className="text-[#1e90ff] font-semibold">30 negócios</span>, 
                transformamos nossa experiência em metodologia para você.
              </p>
              <p>
                "Na Tucont, vivemos na pele os desafios do empreendedor. Por isso criamos soluções que <span className="text-[#ff8c00] font-medium">realmente funcionam</span>"
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full shadow-xs">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Infoco</span>
              </div>
              <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full shadow-xs">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Iuptec</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full shadow-xs">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Iupcare</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3º Bloco - Somos Integrativos */}
        <div className="mb-16 bg-gradient-to-br from-[#ebf4ff] to-[#fff4ed] p-8 rounded-2xl border border-gray-100 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h3 className="text-3xl font-bold text-tucont-navy mb-5">
                Quem Somos
              </h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Somos a transformação da contabilidade, utilizamos uma esteira tecnológica 
                  para cumprir as obrigações com o governo.
                </p>
                <p>
                  Utilizamos o whatsapp, é só nos chamar que resolvemos o que precisar. Simples, rápido e com a ferramenta que está na palma da sua mão.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center relative">
              <div className="relative w-full h-80 max-w-md">
                <div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-white shadow-2xl">
                  <img 
                    src="/image/Persona-1.png" 
                    alt="Empreendedora no centro" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Ícones orbitando com animação */}
                <div className="absolute -top-4 -left-4 bg-white p-2 rounded-full shadow-md border border-gray-200 animate-[orbita1_6s_ease-in-out_infinite]">
                  <Users className="w-6 h-6 text-[#1e90ff]" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-md border border-gray-200 animate-[orbita2_7s_ease-in-out_infinite_0.5s]">
                  <Lightbulb className="w-6 h-6 text-[#ff8c00]" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 animate-[orbita3_5s_ease-in-out_infinite_0.3s]">
                  <BookOpen className="w-6 h-6 text-[#1e90ff]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#1e90ff] to-[#ff8c00] p-0.5 rounded-2xl shadow-2xl inline-block">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-600 mb-5">
                Pronto para <span className="text-tucont-orange">transformar</span> seu negócio?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de empreendedores que já descobriram uma nova forma de fazer contabilidade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#1e90ff] to-[#1a73e8] text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center"
                >
                  Começar Agora
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  onClick={() => window.open(`https://wa.me/5531975740510?text=${encodeURIComponent("Quero destravar meu empreendedorismo!")}`, '_blank')}
                  className="px-6 py-3 rounded-lg bg-[#00c853] text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] inline-block"
                >
                  Falar com Especialista
                </a>
              </div>
              
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full shadow-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full shadow-xs">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Consultoria gratuita</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full shadow-xs">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Resultados garantidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adicionando as animações diretamente no componente */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes orbita1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-10px); }
        }
        @keyframes orbita2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(10px); }
        }
        @keyframes orbita3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(0); }
        }
      `}</style>

      <CaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};