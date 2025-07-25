'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  content: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ content, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative flex justify-center ${className}`}
    >
      <div className="relative bg-tucont-navy rounded-[3rem] p-2 shadow-2xl w-80 max-w-sm">
        <div className="bg-white rounded-[2.5rem] overflow-hidden">  
           <div className="relative bg-black h-6 rounded-b-2xl mx-auto w-40 mb-1"></div>
          {/* Screen content */}
          <div className=" h-[650px] overflow-hidden">
            {content}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;