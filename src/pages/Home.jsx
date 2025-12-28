import React from 'react';
import ConstellationBackground from '@/components/landing/ConstellationBackground';
import HeroSection from '@/components/landing/HeroSection';
import WhyNowSection from '@/components/landing/WhyNowSection';
import ProductPhilosophy from '@/components/landing/ProductPhilosophy';
import StrategicImpact from '@/components/landing/StrategicImpact';
import RoadmapSection from '@/components/landing/RoadmapSection';
import ContactFooter from '@/components/landing/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E8E8EC] font-light overflow-x-hidden">
      {/* Animated constellation background */}
      <ConstellationBackground />
      
      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection />
        <WhyNowSection />
        <ProductPhilosophy />
        <StrategicImpact />
        <RoadmapSection />
        <ContactFooter />
      </div>
      
      {/* Global noise overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}