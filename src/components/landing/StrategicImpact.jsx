import React from 'react';
import { motion } from 'framer-motion';

export default function StrategicImpact() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#3A3A42] to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[#6B6B76] text-xs tracking-[0.3em] uppercase font-light mb-4 block">
            Strategic Alignment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#E8E8EC] tracking-[0.01em]">
            Aligned with the National Vision
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Atmanirbhar Bharat - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden"
          >
            {/* Gradient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E8EC]/[0.03] via-transparent to-[#6B6B76]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated border glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(232, 232, 236, 0)",
                  "0 0 30px rgba(232, 232, 236, 0.05)",
                  "0 0 0px rgba(232, 232, 236, 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full p-12 md:p-16 border-2 border-[#1E1E23] bg-[#141417]/50 backdrop-blur-sm transition-all duration-500 group-hover:border-[#3A3A42]"
            >
              {/* Large animated India shape */}
              <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 opacity-[0.08] group-hover:opacity-[0.15] transition-all duration-700">
                <motion.svg
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  width="300" height="300" viewBox="0 0 200 200" fill="none"
                >
                  <motion.polygon
                    points="100,10 150,50 160,110 130,170 70,170 40,110 50,50"
                    stroke="#E8E8EC"
                    strokeWidth="0.5"
                    fill="url(#india-gradient)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="100" cy="100" r="25"
                    stroke="#E8E8EC"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <defs>
                    <radialGradient id="india-gradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E8E8EC" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#E8E8EC" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </motion.svg>
              </div>

              <div className="relative">
                {/* Header with enhanced styling */}
                <div className="mb-12">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#E8E8EC]/60 text-xs tracking-[0.4em] uppercase mb-4 block font-light"
                  >
                    National Initiative
                  </motion.span>
                  
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl text-[#E8E8EC] font-extralight tracking-wide mb-4 relative inline-block"
                  >
                    Atmanirbhar Bharat
                    <motion.div
                      className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-[#E8E8EC] to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-[#6B6B76] text-sm md:text-base font-light leading-relaxed max-w-2xl"
                  >
                    Building sovereign technology for national security and self-reliance in the digital age.
                  </motion.p>
                </div>

                {/* Enhanced pillars grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {[
                    { title: 'Indigenous Technology', desc: 'Developed in India, for India' },
                    { title: 'Data Sovereignty', desc: 'Complete control over sensitive information' },
                    { title: 'Self-Reliance', desc: 'Reducing dependence on foreign solutions' },
                    { title: 'National Security', desc: 'Air-gapped, secure intelligence systems' },
                    { title: 'Digital India', desc: 'Empowering law enforcement with AI' },
                    { title: 'Strategic Autonomy', desc: 'Independent decision-making capabilities' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      className="group/item relative"
                    >
                      <div className="flex items-start gap-4 p-5 border border-[#1E1E23] bg-[#0A0A0B]/40 backdrop-blur-sm transition-all duration-500 hover:border-[#3A3A42] hover:bg-[#141417]/40">
                        {/* Animated dot */}
                        <div className="relative mt-1.5 shrink-0">
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 rounded-full bg-[#6B6B76]"
                          />
                          <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#6B6B76] blur-sm" />
                        </div>
                        
                        <div>
                          <h4 className="text-[#E8E8EC] font-light tracking-wide mb-1 group-hover/item:text-white transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[#6B6B76] text-xs font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="mt-12 pt-8 border-t border-[#1E1E23] flex items-center justify-center gap-4 origin-center"
                >
                  <div className="w-2 h-2 border border-[#6B6B76] rotate-45" />
                  <span className="text-[#6B6B76] text-xs tracking-[0.25em] uppercase">
                    Made in India
                  </span>
                  <div className="w-2 h-2 border border-[#6B6B76] rotate-45" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}