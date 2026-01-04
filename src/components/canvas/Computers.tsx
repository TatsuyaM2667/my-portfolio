import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Computers = () => {
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#915eff"
                    attach="material"
                    distort={0.5}
                    speed={2}
                />
            </Sphere>
        </mesh>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
