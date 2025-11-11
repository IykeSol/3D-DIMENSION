
import React from 'react';
import { useProgress, Html } from '@react-three/drei';

export function LoadingOverlay() {
  const { progress, total, loaded, item } = useProgress();

  return (
    <Html center>
      <div className="bg-black/95 text-white p-8 rounded-2xl w-80 flex flex-col items-center justify-center font-sans">
        <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold">Loading 3D Model...</p>
        <div className="w-full bg-white/10 rounded-full h-1.5 mt-4">
          <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-400">{Math.round(progress)}%</p>
      </div>
    </Html>
  );
}
