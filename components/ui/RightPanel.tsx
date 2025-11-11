
import React from 'react';
import type { OrganData } from '../../types';
import { InfoIcon, ViewIcon, LayersIcon } from './icons';

interface RightPanelProps {
  organData: OrganData;
  opacity: number;
  onOpacityChange: (opacity: number) => void;
  lightingIntensity: number;
  onLightingIntensityChange: (intensity: number) => void;
  isWireframe: boolean;
  onWireframeToggle: (isWireframe: boolean) => void;
}

export function RightPanel({ organData, opacity, onOpacityChange, lightingIntensity, onLightingIntensityChange, isWireframe, onWireframeToggle }: RightPanelProps) {
  return (
    <div className="panel bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
        <InfoIcon />
        Organ Details
      </h2>
      <div id="organ-info">
        <div className="info-card bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded-lg">
          <h3 className="text-cyan-400 text-lg font-semibold mb-2">{organData.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{organData.description}</p>
        </div>
        <div className="stat-grid grid grid-cols-2 gap-4 mt-5">
          {organData.stats.map(stat => (
            <div key={stat.label} className="stat-card text-center bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-400 flex items-center gap-3">
        <ViewIcon />
        View Controls
      </h2>
      <div className="control-group">
        <label htmlFor="opacity" className="block mb-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">Model Opacity</label>
        <input
          type="range"
          id="opacity"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={(e) => onOpacityChange(parseFloat(e.target.value))}
        />
      </div>
      <div className="control-group mt-6">
        <label htmlFor="lighting" className="block mb-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">Lighting Intensity</label>
        <input
          type="range"
          id="lighting"
          min="0"
          max="2"
          step="0.1"
          value={lightingIntensity}
          onChange={(e) => onLightingIntensityChange(parseFloat(e.target.value))}
        />
      </div>

      <div className="layer-item flex justify-between items-center p-3 bg-white/5 rounded-lg mt-6 border border-white/10">
        <label htmlFor="wireframe-toggle" className="font-semibold text-white flex items-center gap-2">
          <LayersIcon />
          Wireframe Mode
        </label>
        <div 
          id="wireframe-toggle"
          onClick={() => onWireframeToggle(!isWireframe)}
          className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${isWireframe ? 'bg-gradient-to-r from-cyan-400 to-green-400' : 'bg-white/10'}`}
        >
          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isWireframe ? 'transform translate-x-6' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}
