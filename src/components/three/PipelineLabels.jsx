"use client";

import { Html } from "@react-three/drei";
import { PIPELINE_STAGES } from "@/lib/constants";

export default function PipelineLabels() {
  return (
    <group>
      {PIPELINE_STAGES.map((stage, i) => (
        <Html
          key={stage.id}
          position={[1.8, stage.y, 0]}
          center
          distanceFactor={6}
          style={{ pointerEvents: "none" }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: stage.color,
                boxShadow: `0 0 8px ${stage.color}`,
              }}
              aria-hidden="true"
            />
            <span
              className="text-[10px] font-medium tracking-wide uppercase sm:text-xs"
              style={{ color: stage.color }}
            >
              {stage.label}
            </span>
            {i < PIPELINE_STAGES.length - 1 && (
              <span className="text-slate-600 text-xs ml-1" aria-hidden="true">
                ↓
              </span>
            )}
          </div>
        </Html>
      ))}
    </group>
  );
}
