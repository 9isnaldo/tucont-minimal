'use client';

import { useState } from "react";
import { Bot } from "lucide-react";

const InteractiveAi = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = () => {
    if (!inputValue.trim()) return;
    console.log("Texto enviado:", inputValue);
    // Adicione aqui a lógica de submit se necessário
  };

  return (
    <div className="w-full max-w-4xl px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 md:p-16 flex items-center gap-4">
        <div className="flex-1 px-4 py-4">
          <input
            type="text"
            placeholder="Digite sua ideia ou plano. A tucont dará vida a ele"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
            className="w-full text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none text-xl"
          />
        </div>
        <button
          onClick={handleInputSubmit}
          disabled={!inputValue.trim()}
          className={`
            bg-orange-400 hover:bg-tucont-orange 
            text-white rounded-full md:px-8 md:py-4 
            font-medium transition-all duration-300 
            flex items-center gap-3 shadow-md hover:shadow-lg 
            text-lg disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <Bot className="w-6 h-6 md:w-8 md:h-8 items-center justify-center" />
        </button>
      </div>
    </div>
  );
};

export default InteractiveAi;