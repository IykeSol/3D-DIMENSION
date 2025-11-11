
import React from 'react';
import type { OrganType, OrganList } from '../../types';
import { OrganIcon, PlayIcon, PauseIcon, ResetIcon, SpeedIcon } from './icons';

interface LeftPanelProps {
  organs: OrganList[];
  selectedOrgan: OrganType;
  onSelectOrgan: (organ: OrganType) => void;
  rotationSpeed: number;
  onRotationSpeedChange: (speed: number) => void;
  isAnimating: boolean;
  onAnimationToggle: (isAnimating: boolean) => void;
  onReset: () => void;
}

export function LeftPanel({ organs, selectedOrgan, onSelectOrgan, rotationSpeed, onRotationSpeedChange, isAnimating, onAnimationToggle, onReset }: LeftPanelProps) {
  return (
    <div className="panel bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
        <OrganIcon />
        Select Organ
      </h2>
      <div className="space-y-3">
        {organs.map(organ => (
          <button
            key={organ.id}
            onClick={() => onSelectOrgan(organ.id)}
            className={`w-full text-left p-4 rounded-xl text-white font-semibold transition-all duration-300 text-base border-2
              ${selectedOrgan === organ.id
                ? 'bg-gradient-to-r from-cyan-500/30 to-green-500/30 border-cyan-400 shadow-lg shadow-cyan-500/20'
                : 'bg-cyan-500/5 border-cyan-400/20 hover:bg-cyan-500/10 hover:border-cyan-400'
              }`}
          >
            {organ.name}
          </button>
        ))}
      </div>
      
      <div className="control-group mt-8">
        <label htmlFor="rotation-speed" className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">
          <SpeedIcon />
          Rotation Speed
        </label>
        <input
          type="range"
          id="rotation-speed"
          min="0"
          max="2"
          step="0.1"
          value={rotationSpeed}
          onChange={(e) => onRotationSpeedChange(parseFloat(e.target.value))}
        />
      </div>

      <div className="animation-controls mt-5 flex gap-3">
        <button 
          onClick={() => onAnimationToggle(true)} 
          className={`control-btn ${isAnimating ? 'active' : ''}`}
          aria-label="Play animation"
        >
          <PlayIcon />
        </button>
        <button 
          onClick={() => onAnimationToggle(false)} 
          className={`control-btn ${!isAnimating ? 'active' : ''}`}
          aria-label="Pause animation"
        >
          <PauseIcon />
        </button>
        <button onClick={onReset} className="control-btn" aria-label="Reset view">
          <ResetIcon />
        </button>
      </div>
      <style>{`
        .control-btn {
          flex: 1;
          padding: 12px;
          background: rgba(0, 212, 255, 0.1);
          border: 2px solid rgba(0, 212, 255, 0.2);
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .control-btn:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: #00d4ff;
        }
        .control-btn.active {
          background: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
          border-color: #00d4ff;
          color: #000;
        }
      `}</style>
    </div>
  );
}
