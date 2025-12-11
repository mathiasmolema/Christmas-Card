import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, RotateCcw } from 'lucide-react';

interface CardControlsProps {
  isOpen: boolean;
  onToggle: () => void;
  canFlip: boolean;
}

export const CardControls: React.FC<CardControlsProps> = ({ isOpen, onToggle, canFlip }) => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20">
      <button 
        onClick={onToggle}
        disabled={!canFlip && !isOpen}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300
          ${isOpen 
            ? 'bg-white/20 hover:bg-white/30 text-white' 
            : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
          }
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        {isOpen ? (
          <>
            <RotateCcw size={18} />
            <span className="font-medium">Close Card</span>
          </>
        ) : (
          <>
            <BookOpen size={18} />
            <span className="font-medium">Open Card</span>
          </>
        )}
      </button>

      {/* Decorative Arrows matching reference style roughly */}
      <div className={`hidden md:flex gap-4 text-white/70 transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
         <span className="text-sm font-light tracking-wide animate-pulse">Click to open</span>
      </div>
    </div>
  );
};