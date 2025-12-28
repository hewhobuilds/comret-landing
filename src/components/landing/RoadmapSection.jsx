import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
  {
    phase: "Phase 1",
    status: "Current",
    title: "Prototype Validation",
    description: "Text & Entity Extraction",
    details: [
      "Natural Language Processing for FIRs and Statements",
      "Named Entity Recognition (Suspects, Victims, Locations)",
      "Document Classification & Metadata Extraction",
      "Basic Graph Relationship Mapping"
    ],
    progress: 75,
    active: true,
    completionDate: "2025"
  },
  {
    phase: "Phase 2",
    status: "2025",
    title: "Multimodal Ingestion",
    description: "CCTV & Audio Processing",
    details: [
      "Video Analysis & Facial Recognition Integration",
      "Audio Transcription & Speaker Identification",
      "Image Forensics & Metadata Extraction",
      "Multi-Source Data Fusion"
    ],
    progress: 0,
    active: false,
    completionDate: "2026"
  },
  {
    phase: "Phase 3",
    status: "2026",
    title: "CCTNS Integration",
    description: "National Database Layer",
    details: [
      "CCTNS API Integration & Data Sync",
      "Cross-State Case Linking",
      "National Criminal Database Access",
      "Real-Time Intelligence Updates"
    ],
    progress: 0,
    active: false,
    completionDate: "2026"
  }
];

export default function RoadmapSection() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [hoveredPhase, setHoveredPhase] = useState(null);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141417]/50 via-transparent to-[#141417]/50" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[#6B6B76] text-xs tracking-[0.3em] uppercase font-light mb-4 block">
            Development Trajectory
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#E8E8EC] tracking-[0.01em]">
            Deployment Phases
          </h2>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline navigation */}
          <div className="flex items-center justify-between mb-16 relative">
            {/* Background track */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-[#1E1E23]" />
            
            {/* Animated progress line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: phases[0].progress / 100 * 0.33 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-gradient-to-r from-[#E8E8EC] via-[#6B6B76] to-[#3A3A42] origin-left"
              style={{ width: '33.33%' }}
            />

            {/* Phase nodes */}
            <div className="relative z-10 flex justify-between w-full">
              {phases.map((phase, index) => (
                <motion.button
                  key={phase.phase}
                  onClick={() => setSelectedPhase(index)}
                  onHoverStart={() => setHoveredPhase(index)}
                  onHoverEnd={() => setHoveredPhase(null)}
                  className="group relative flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Node circle */}
                  <div className={`relative w-6 h-6 rounded-full border-2 transition-all duration-500 ${
                    phase.active 
                      ? 'border-[#E8E8EC] bg-[#E8E8EC] shadow-[0_0_20px_rgba(232,232,236,0.3)]' 
                      : selectedPhase === index
                      ? 'border-[#6B6B76] bg-[#6B6B76]'
                      : 'border-[#3A3A42] bg-[#0A0A0B]'
                  }`}>
                    {phase.active && (
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-[#E8E8EC]"
                      />
                    )}
                    
                    {/* Checkmark for active phase */}
                    {phase.progress > 0 && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 w-full h-full text-[#0A0A0B]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    )}
                  </div>

                  {/* Phase label */}
                  <span className={`mt-3 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    selectedPhase === index || hoveredPhase === index
                      ? 'text-[#E8E8EC]'
                      : 'text-[#6B6B76]'
                  }`}>
                    {phase.phase}
                  </span>

                  {/* Connecting lines between nodes */}
                  {index < phases.length - 1 && (
                    <div className="absolute top-3 left-full w-full h-[2px] pointer-events-none" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Phase details panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="border border-[#1E1E23] bg-[#141417]/40 backdrop-blur-sm p-8 md:p-12">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] pointer-events-none" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                      <span className={`text-[10px] tracking-[0.3em] uppercase mb-3 block ${
                        phases[selectedPhase].active ? 'text-[#E8E8EC]' : 'text-[#6B6B76]'
                      }`}>
                        {phases[selectedPhase].status}
                      </span>
                      <h3 className="text-2xl md:text-3xl text-[#E8E8EC] font-extralight tracking-wide mb-2">
                        {phases[selectedPhase].title}
                      </h3>
                      <p className="text-[#6B6B76] font-light">
                        {phases[selectedPhase].description}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    {phases[selectedPhase].active && (
                      <div className="flex flex-col items-end">
                        <span className="text-[#6B6B76] text-xs tracking-wider mb-2">PROGRESS</span>
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-1 bg-[#1E1E23] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${phases[selectedPhase].progress}%` }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full bg-gradient-to-r from-[#E8E8EC] to-[#6B6B76]"
                            />
                          </div>
                          <span className="text-[#E8E8EC] text-xl font-light">
                            {phases[selectedPhase].progress}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {phases[selectedPhase].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1.5 shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3A3A42] group-hover:bg-[#6B6B76] transition-colors duration-300" />
                        </div>
                        <span className="text-[#6B6B76] text-sm font-light leading-relaxed group-hover:text-[#E8E8EC] transition-colors duration-300">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Completion date */}
                  <div className="mt-8 pt-6 border-t border-[#1E1E23] flex items-center justify-between">
                    <span className="text-[#6B6B76] text-xs tracking-[0.2em] uppercase">
                      Target Completion
                    </span>
                    <span className="text-[#E8E8EC] font-light">
                      {phases[selectedPhase].completionDate}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E8E8EC] shadow-[0_0_10px_rgba(232,232,236,0.3)]" />
              <span className="text-[#6B6B76] text-xs tracking-wide">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-[#3A3A42] bg-[#0A0A0B]" />
              <span className="text-[#6B6B76] text-xs tracking-wide">Upcoming</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}