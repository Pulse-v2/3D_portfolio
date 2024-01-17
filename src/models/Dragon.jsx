import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import dragonScene from "../assets/3d/dragon_gold.glb";

export function Dragon({ isRotating, ...props }) {
  const ref = useRef();

  const { scene, animations } = useGLTF(dragonScene);

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["RideIdle"].stop();
      actions["RideFlyRun"].play();
    } else {
      actions["RideFlyRun"].stop();
      actions["RideIdle"].play();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
