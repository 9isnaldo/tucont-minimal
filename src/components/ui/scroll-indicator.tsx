"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface ScrollIndicatorProps {
  lineWidth?: number;          // Largura das linhas em pixels
  lineHeight?: number;         // Altura máxima das linhas em pixels
  containerHeight?: number;    // Altura total do container
  movementRange?: number;      // Alcance do movimento vertical
  lineCount?: number;          // Quantidade de linhas
}

export const ScrollIndicator = ({
  lineWidth = 8,              // Largura padrão mais visível
  lineHeight = 50,            // Altura média
  containerHeight = 160,      // Altura do container
  movementRange = 15,         // Movimento vertical
  lineCount = 50              // Quantidade generosa de linhas
}: ScrollIndicatorProps) => {
  // Configuração das linhas centrais
  const centerLines = useMemo(() => {
    return Array.from({ length: lineCount }).map((_, i) => ({
      id: `center-${i}`,
      duration: 1.2 + Math.random() * 0.8,
      delay: Math.random() * 0.5,
      height: lineHeight * 0.4 + Math.random() * lineHeight * 0.6,
      direction: Math.random() > 0.5 ? 1 : -1,
      opacity: 0.5 + Math.random() * 0.3
    }));
  }, [lineHeight, lineCount]);

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 flex justify-center items-end"
      style={{ height: `${containerHeight}px` }}
    >
      {/* Grupo central - ocupa toda a largura */}
      <div className="w-full h-full flex justify-center items-end space-x-1 px-4">
        {centerLines.map((line) => (
          <motion.div
            key={line.id}
            className="bg-white rounded-full"
            initial={{ height: 0 }}
            animate={{
              height: [0, line.height, 0],
              y: [0, movementRange * line.direction, 0]
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              opacity: line.opacity,
              width: `${lineWidth}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};