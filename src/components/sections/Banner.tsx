"use client";

import { motion } from "framer-motion";

interface BannerProps {
  className?: string;
}

export default function Banner({ className = "" }: BannerProps) {
  return (
    <section className={`py-20 px-6 bg-tucont-orange text-center relative ${className}`}>
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[calc(84vh)]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-8xl max-w-6xl font-black text-white mb-7"
        >
          Sua contabilidade online e pelo whatsapp!
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-tucont-navy mb-8 max-w-4xl"
        >
          Autonomia e Liberdade pra você e por assinatura.
        </motion.h2>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tucont-navy rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
    </section>
  );
}