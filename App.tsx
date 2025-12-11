import React, { useState, useEffect, useRef } from 'react';
import { Card3D } from './components/Card3D';
import { LoadingSpinner } from './components/LoadingSpinner';
import { DEFAULT_CONFIG } from './constants';
import { CardConfig } from './types';

function App() {
  const [loading, setLoading] = useState(true);
  const [config] = useState<CardConfig>(DEFAULT_CONFIG);
  const [isOpen, setIsOpen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full bg-black z-0">
        <video 
          ref={videoRef}
          src={config.backgroundVideoUrl}
          className="bg-video opacity-60"
          autoPlay 
          loop 
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Vignette/Overlay */}
      </div>

      {/* Loading Overlay */}
      {loading && <LoadingSpinner />}

      {/* Main Content Area */}
      <main className="relative z-10 w-full px-2 md:px-4 flex flex-col items-center justify-center h-full max-h-[98vh]">
        
        {/* Logo if present */}
        {config.logoUrl && (
            <img src={config.logoUrl} className="h-12 mb-8 object-contain" alt="Logo" />
        )}

        {/* The 3D Card */}
        <div className="w-full flex items-center justify-center">
            <Card3D 
              config={config} 
              isOpen={isOpen} 
              onToggle={handleToggle} 
            />
        </div>
        
      </main>

      {/* Footer Branding (Optional) */}
      <div className="absolute bottom-4 right-4 text-white/30 text-xs z-10 pointer-events-none">
        Card Viewer v1.0
      </div>

    </div>
  );
}

export default App;