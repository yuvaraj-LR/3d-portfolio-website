import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import styled from "styled-components";

const HeroContainer = styled.div`
    width: 350px;
    height: 500px;
    cursor: pointer;
    position: relative;
    top: 40px;

    @media(min-width: 768px) {
        width: 500px;
        top: 60px;
    }

    @media(min-width: 1200px) {
        width: 550px;
        height: 580px;
        position: absolute;
        top: 40px;
        right: -60px;
    }
`


function Model() {
  const { scene } = useGLTF("/robot/scene.gltf");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust the speed of rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[2, 2, 2]}
      position={[0, 0, 0]}
    />
  );
}

export default function HeroModel() {
  return (
    <HeroContainer>
      <Canvas camera={{ position: [10, 20, 10], fov: 16 }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 3}  
            maxPolarAngle={Math.PI / 3} 
            rotateSpeed={0.7} 
          />
        </Suspense>
      </Canvas>
    </HeroContainer>
  );
}
