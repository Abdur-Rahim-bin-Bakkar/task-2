"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FlowLine({ start, end, color, delay = 0 }) {
  const ref = useRef(null);
  const progress = useRef(0);

  const curve = useMemo(() => {
    const mid = new THREE.Vector3(
      (start[0] + end[0]) / 2 + (Math.random() - 0.5) * 0.4,
      (start[1] + end[1]) / 2,
      (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 0.3
    );
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      mid,
      new THREE.Vector3(...end)
    );
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(64), [curve]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    progress.current = (progress.current + delta * 0.35) % 1;
    const t = state.clock.elapsedTime + delay;
    ref.current.material.opacity = 0.35 + Math.sin(t * 2) * 0.15;
  });

  return (
    <group>
      <line ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.5} linewidth={1} />
      </line>
      <FlowPulse curve={curve} color={color} delay={delay} />
    </group>
  );
}

function FlowPulse({ curve, color, delay }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = ((state.clock.elapsedTime * 0.25 + delay) % 1);
    const point = curve.getPoint(t);
    ref.current.position.copy(point);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

export default function FlowLines() {
  const lines = [
    { start: [-0.8, 2.2, 0], end: [-0.5, 0.8, 0.2], color: "#64748b" },
    { start: [0.6, 2.2, -0.3], end: [0.9, 0.8, -0.2], color: "#64748b" },
    { start: [-0.5, 0.8, 0.2], end: [0, -0.6, 0], color: "#22d3ee" },
    { start: [0.9, 0.8, -0.2], end: [0, -0.6, 0], color: "#22d3ee" },
    { start: [0, -0.6, 0], end: [0.5, -2.0, 0.1], color: "#a855f7" },
    { start: [0, -0.6, 0], end: [-0.3, -2.0, -0.2], color: "#a855f7" },
  ];

  return (
    <group>
      {lines.map((line, i) => (
        <FlowLine key={i} {...line} delay={i * 0.4} />
      ))}
    </group>
  );
}
