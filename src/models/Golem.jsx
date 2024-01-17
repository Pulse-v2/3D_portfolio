import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import golem from "../assets/3d/drugdor_the_golem.glb";

export function Golem({ currentAnimation, ...props }) {
  const group = useRef();
  const { scene, animations } = useGLTF(golem);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <mesh ref={group} {...props}>
        <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(golem);
