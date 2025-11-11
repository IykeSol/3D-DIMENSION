import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Model } from './Model';
import { LoadingOverlay } from './ui/LoadingOverlay';

interface ViewerProps {
  modelUrl: string;
  isAnimating: boolean;
  rotationSpeed: number;
  opacity: number;
  lightingIntensity: number;
  isWireframe: boolean;
}

// FIX: Changed component to be of type React.FC to correctly handle the 'key' prop and resolve the TypeScript error.
export const Viewer: React.FC<ViewerProps> = ({ modelUrl, isAnimating, rotationSpeed, opacity, lightingIntensity, isWireframe }) => {
  return (
    <div id="viewer-container" className="relative h-full w-full bg-radial-gradient from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-cyan-400/20">
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
        <Suspense fallback={<LoadingOverlay />}>
          <Stage environment="city" intensity={lightingIntensity * 0.5} shadows={{ type: 'contact', opacity: 0.3, blur: 2 }}>
            <Model 
              url={modelUrl} 
              isAnimating={isAnimating}
              rotationSpeed={rotationSpeed}
              opacity={opacity}
              isWireframe={isWireframe}
            />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault autoRotate={false} />
      </Canvas>
    </div>
  );
}