import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Unified Intelligence System",
    description: "Converts scattered case files, FIRs, statements, forensic reports, CDRs, ID records, into a single, searchable knowledge graph. No more manual document hunting.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Natural Language Querying",
    description: "Ask questions like a human. \"Show me all cases involving this phone number in 2024.\" The system understands context, not just keywords.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" stroke="currentColor" strokeWidth="0.5" />
        <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="0.5" />
        <line x1="16" y1="6" x2="16" y2="26" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    title: "Instant Relationship Discovery",
    description: "Automatically uncovers hidden connections between suspects, evidence, locations, and documents. Critical insights in seconds, not weeks.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L28 16L16 28L4 16L16 4Z" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  }
];

export default function ProductPhilosophy() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141417]/50 to-transparent" />
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[#6B6B76] text-xs tracking-[0.3em] uppercase font-light mb-4 block">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#E8E8EC] tracking-[0.01em]">
            From Chaos to Clarity
          </h2>
        </motion.div>

        <div className="space-y-1">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-8 md:p-12 border border-[#1E1E23] bg-[#0A0A0B]/80 backdrop-blur-sm transition-all duration-700 hover:border-[#3A3A42] hover:bg-[#141417]/40">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Icon */}
                <div className="relative text-[#3A3A42] group-hover:text-[#6B6B76] transition-colors duration-500 shrink-0">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3 className="text-xl md:text-2xl text-[#E8E8EC] font-light tracking-wide mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B6B76] font-light leading-relaxed max-w-2xl">
                    {feature.description}
                  </p>
                </div>

                {/* Index */}
                <div className="relative text-[#1E1E23] text-6xl md:text-8xl font-extralight tracking-tighter group-hover:text-[#3A3A42] transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}