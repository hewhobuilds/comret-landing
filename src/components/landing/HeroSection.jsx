import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Animation variants for letter-by-letter reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth, professional feel
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.8, // Appears after COMRET finishes
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const title = "COMRET";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Logo/Brand mark - Perfectly Centered and Animated */}
        <div className="mb-16 flex flex-col items-center justify-center">
          {/* Main Title - Letter-by-letter reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center mb-6"
          >
            {title.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block text-5xl md:text-7xl lg:text-8xl font-extralight text-[#E8E8EC] tracking-[0.2em]"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  textShadow: "0 0 40px rgba(232, 232, 236, 0.12)"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle - Perfectly aligned and balanced */}
          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center w-full max-w-2xl"
          >
            <p className="text-[#6B6B76] text-xs md:text-sm tracking-[0.3em] uppercase font-light text-center px-4"
               style={{ 
                 fontFamily: "'Inter', sans-serif",
                 letterSpacing: '0.3em',
                 wordSpacing: '0.1em'
               }}
            >
              Computational Retrieval & Evidence Tracking
            </p>
          </motion.div>

          {/* Subtle underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#3A3A42] to-transparent origin-center"
          />
        </div>

        {/* Main headline */}
        <h2 
          className="text-3xl md:text-5xl lg:text-6xl font-extralight text-[#E8E8EC] tracking-[0.02em] leading-[1.1] mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The Future of
          <br />
          <span className="relative">
            Sovereign Intelligence
            <motion.span
              className="absolute -inset-2 bg-white/[0.02] blur-xl rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </span>
        </h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-[#6B6B76] font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
        >
          An AI-powered investigative assistant that converts scattered case files into a unified, searchable intelligence system. Query your entire case history in natural language and instantly uncover hidden relationships between people, places, documents, and evidence.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#3A3A42] to-transparent"
        />
      </motion.div>
    </section>
  );
}