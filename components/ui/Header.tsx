
import React from 'react';

export function Header() {
  return (
    <header className="text-center py-6 bg-white/5 backdrop-blur-md rounded-2xl mb-5 border border-white/10">
      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
        Medical-Grade 3D Organ Visualization
      </h1>
      <p className="text-base md:text-lg text-gray-400 font-light">
        Professional Interactive Anatomy with Real Medical Models
      </p>
    </header>
  );
}
