import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/robot/scene.gltf");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.008; // Adjust the speed of rotation
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
    <div className="hero_model" style={{width: "500px", height: "500px", cursor: "pointer"}}>
      <Canvas style={{position: "relative", top: "60px", left: "50px"}}
        camera={{ position: [10, 20, 10], fov: 16 }}
      >
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
    </div>
  );
}
