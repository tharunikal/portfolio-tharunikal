// src/components/Butterfly.tsx

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Butterfly() {
  const groupRef = useRef<THREE.Group>(null!);

  // Generate 300 random particle positions
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 300; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      positions.push([x, y, z]);
    }
    return positions;
  }, []);

  // Rotate particles slowly
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshStandardMaterial color="#f8e6d3" emissive="#f8e6d3" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default Butterfly;
