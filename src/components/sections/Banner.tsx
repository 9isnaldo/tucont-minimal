"use client";

import { motion } from "framer-motion";
import { ScrollIndicator } from "../ui/scroll-indicator";

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
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
        </motion.h2>
      </div>
      
      <ScrollIndicator 
        lineWidth={10}           // Largura das linhas
        lineHeight={50}          // Altura das linhas
        containerHeight={160}    // Altura do container
        movementRange={10}       // Movimento vertical
        lineCount={130}          // Quantidade de linhas
      />
    </section>
  );
}