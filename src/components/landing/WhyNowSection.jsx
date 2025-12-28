import React from 'react';
import { motion } from 'framer-motion';

const insights = [
  {
    title: "Drowning in Data",
    description: "Law enforcement agencies must manually analyze FIRs, witness statements, forensic reports, CDRs, and ID records-often spread across hundreds of unstructured documents."
  },
  {
    title: "Missed Connections",
    description: "Human error in tracking identifiers. Inefficient keyword searches that fail to capture context. Critical connections discovered too late, or never."
  },
  {
    title: "The Cost",
    description: "Missed links between suspects, evidence, and cases. The bottleneck isn't the law, it's the data processing capacity that threatens justice."
  }
];

export default function WhyNowSection() {
  return (
    <section className="relative py-32 px-6">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#3A3A42] to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[#6B6B76] text-xs tracking-[0.3em] uppercase font-light mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#E8E8EC] tracking-[0.01em]">
            Modern Criminal Investigations Are Drowning in Data
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              {/* Frosted glass card */}
              <div className="relative p-8 h-full border border-[#1E1E23] bg-[#141417]/40 backdrop-blur-sm transition-all duration-500 group-hover:border-[#3A3A42] group-hover:bg-[#141417]/60">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#3A3A42] group-hover:bg-[#6B6B76] transition-colors duration-500" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#3A3A42] group-hover:bg-[#6B6B76] transition-colors duration-500" />
                
                <span className="text-[#6B6B76] text-[10px] tracking-[0.3em] uppercase mb-6 block">
                  0{index + 1}
                </span>
                
                <h3 className="text-xl text-[#E8E8EC] font-light tracking-wide mb-4">
                  {insight.title}
                </h3>
                
                <p className="text-[#6B6B76] font-light leading-relaxed text-sm">
                  {insight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}