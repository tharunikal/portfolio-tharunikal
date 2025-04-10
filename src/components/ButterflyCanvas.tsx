// src/components/ButterflyCanvas.tsx

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Butterfly from './Butterfly';

const ButterflyCanvas = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <Butterfly />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ButterflyCanvas;
