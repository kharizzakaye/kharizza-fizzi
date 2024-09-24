"use client";

import FloatingCan from "@/components/FloatingCan";
import { Environment } from "@react-three/drei";

type Props = {}

export default function Scene({}: Props) {
  return (
    <group>
        <FloatingCan />
        <Environment 
            files="/hdr/lobby.hdr"
            environmentIntensity={1.5}
        />
    </group>
  )
}