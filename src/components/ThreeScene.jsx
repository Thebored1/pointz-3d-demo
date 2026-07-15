"use client";
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Edges, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

const noise2D = createNoise2D();

function Wheel({ dual = false, ...props }) {
  const wheelThickness = 0.3;
  const wheelSpacing = 0.35;
  
  const SingleWheel = ({ position }) => {
    const spinRef = useRef();

    useFrame((state, delta) => {
      if (spinRef.current) {
        spinRef.current.rotation.y -= delta * 12;
      }
    });

    return (
      <group position={position} rotation={[Math.PI / 2, 0, 0]}>
        <group ref={spinRef}>
          <mesh>
            <cylinderGeometry args={[0.4, 0.4, wheelThickness, 24]} />
            <meshBasicMaterial color="#f5f3ef" />
            <Edges color="#1a1a1a" lineWidth={1.5} />
          </mesh>
          <mesh position={[0, 0.01, 0]}>
            <cylinderGeometry args={[0.25, 0.25, wheelThickness, 16]} />
            <meshBasicMaterial color="#f5f3ef" />
            <Edges color="#1a1a1a" lineWidth={1.5} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.08, 0.08, wheelThickness + 0.02, 12]} />
            <meshBasicMaterial color="#f5f3ef" />
            <Edges color="#1a1a1a" lineWidth={1.5} />
          </mesh>
          {[0, Math.PI / 3, (2 * Math.PI) / 3].map((angle, idx) => (
            <mesh key={`spoke-${idx}`} position={[0, 0.015, 0]} rotation={[0, angle, 0]}>
              <boxGeometry args={[0.5, wheelThickness + 0.01, 0.04]} />
              <meshBasicMaterial color="#f5f3ef" />
              <Edges color="#1a1a1a" lineWidth={1.5} />
            </mesh>
          ))}
        </group>
      </group>
    );
  };

  return (
    <group {...props}>
      {dual ? (
        <>
          <SingleWheel position={[0, 0, wheelSpacing / 2]} />
          <SingleWheel position={[0, 0, -wheelSpacing / 2]} />
        </>
      ) : (
        <SingleWheel position={[0, 0, 0]} />
      )}
    </group>
  );
}

