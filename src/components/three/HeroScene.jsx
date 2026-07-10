"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { useMousePosition } from "@/hooks/useMousePosition";
import LayeredParticles from "./LayeredParticles";
import DataNodes from "./DataNodes";
import FlowLines from "./FlowLines";
import FloatingGeometry from "./FloatingGeometry";
import PipelineLabels from "./PipelineLabels";

function SceneContent({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[2, 3, 2]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-2, -1, 1]} intensity={0.8} color="#a855f7" />
      <pointLight position={[0, -2, 2]} intensity={0.6} color="#3b82f6" />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
        <group position={[0, 0, 0]}>
          <LayeredParticles mouse={mouse} />
          <DataNodes />
          <FlowLines />
          <FloatingGeometry mouse={mouse} />
          <PipelineLabels />
        </group>
      </Float>

      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={0.8}
          mipmapBlur
        />
      </EffectComposer>

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

function SceneFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#22d3ee" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  const mouse = useMousePosition();

  return (
    <div
      className="relative h-[300px] w-full sm:h-[380px] lg:h-[450px]"
      role="img"
      aria-label="AI data pipeline visualization showing raw data flowing through connected intelligence to structured insight"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"
        aria-hidden="true"
      />
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<SceneFallback />}>
          <SceneContent mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
