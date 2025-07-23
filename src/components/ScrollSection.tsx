'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PhoneMockup from '@/components/PhoneMockup';

interface ScrollItem {
  title: string;
  description: string;
  image: string;
}

interface ScrollSectionProps {
  title: string;
  items: ScrollItem[];
  ctaText?: string;
  ctaButton?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ title, items, ctaText, ctaButton }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasCompletedScroll, setHasCompletedScroll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!inView) return;
      
      // If scroll is completed, allow normal scrolling
      if (hasCompletedScroll) {
        return;
      }

      e.preventDefault();
      
      if (!isScrollLocked) {
        setIsScrollLocked(true);
        
        if (e.deltaY > 0) {
          // Scrolling down
          setCurrentIndex(prev => {
            const nextIndex = Math.min(prev + 1, items.length - 1);
            if (nextIndex === items.length - 1 && prev === items.length - 1) {
              // Reached the end, unlock scroll after a delay
              setTimeout(() => {
                setHasCompletedScroll(true);
               document.body.style.overflow = 'auto';
              }, 500);
            }
            return nextIndex;
          });
        } else {
          // Scrolling up
          setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
        
        // Unlock scroll after animation
        setTimeout(() => {
          setIsScrollLocked(false);
        }, 800);
      }
    };

    if (inView && !hasCompletedScroll) {
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [inView, hasCompletedScroll, items.length]);

  // Reset when section comes back into view
  useEffect(() => {
    if (inView && hasCompletedScroll && currentIndex > 0) {
      setHasCompletedScroll(false);
      setCurrentIndex(0);
    }
  }, [inView, hasCompletedScroll, currentIndex]);

  // Ensure scroll is always unlocked when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const phoneContent = (
    <div className="flex items-center justify-center rounded-2xl overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/video-demo.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-32 px-6 min-h-screen flex items-center justify-center">
      <div ref={ref} className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-tucont-navy text-center mb-20"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-center">
          <PhoneMockup content={phoneContent} />

          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-tucont-navy">
                  {items[currentIndex]?.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {items[currentIndex]?.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex space-x-2 mt-8">
              {items.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-tucont-orange w-8' 
                      : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>

            {ctaText && currentIndex === items.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 bg-gradient-to-r from-tucont-orange to-tucont-orange-light rounded-2xl text-white"
              >
                <p className="text-lg mb-4 font-medium">{ctaText}</p>
                {ctaButton && (
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-tucont-navy px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 inline-block shadow-lg"
                  >
                    {ctaButton}
                  </a>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        {inView && !hasCompletedScroll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12 text-gray-500 text-sm"
          >
            Role para navegar pelos serviços
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ScrollSection;