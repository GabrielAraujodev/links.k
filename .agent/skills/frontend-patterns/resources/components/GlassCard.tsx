import React from 'react';

/**
 * GlassCard Component
 * A premium surface following the Cinematic Design guidelines.
 * Features: backdrop-filter blur, semi-transparent border, and inner glow.
 */
export const GlassCard = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`relative overflow-hidden bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-slate-900/50 ${className}`}
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Dynamic Sheen Effect Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent opacity-50" />
    </div>
  );
};
