'use client';

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mostrar tooltip após o botão aparecer
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Esconder tooltip após 5 segundos
        setTimeout(() => setShowTooltip(false), 5000);
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const openWhatsApp = () => {
    const message = "Olá! Vim do site e quero conhecer a Tucont 🚀";
    window.open(`https://wa.me/5531975740510?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-32 right-6 z-50 animate-fade-in">
          <div className="bg-card rounded-2xl shadow-2xl p-4 max-w-xs relative border border-border">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted/80 transition-colors"
              aria-label="Fechar tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-tucont-cta-green rounded-full flex items-center justify-center flex-shrink-0">
                <img 
                  src="/icons/whatsApp.svg" 
                  alt="WhatsApp" 
                  className="h-5" 
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Fale com nossa IA agora!
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Resolva sua demanda em minutos. Nossa equipe está online e pronta para ajudar.
                </p>
              </div>
            </div>
            
            {/* Seta do tooltip */}
            <div className="absolute bottom-[-8px] right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card"></div>
          </div>
        </div>
      )}

      {/* Botão do WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-16 h-16 bg-tucont-cta-green hover:bg-tucont-cta-green/90 rounded-full shadow-2xl flex items-center justify-center z-50 transform hover:scale-110 transition-all duration-300 animate-bounce hover-glow-cta"
        style={{ animationIterationCount: 3, animationDelay: '1s' }}
        aria-label="Abrir chat no WhatsApp"
      >
        <img 
          src="/icons/whatsApp.svg" 
          alt="WhatsApp" 
          className="h-8" 
          width={32}
          height={32}
        />
        
        {/* Ponto de notificação */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse"></div>
        
        {/* Efeito de ripple */}
        <div className="absolute inset-0 rounded-full bg-tucont-cta-green/40 animate-ping opacity-20"></div>
      </button>
    </>
  );
};

export default WhatsappButton;