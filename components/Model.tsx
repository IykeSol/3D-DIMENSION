import React, { useRef, useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// FIX: Moved import to the top of the file.
import { ORGAN_DATA, ORGANS } from '../constants';

interface ModelProps {
  url: string;
  isAnimating: boolean;
  rotationSpeed: number;
  opacity: number;
  isWireframe: boolean;
}

export function Model({ url, isAnimating, rotationSpeed, opacity, isWireframe }: ModelProps) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null!);

  useLayoutEffect(() => {
    // Auto-scale and center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    scene.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 8 / maxDim;
    scene.scale.setScalar(scale);
    
    // Enhance materials
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Ensure material is an array
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        
        const newMaterials = materials.map(mat => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            const newMat = mat.clone();
            newMat.metalness = 0.2;
            newMat.roughness = 0.7;
            newMat.side = THREE.DoubleSide; // Render both sides
            return newMat;
          }
          return mat;
        });

        mesh.material = newMaterials.length === 1 ? newMaterials[0] : newMaterials;
      }
    });

  }, [scene]);

  useFrame((_, delta) => {
    // Apply runtime props
    if (modelRef.current) {
      if (isAnimating) {
        modelRef.current.rotation.y += delta * rotationSpeed;
      }
      modelRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
           const materials = Array.isArray((child as THREE.Mesh).material) ? (child as THREE.Mesh).material : [(child as THREE.Mesh).material];
           materials.forEach(mat => {
             if (mat instanceof THREE.MeshStandardMaterial) {
                mat.wireframe = isWireframe;
                mat.opacity = opacity;
                mat.transparent = opacity < 1;
             }
           });
        }
      });
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

// Preload models for faster switching
ORGANS.forEach(organ => useGLTF.preload(ORGAN_DATA[organ.id].file));
