import React from 'react';

/**
 * CinematicButton Component
 * A premium button with tactile micro-interactions and smooth transitions.
 */
export const CinematicButton = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyles = "relative px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform active:scale-[0.98] hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden group";

    const variants = {
        primary: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/40",
        glass: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20",
        outline: "bg-transparent text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>

            {/* Light Sweep Animation on Hover */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-sweep" />
        </button>
    );
};
