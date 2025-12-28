import React from 'react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <footer className="relative py-32 px-6">
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#3A3A42] to-transparent" />
      
      <div className="max-w-3xl mx-auto">
        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-[#1E1E23]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[#3A3A42] text-xs tracking-wide">
            <div className="flex items-center gap-2">
              <span className="text-[#6B6B76]">COMRET</span>
              <span>•</span>
              {/* <span>Forensic GraphRAG</span> */}
            </div>
            
            <div className="flex items-center gap-2">
              <span>Bhubaneswar, India</span>
            </div>
            
            <div>
              © 2025 All Rights Reserved
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}