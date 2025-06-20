// Scene.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function RotatingModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  scene.position.set(0, -0.5, 0);
  return <primitive object={scene} scale={0.5} />;
}

export default function Scene({ modelPath = '/model.glb' }) {
  return (
   <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true }} 
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={null}>
        <RotatingModel modelPath={modelPath} />
      </Suspense>
      <OrbitControls 
  enableZoom={false}
  enablePan={false}
  enableRotate={false}
  autoRotate
  autoRotateSpeed={1}
/>
    </Canvas>
  );
}
