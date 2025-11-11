
import React, { useState, useCallback } from 'react';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { LeftPanel } from './components/ui/LeftPanel';
import { RightPanel } from './components/ui/RightPanel';
import { Viewer } from './components/Viewer';
import { ORGAN_DATA, ORGANS } from './constants';
import type { OrganType } from './types';

function App() {
  const [selectedOrgan, setSelectedOrgan] = useState<OrganType>('heart');
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.5);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [opacity, setOpacity] = useState<number>(1);
  const [lightingIntensity, setLightingIntensity] = useState<number>(1);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  
  const selectedOrganData = ORGAN_DATA[selectedOrgan];

  const handleReset = useCallback(() => {
    // This function will be passed to a component that can trigger a reset.
    // The actual reset logic is handled inside the Viewer component via a key prop change.
    // To trigger a re-mount and reset of the Viewer's internal state (like camera position),
    // we can change a `key` prop on the Viewer component.
    // However, a simpler method is to have a dedicated reset function inside the Viewer
    // exposed via an imperative handle, or just handle it internally.
    // For this app, we will let the Viewer have its own reset logic triggered by a prop.
    // But since the button is in LeftPanel, we need to manage a trigger state here.
    setResetTrigger(c => c + 1);
  }, []);

  const [resetTrigger, setResetTrigger] = useState(0);

  return (
    <div className="container mx-auto p-4 md:p-5 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-[300px_1fr_350px] gap-5 mb-5">
        <LeftPanel
          organs={ORGANS}
          selectedOrgan={selectedOrgan}
          onSelectOrgan={setSelectedOrgan}
          rotationSpeed={rotationSpeed}
          onRotationSpeedChange={setRotationSpeed}
          isAnimating={isAnimating}
          onAnimationToggle={setIsAnimating}
          onReset={handleReset}
        />
        <div className="panel bg-white/5 backdrop-blur-md rounded-2xl p-2 sm:p-4 border border-white/10 flex flex-col min-h-[500px] lg:min-h-0">
           <Viewer 
            key={resetTrigger} // Change key to force re-mount and reset state
            modelUrl={selectedOrganData.file}
            isAnimating={isAnimating}
            rotationSpeed={rotationSpeed}
            opacity={opacity}
            lightingIntensity={lightingIntensity}
            isWireframe={isWireframe}
           />
           <div className="info-card bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded-lg mt-5">
              <h3 className="font-bold text-cyan-400">Controls</h3>
              <p className="text-gray-300 text-sm mt-2">
                <strong>Rotate:</strong> Left-click + drag<br/>
                <strong>Zoom:</strong> Mouse wheel<br/>
                <strong>Pan:</strong> Right-click + drag
              </p>
            </div>
        </div>
        <RightPanel
          organData={selectedOrganData}
          opacity={opacity}
          onOpacityChange={setOpacity}
          lightingIntensity={lightingIntensity}
          onLightingIntensityChange={setLightingIntensity}
          isWireframe={isWireframe}
          onWireframeToggle={setIsWireframe}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
