import React from 'react';
import { CardConfig } from '../types';

interface Card3DProps {
  config: CardConfig;
  isOpen: boolean;
  onToggle: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({ config, isOpen, onToggle }) => {
  return (
    <div className="relative w-full max-w-[1500px] aspect-[2/1] mx-auto z-10 perspective-2000 group">
      {/* 
        Movable Wrapper for Centering
        When closed: The visual center is the right half (folded card). We shift Left by 25% (translate-x-[-25%]) to center the right half in the view.
        When open: The visual center is the spine. We use translate-x-0.
      */}
      <div 
        className={`
          relative w-full h-full preserve-3d transition-transform duration-1000 ease-in-out cursor-pointer
          ${isOpen ? 'translate-x-0' : '-translate-x-[25%]'}
        `}
        onClick={onToggle}
      >
        
        {/* =========================================================
            RIGHT PAGE (Base) - Inside Right & Back Cover
            Position: Fixed on the right half (50% to 100%)
           ========================================================= */}
        <div className="absolute top-0 right-0 w-1/2 h-full preserve-3d z-0">
          {/* Inside Right (Message Area) - Facing User */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white shadow-sm border-l border-gray-100">
            <img 
              src={config.insideRightImage} 
              alt="Message" 
              className="w-full h-full object-cover"
            />
            {/* Inner Shadow near spine */}
            <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black/20 to-transparent pointer-events-none opacity-50" />
          </div>

          {/* Back Cover - Facing Away (Visible if we rotated the whole card 180, not used in this specific view but good for completeness) */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-white"
            style={{ transform: 'rotateY(180deg)' }}
          >
             <img 
              src={config.backImage} 
              alt="Back" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* =========================================================
            LEFT PAGE (The Flap) - Front Cover & Inside Left
            Position: Fixed on the left half (0% to 50%)
            Pivot: Right Edge (The Spine)
           ========================================================= */}
        <div 
          className={`
            absolute top-0 left-0 w-1/2 h-full preserve-3d origin-right z-20
            transition-transform duration-1000 ease-in-out
            shadow-xl
          `}
          style={{ 
             transform: isOpen ? 'rotateY(0deg)' : 'rotateY(180deg)',
          }}
        >
          {/* FACE A: Inside Left - Visible when OPEN (0deg) */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-white border-r border-gray-100"
            style={{ transform: 'rotateY(0deg)' }}
          >
            <img 
              src={config.insideLeftImage} 
              alt="Inside Left" 
              className="w-full h-full object-cover"
            />
            {/* Inner Shadow near spine */}
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none opacity-50" />
            
            {/* Dynamic Shine when opening (fades out as it flattens) */}
             <div 
                className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 pointer-events-none transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
             />
          </div>

          {/* FACE B: Front Cover - Visible when CLOSED (180deg) 
              Note: Since the flap rotates 180deg to close, and this face is rotated 180deg relative to the flap,
              180 + 180 = 360 (0). This becomes the front face when closed.
          */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-white"
            style={{ transform: 'rotateY(180deg)' }}
          >
             <img 
              src={config.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
             {/* Dynamic Lighting: Darkens slightly as it opens (turns away from light) */}
             <div 
                className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-1000 ${isOpen ? 'opacity-40' : 'opacity-0'}`}
             />
             {/* Shine effect on the cover texture */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>

        {/* =========================================================
             Drop Shadow (Floor)
           ========================================================= */}
        <div 
           className={`
             absolute -bottom-16 left-1/2 w-3/4 h-12 bg-black/40 blur-2xl rounded-[100%] transition-all duration-1000
             ${isOpen 
                ? '-translate-x-1/2 scale-x-100 opacity-60' // Wide shadow when open
                : 'translate-x-[0%] scale-x-50 opacity-80'   // Condensed shadow under the right half when closed
              }
           `}
        />

      </div>
    </div>
  );
};