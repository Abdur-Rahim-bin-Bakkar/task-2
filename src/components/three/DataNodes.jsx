"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { PIPELINE_STAGES } from "@/lib/constants";

function DataNode({ position, color, scale = 1, delay = 0 }) {
  const ref = useRef(null);
  const glowRef = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + delay;
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.06;
    ref.current.scale.setScalar(scale + Math.sin(t * 1.2) * 0.04);
    if (glowRef.current) {
      glowRef.current.material.opacity = 0.15 + Math.sin(t * 2) * 0.08;
    }
  });

  return (
    <group position={position}>
      <Sphere ref={glowRef} args={[0.18 * scale, 16, 16]}>
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </Sphere>
      <Sphere ref={ref} args={[0.1 * scale, 24, 24]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </group>
  );
}

export default function DataNodes() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  const nodes = [
    { pos: [-0.8, 2.2, 0], color: PIPELINE_STAGES[0].color, scale: 0.9, delay: 0 },
    { pos: [0.6, 2.2, -0.3], color: PIPELINE_STAGES[0].color, scale: 0.7, delay: 0.5 },
    { pos: [-0.5, 0.8, 0.2], color: PIPELINE_STAGES[1].color, scale: 1.1, delay: 1 },
    { pos: [0.9, 0.8, -0.2], color: PIPELINE_STAGES[1].color, scale: 0.85, delay: 1.5 },
    { pos: [0, -0.6, 0], color: PIPELINE_STAGES[2].color, scale: 1.3, delay: 2 },
    { pos: [-0.7, -0.6, 0.3], color: PIPELINE_STAGES[2].color, scale: 0.75, delay: 2.5 },
    { pos: [0.5, -2.0, 0.1], color: PIPELINE_STAGES[3].color, scale: 1.2, delay: 3 },
    { pos: [-0.3, -2.0, -0.2], color: PIPELINE_STAGES[3].color, scale: 0.9, delay: 3.5 },
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <DataNode
          key={i}
          position={node.pos}
          color={node.color}
          scale={node.scale}
          delay={node.delay}
        />
      ))}
    </group>
  );
}
