import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const BrickWall = () => {
    const meshRef = useRef();
    const { viewport, mouse } = useThree();

    // Grid configuration
    const columns = 20;
    const rows = 15;
    const count = columns * rows;

    // Brick dimensions
    const brickWidth = 1.2;
    const brickHeight = 0.5;
    const gap = 0.1;
    const depth = 0.5;

    // Create dummy object for instanced mesh updates
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Accent colors
    const colors = useMemo(() => [
        new THREE.Color('#1a1a1a'), // Dark charcoal
        new THREE.Color('#2a2a2a'), // Slightly lighter
        new THREE.Color('#0a0a0a'), // Darker
        new THREE.Color('#333333'), // Grey
    ], []);

    // Initialize random data for each brick
    const bricksData = useMemo(() => {
        return new Array(count).fill(0).map(() => ({
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 0.2,
            zOffset: Math.random() * 0.5,
        }));
    }, [count, colors]);

    useEffect(() => {
        if (!meshRef.current) return;

        // Set initial colors
        bricksData.forEach((data, i) => {
            meshRef.current.setColorAt(i, data.color);
        });
        meshRef.current.instanceColor.needsUpdate = true;
    }, [bricksData]);

    useFrame((state) => {
        if (!meshRef.current) return;

        const t = state.clock.getElapsedTime();
        const halfWidth = (columns * (brickWidth + gap)) / 2;
        const halfHeight = (rows * (brickHeight + gap)) / 2;

        bricksData.forEach((data, i) => {
            const col = i % columns;
            const row = Math.floor(i / columns);

            let x = (col * (brickWidth + gap)) - halfWidth;
            let y = (row * (brickHeight + gap)) - halfHeight;

            // Offset every other row like real bricks
            if (row % 2 === 0) {
                x += (brickWidth + gap) / 2;
            }

            // Mouse Parallax effect
            // Mouse coordinates are -1 to 1.
            const parallaxX = (mouse.x * viewport.width) * 0.05;
            const parallaxY = (mouse.y * viewport.height) * 0.05;

            // Distance from mouse for local effect
            // Convert current brick position to world space approximation
            const dx = x - (mouse.x * viewport.width / 2); // simplistic
            const dy = y - (mouse.y * viewport.height / 2);
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Wave/Pulse effect
            const z = data.zOffset + Math.sin(t * 2 + x + y) * 0.1;

            // Mouse interaction: push away or pull
            const hoverEffect = Math.max(0, 1 - dist / 5); // 0 to 1
            const zHover = hoverEffect * 0.5;

            dummy.position.set(
                x + parallaxX * (data.zOffset + 1) * 0.5,
                y + parallaxY * (data.zOffset + 1) * 0.5,
                z + zHover - 5 // move back
            );

            // Rotate slightly based on mouse
            dummy.rotation.x = mouse.y * 0.1;
            dummy.rotation.y = mouse.x * 0.1;

            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);

            // Dynamic Lighting/Color (optional highlight)
            if (hoverEffect > 0.5) {
                meshRef.current.setColorAt(i, new THREE.Color('#b537f2').lerp(data.color, 1 - hoverEffect));
            } else {
                meshRef.current.setColorAt(i, data.color);
            }
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00f7ff" />

            <instancedMesh ref={meshRef} args={[null, null, count]}>
                <boxGeometry args={[brickWidth, brickHeight, depth]} />
                <meshStandardMaterial roughness={0.8} metalness={0.2} />
            </instancedMesh>

            <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#00f7ff" />
        </>
    );
};

export default BrickWall;
