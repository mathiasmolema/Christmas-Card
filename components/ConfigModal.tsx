import React, { useState } from 'react';
import { X, Upload, Save, FileText } from 'lucide-react';
import { CardConfig } from '../types';

interface ConfigModalProps {
  currentConfig: CardConfig;
  onSave: (config: CardConfig) => void;
  onClose: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ currentConfig, onSave, onClose }) => {
  const [config, setConfig] = useState<CardConfig>(currentConfig);
  const [pdfUrl, setPdfUrl] = useState('');

  const handlePdfSimulation = () => {
    if (!pdfUrl) return;
    // In a real app with backend, this would process the PDF.
    // Here we simulate the extraction by just keeping the default images 
    // but updating the "source" logically. 
    // To make it feel real, we'll just alert the user for this demo.
    alert("In a production environment, this would process: " + pdfUrl + " and extract pages 1-4. For this demo, please manually paste the image URLs of your card pages below.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in text-gray-800">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FileText className="text-blue-600" />
            Card Setup
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <label className="block text-sm font-semibold text-blue-900 mb-2">Upload PDF (Simulator)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="https://example.com/my-card.pdf" 
                className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
              />
              <button 
                onClick={handlePdfSimulation}
                className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors"
              >
                Process PDF
              </button>
            </div>
            <p className="text-xs text-blue-700 mt-2">
              * Since browsers cannot render PDF pages as images natively without heavy libraries, 
              please input the direct Image URLs for the 4 pages below for this demo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Cover Page Image URL</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                value={config.coverImage}
                onChange={(e) => setConfig({...config, coverImage: e.target.value})}
              />
              <div className="w-full aspect-square bg-gray-100 rounded-md overflow-hidden relative border border-dashed border-gray-300">
                 <img src={config.coverImage} className="w-full h-full object-cover" alt="Preview" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Inside Left Image URL</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                value={config.insideLeftImage}
                onChange={(e) => setConfig({...config, insideLeftImage: e.target.value})}
              />
              <div className="w-full aspect-square bg-gray-100 rounded-md overflow-hidden relative border border-dashed border-gray-300">
                 <img src={config.insideLeftImage} className="w-full h-full object-cover" alt="Preview" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Inside Right Image URL</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                value={config.insideRightImage}
                onChange={(e) => setConfig({...config, insideRightImage: e.target.value})}
              />
               <div className="w-full aspect-square bg-gray-100 rounded-md overflow-hidden relative border border-dashed border-gray-300">
                 <img src={config.insideRightImage} className="w-full h-full object-cover" alt="Preview" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            </div>

             <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Background Video URL</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                value={config.backgroundVideoUrl}
                onChange={(e) => setConfig({...config, backgroundVideoUrl: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
                onSave(config);
                onClose();
            }}
            className="px-6 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors flex items-center gap-2 shadow-lg"
          >
            <Save size={18} />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};