import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/robot/scene.gltf");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the speed of rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[4, 6, 4]}
      position={[0, 0, 0]}
    />
  );
}

export default function HeroModel() {

  const [canvasHeight, setCanvasHeight] = useState("450px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCanvasHeight("650px");
      } else {
        setCanvasHeight("450px");
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the function initially to set the height based on the current window size
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "550px", height: canvasHeight }}>
      <Canvas 
        camera={{ position: [-50, 20, 50], fov: 15 }}
      >
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 3}  // Locks vertical (y-axis) rotation
            maxPolarAngle={Math.PI / 3}  // Locks vertical (y-axis) rotation
            rotateSpeed={0.7} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