function Truck(props) {
  const cabShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(2.2, 0);
    shape.lineTo(2.2, 0.8);
    shape.quadraticCurveTo(2.0, 1.2, 1.4, 1.2);
    shape.lineTo(0.9, 1.8);
    shape.lineTo(0, 1.8);
    shape.lineTo(0, 0);
    return shape;
  }, []);

  const cabExtrudeSettings = {
    depth: 1.8,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.05,
    bevelThickness: 0.05
  };

  const deflectorShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.9, 0);
    shape.lineTo(0.2, 0.6);
    shape.lineTo(0, 0.6);
    shape.lineTo(0, 0);
    return shape;
  }, []);

  const edgeColor = "#1a1a1a";
  const fillColor = "#f5f3ef";

  return (
    <group {...props}>
      <group position={[-3.5, 0.8, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[8, 0.1, 2.1]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[0, 0.3, 1.1]}>
          <boxGeometry args={[8, 0.05, 0.05]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[0, 0.3, -1.1]}>
          <boxGeometry args={[8, 0.05, 0.05]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        {[-3.8, -2, 0, 2, 3.8].map((x, i) => (
          <group key={`pocket-${i}`}>
            <mesh position={[x, 0.28, 1.05]}>
              <boxGeometry args={[0.05, 0.1, 0.05]} />
              <meshBasicMaterial color={fillColor} />
              <Edges color={edgeColor} lineWidth={1.5} />
            </mesh>
            <mesh position={[x, 0.28, -1.05]}>
              <boxGeometry args={[0.05, 0.1, 0.05]} />
              <meshBasicMaterial color={fillColor} />
              <Edges color={edgeColor} lineWidth={1.5} />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0.1, 0.4]}>
          <boxGeometry args={[8, 0.3, 0.1]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[0, 0.1, -0.4]}>
          <boxGeometry args={[8, 0.3, 0.1]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[3.9, 1.0, 0]}>
          <boxGeometry args={[0.1, 1.3, 2]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[3.7, 1.0, 0.95]}>
          <boxGeometry args={[0.3, 1.3, 0.1]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[3.7, 1.0, -0.95]}>
          <boxGeometry args={[0.3, 1.3, 0.1]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[-4.02, 0.3, 0.8]}>
          <boxGeometry args={[0.05, 0.08, 0.3]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[-4.02, 0.3, -0.8]}>
          <boxGeometry args={[0.05, 0.08, 0.3]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[2, -0.3, 0.7]}>
          <boxGeometry args={[0.1, 0.9, 0.1]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[2, -0.3, -0.7]}>
          <boxGeometry args={[0.1, 0.9, 0.1]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[2, -0.75, 0.7]}>
          <boxGeometry args={[0.2, 0.05, 0.2]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[2, -0.75, -0.7]}>
          <boxGeometry args={[0.2, 0.05, 0.2]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[2, -0.4, 0]}>
          <boxGeometry args={[0.05, 0.05, 1.4]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[2, -0.2, 0.8]}>
          <boxGeometry args={[0.02, 0.02, 0.2]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[2, -0.15, 0.9]}>
          <boxGeometry args={[0.02, 0.1, 0.02]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[-3.2, -0.4, 0.75]}>
          <boxGeometry args={[0.05, 0.6, 0.8]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <mesh position={[-3.2, -0.4, -0.75]}>
          <boxGeometry args={[0.05, 0.6, 0.8]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
      </group>

      <mesh position={[-0.2, 0.45, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[-1.2, 0.3, 0.75]}>
        <boxGeometry args={[0.05, 0.6, 0.8]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[-1.2, 0.3, -0.75]}>
        <boxGeometry args={[0.05, 0.6, 0.8]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[0.5, 0.25, -0.9]}>
        <extrudeGeometry args={[cabShape, cabExtrudeSettings]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} threshold={20} />
      </mesh>
      <mesh position={[1.1, 0.9, 0.91]}>
        <boxGeometry args={[1, 1.2, 0.02]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.1, 0.9, -0.91]}>
        <boxGeometry args={[1, 1.2, 0.02]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[0.7, 1.1, 0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[0.7, 1.1, -0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.1, 0.1, 0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.1, -0.1, 0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.1, 0.1, -0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.1, -0.1, -0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[0.5, 2.05, -0.9]}>
        <extrudeGeometry args={[deflectorShape, cabExtrudeSettings]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} threshold={20} />
      </mesh>
      {[-0.4, 0, 0.4].map((z, i) => (
        <mesh key={`light-${i}`} position={[1.2, 2.3, z]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[0.08, 0.05, 0.15]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
      ))}
      <mesh position={[2.75, 0.25, 0]}>
        <boxGeometry args={[0.15, 0.4, 1.9]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[2.8, 0.25, 0.6]}>
        <boxGeometry args={[0.06, 0.15, 0.3]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[2.8, 0.25, -0.6]}>
        <boxGeometry args={[0.06, 0.15, 0.3]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[2.83, 0.15, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.4]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[2.7, 0.75, 0]}>
        <boxGeometry args={[0.05, 0.7, 1.3]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      {[0.5, 0.6, 0.7, 0.8, 0.9, 1.0].map((y, idx) => (
        <mesh key={`grill-slat-${idx}`} position={[2.72, y, 0]}>
          <boxGeometry args={[0.02, 0.03, 1.2]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
      ))}
      {[-0.4, -0.2, 0, 0.2, 0.4].map((z, idx) => (
        <mesh key={`grill-vert-${idx}`} position={[2.71, 0.75, z]}>
          <boxGeometry args={[0.02, 0.65, 0.02]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
      ))}
      <mesh position={[2.68, 0.65, 0.75]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.1, 0.3, 0.35]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[2.68, 0.65, -0.75]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.1, 0.3, 0.35]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[2.6, 0.6, 0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[2.6, 0.6, -0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.68, 1.6, 0.46]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.05, 0.65, 0.8]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.68, 1.6, -0.46]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.05, 0.65, 0.8]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.7, 1.6, 0]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.06, 0.65, 0.05]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.4, 1.4, 1.05]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.3]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.4, 1.5, 1.2]}>
        <boxGeometry args={[0.1, 0.4, 0.15]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.4, 1.4, -1.05]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.3]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[1.4, 1.5, -1.2]}>
        <boxGeometry args={[0.1, 0.4, 0.15]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh position={[0.4, 1.8, 0.95]}>
        <cylinderGeometry args={[0.08, 0.08, 2.5, 8]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0.9, 0.2, 0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0.9, 0.2, -0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
        <meshBasicMaterial color={fillColor} />
        <Edges color={edgeColor} lineWidth={1.5} />
      </mesh>

      <group position={[1.9, -0.1, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2.25, 8]} />
          <meshBasicMaterial color={fillColor} />
          <Edges color={edgeColor} lineWidth={1.5} />
        </mesh>
        <Wheel position={[0, 0, 1.125]} dual={false} />
        <Wheel position={[0, 0, -1.125]} dual={false} />
      </group>
      {[-0.2, 0.7].map((x) => (
        <group key={`drive-${x}`} position={[x, -0.1, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.8, 8]} />
            <meshBasicMaterial color={fillColor} />
            <Edges color={edgeColor} lineWidth={1.5} />
          </mesh>
          <Wheel position={[0, 0, 0.95]} dual={true} />
          <Wheel position={[0, 0, -0.95]} dual={true} />
        </group>
      ))}
      {[-6.0, -6.9].map((x) => (
        <group key={`trailer-${x}`} position={[x, -0.1, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.8, 8]} />
            <meshBasicMaterial color={fillColor} />
            <Edges color={edgeColor} lineWidth={1.5} />
          </mesh>
          <Wheel position={[0, 0, 0.95]} dual={true} />
          <Wheel position={[0, 0, -0.95]} dual={true} />
        </group>
      ))}
    </group>
  );
}

function CinematicCamera({ setHyperdrive }) {
  const scroll = useScroll();

  useFrame((state) => {
    const offset = scroll.offset;
    const pos = new THREE.Vector3();
    const lookAt = new THREE.Vector3(0, 1.2, 0);

    if (offset < 0.10) {
      const t = offset / 0.10;
      pos.set(
        THREE.MathUtils.lerp(20, 10, t),
        THREE.MathUtils.lerp(8, 3, t),
        THREE.MathUtils.lerp(22, 14, t)
      );
      lookAt.set(0, 1.5, 0);
      setHyperdrive(false);
    } else if (offset < 0.22) {
      const t = (offset - 0.10) / 0.12;
      pos.set(
        THREE.MathUtils.lerp(10, 0, t),
        THREE.MathUtils.lerp(3, 1.5, t),
        THREE.MathUtils.lerp(14, 12, t)
      );
      lookAt.set(
        THREE.MathUtils.lerp(0, -1, t),
        1.2,
        0
      );
      setHyperdrive(false);
    } else if (offset < 0.36) {
      const t = (offset - 0.22) / 0.14;
      pos.set(
        THREE.MathUtils.lerp(0, -3, t),
        THREE.MathUtils.lerp(1.5, 0.6, t),
        THREE.MathUtils.lerp(12, 6, t)
      );
      lookAt.set(
        THREE.MathUtils.lerp(-1, -2, t),
        THREE.MathUtils.lerp(1.2, 0.5, t),
        0
      );
      setHyperdrive(false);
    } else if (offset < 0.50) {
      const t = (offset - 0.36) / 0.14;
      pos.set(
        THREE.MathUtils.lerp(-3, -6, t),
        THREE.MathUtils.lerp(0.6, 4, t),
        THREE.MathUtils.lerp(6, 8, t)
      );
      lookAt.set(
        THREE.MathUtils.lerp(-2, 0, t),
        THREE.MathUtils.lerp(0.5, 2, t),
        0
      );
      setHyperdrive(false);
    } else if (offset < 0.64) {
      const t = (offset - 0.50) / 0.14;
      pos.set(
        THREE.MathUtils.lerp(-6, -2, t),
        THREE.MathUtils.lerp(4, 5, t),
        THREE.MathUtils.lerp(8, 12, t)
      );
      lookAt.set(
        THREE.MathUtils.lerp(0, 2, t),
        THREE.MathUtils.lerp(2, 2.5, t),
        0
      );
      setHyperdrive(false);
    } else if (offset < 0.78) {
      const t = (offset - 0.64) / 0.14;
      pos.set(
        THREE.MathUtils.lerp(-2, 4, t),
        THREE.MathUtils.lerp(5, 2, t),
        THREE.MathUtils.lerp(12, 10, t)
      );
      lookAt.set(
        THREE.MathUtils.lerp(2, 1, t),
        THREE.MathUtils.lerp(2.5, 1, t),
        0
      );
      setHyperdrive(false);
    } else {
      const t = (offset - 0.78) / 0.22;
      pos.set(
        THREE.MathUtils.lerp(4, 14, t),
        THREE.MathUtils.lerp(2, 6, t),
        THREE.MathUtils.lerp(10, 16, t)
      );
      lookAt.set(0, 1, 0);
      setHyperdrive(offset > 0.85);
    }

    state.camera.position.lerp(pos, 0.06);
    state.camera.lookAt(lookAt);

    const { width, height } = state.size;
    if (width > 900) {
      state.camera.setViewOffset(width, height, -width / 4, 0, width, height);
    } else {
      state.camera.clearViewOffset();
    }
  });

  return null;
}

function InfiniteGrid() {
  const scroll = useScroll();
  const gridRef = useRef();

  useFrame((state, delta) => {
    const offset = scroll.offset;
    let speed = 20 * delta;
    if (offset > 0.9) speed *= 4;

    gridRef.current.position.x -= speed;
    if (gridRef.current.position.x < -10) {
      gridRef.current.position.x += 10;
    }
  });

  return (
    <group ref={gridRef} position={[0, -0.5, 0]}>
      <Grid 
        infiniteGrid 
        fadeDistance={50} 
        sectionColor="#b0b0b0" 
        cellColor="#d8d8d8" 
        cellSize={1} 
        sectionSize={10} 
      />
    </group>
  );
}

function WindParticles({ active }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 80 - 40,
      y: Math.random() * 15 + 0.2, 
      z: Math.random() * 40 - 20, 
      speed: Math.random() * 1.5 + 1.0,
      length: Math.random() * 4 + 1,
    }));
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    const targetScale = active ? 1 : 0;
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
    );

    if (meshRef.current.scale.x < 0.01) {
      meshRef.current.visible = false;
      return;
    } else {
      meshRef.current.visible = true;
    }
    
    particles.forEach((p, i) => {
      p.x -= p.speed * delta * 80;
      
      if (p.x < -40) {
        p.x = 40 + Math.random() * 20;
      }
      
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.set(p.length, 1, 1);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, 20]} scale={0} visible={false}>
      <boxGeometry args={[1, 0.04, 0.04]} />
      <meshBasicMaterial color="#1a1a1a" />
    </instancedMesh>
  );
}

export default function ThreeScene({ hyperdrive, setHyperdrive }) {
  return (
    <>
      <CinematicCamera setHyperdrive={setHyperdrive} />
      <Truck />
      <InfiniteGrid />
      <WindParticles active={hyperdrive} />
      
      <mesh position={[0, -0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshBasicMaterial color="#e8e8e8" />
      </mesh>
    </>
  );
}
