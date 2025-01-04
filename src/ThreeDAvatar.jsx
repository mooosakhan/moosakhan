import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Avatar() {
  const { scene } = useGLTF('/path/to/your/avatar-model.gltf');
  return <primitive object={scene} scale={2} />;
}

const ThreeDAvatar = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      renderer.forceContextRestore();
    });
  }, []);

  return (
    <Canvas style={{ height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <Avatar />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDAvatar;
