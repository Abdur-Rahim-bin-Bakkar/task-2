"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Octahedron, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ Shape, args, position, rotation, color, speed = 1 }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.12;
    ref.current.rotation.x = rotation[0] + t * 0.3;
    ref.current.rotation.y = rotation[1] + t * 0.2;
  });

  return (
    <Shape ref={ref} args={args} position={position} rotation={rotation}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.35}
        wireframe
        roughness={0.5}
        metalness={0.6}
      />
    </Shape>
  );
}

export default function FloatingGeometry({ mouse }) {
  const groupRef = useRef(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.2,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.12,
      0.03
    );
  });

  return (
    <group ref={groupRef}>
      <FloatingShape
        Shape={Octahedron}
        args={[0.35, 0]}
        position={[-1.6, 1.2, -0.8]}
        rotation={[0.4, 0.6, 0]}
        color="#22d3ee"
        speed={0.7}
      />
      <FloatingShape
        Shape={Torus}
        args={[0.25, 0.06, 12, 32]}
        position={[1.5, -0.5, -0.6]}
        rotation={[1.2, 0.3, 0.5]}
        color="#a855f7"
        speed={0.9}
      />
      <FloatingShape
        Shape={Icosahedron}
        args={[0.28, 0]}
        position={[1.2, 1.8, -1]}
        rotation={[0.2, 0.8, 0.1]}
        color="#3b82f6"
        speed={0.6}
      />
      <FloatingShape
        Shape={Octahedron}
        args={[0.2, 0]}
        position={[-1.3, -1.5, -0.5]}
        rotation={[0.6, 0.2, 0.4]}
        color="#64748b"
        speed={1.1}
      />
    </group>
  );
}
