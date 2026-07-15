"use client";
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, Edges, Grid } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import './Demo.css';

// Detailed Wheel Component (Now spins and has spokes!)
function Wheel({ dual = false, ...props }) {
  const wheelThickness = 0.3;
  const wheelSpacing = 0.35;
  
  const SingleWheel = ({ position }) => {
    const spinRef = useRef();

    useFrame((state, delta) => {
      if (spinRef.current) {
        // Spin the wheel around its local Y axis (since it's a cylinder)
        // Spin faster if hyperdrive is active (checked via a global-ish way, but simple multiplier is fine)
        spinRef.current.rotation.y -= delta * 12;
      }
    });

    return (
      <group position={position} rotation={[Math.PI / 2, 0, 0]}>
        <group ref={spinRef}>
          {/* Outer Tire */}
          <mesh>
            <cylinderGeometry args={[0.4, 0.4, wheelThickness, 24]} />
            <meshBasicMaterial color="#ffffff" />
            <Edges color="#111111" />
          </mesh>
          {/* Inner Rim */}
          <mesh position={[0, 0.01, 0]}>
            <cylinderGeometry args={[0.25, 0.25, wheelThickness, 16]} />
            <meshBasicMaterial color="#ffffff" />
            <Edges color="#111111" />
          </mesh>
          {/* Hubcap / Axle cover */}
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.08, 0.08, wheelThickness + 0.02, 12]} />
            <meshBasicMaterial color="#ffffff" />
            <Edges color="#111111" />
          </mesh>
          {/* Spokes (to make the spinning visible) */}
          {[0, Math.PI / 3, (2 * Math.PI) / 3].map((angle, idx) => (
            <mesh key={`spoke-${idx}`} position={[0, 0.015, 0]} rotation={[0, angle, 0]}>
              <boxGeometry args={[0.5, wheelThickness + 0.01, 0.04]} />
              <meshBasicMaterial color="#ffffff" />
              <Edges color="#111111" />
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

// 3D Truck Model matching reference (Flatbed + Detailed Day Cab)
function Truck(props) {
  // Day Cab Side Profile (Shorter length, aerodynamic hood)
  const cabShape = React.useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0); // Bottom rear of day cab
    shape.lineTo(2.2, 0); // Bottom to front bumper
    shape.lineTo(2.2, 0.8); // Straight up grill
    shape.quadraticCurveTo(2.0, 1.2, 1.4, 1.2); // Curved hood
    shape.lineTo(0.9, 1.8); // Slanted windshield
    shape.lineTo(0, 1.8); // Flat roof of day cab
    shape.lineTo(0, 0); // Straight down back
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

  // Roof Deflector Profile
  const deflectorShape = React.useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.9, 0);
    shape.lineTo(0.2, 0.6); // Slant up and back
    shape.lineTo(0, 0.6);
    shape.lineTo(0, 0);
    return shape;
  }, []);

  return (
    <group {...props}>
      {/* 
        ==============================
        FLATBED TRAILER SECTION 
        ==============================
      */}
      <group position={[-3.5, 0.8, 0]}>
        {/* Main Flatbed Deck */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[8, 0.1, 2.1]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>

        {/* Rub Rails (Side Rails) */}
        <mesh position={[0, 0.3, 1.1]}>
          <boxGeometry args={[8, 0.05, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[0, 0.3, -1.1]}>
          <boxGeometry args={[8, 0.05, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>

        {/* Stake Pockets / Rail Supports */}
        {[-3.8, -2, 0, 2, 3.8].map((x, i) => (
          <group key={`pocket-${i}`}>
            <mesh position={[x, 0.28, 1.05]}>
              <boxGeometry args={[0.05, 0.1, 0.05]} />
              <meshBasicMaterial color="#ffffff" />
              <Edges color="#111111" />
            </mesh>
            <mesh position={[x, 0.28, -1.05]}>
              <boxGeometry args={[0.05, 0.1, 0.05]} />
              <meshBasicMaterial color="#ffffff" />
              <Edges color="#111111" />
            </mesh>
          </group>
        ))}

        {/* Trailer Frame Beams underneath */}
        <mesh position={[0, 0.1, 0.4]}>
          <boxGeometry args={[8, 0.3, 0.1]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[0, 0.1, -0.4]}>
          <boxGeometry args={[8, 0.3, 0.1]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>

        {/* Front Headache Rack (Wall) */}
        <mesh position={[3.9, 1.0, 0]}>
          <boxGeometry args={[0.1, 1.3, 2]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        {/* Headache Rack Side Supports */}
        <mesh position={[3.7, 1.0, 0.95]}>
          <boxGeometry args={[0.3, 1.3, 0.1]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[3.7, 1.0, -0.95]}>
          <boxGeometry args={[0.3, 1.3, 0.1]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>

        {/* Taillights (Rear of trailer) */}
        <mesh position={[-4.02, 0.3, 0.8]}>
          <boxGeometry args={[0.05, 0.08, 0.3]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[-4.02, 0.3, -0.8]}>
          <boxGeometry args={[0.05, 0.08, 0.3]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>

        {/* Detailed Landing Gear */}
        {/* Legs */}
        <mesh position={[2, -0.3, 0.7]}>
          <boxGeometry args={[0.1, 0.9, 0.1]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[2, -0.3, -0.7]}>
          <boxGeometry args={[0.1, 0.9, 0.1]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        {/* Feet / Pads */}
        <mesh position={[2, -0.75, 0.7]}>
          <boxGeometry args={[0.2, 0.05, 0.2]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[2, -0.75, -0.7]}>
          <boxGeometry args={[0.2, 0.05, 0.2]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        {/* Cross Brace */}
        <mesh position={[2, -0.4, 0]}>
          <boxGeometry args={[0.05, 0.05, 1.4]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        {/* Crank Handle */}
        <mesh position={[2, -0.2, 0.8]}>
          <boxGeometry args={[0.02, 0.02, 0.2]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[2, -0.15, 0.9]}>
          <boxGeometry args={[0.02, 0.1, 0.02]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>

        {/* Mudflaps */}
        <mesh position={[-3.2, -0.4, 0.75]}>
          <boxGeometry args={[0.05, 0.6, 0.8]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <mesh position={[-3.2, -0.4, -0.75]}>
          <boxGeometry args={[0.05, 0.6, 0.8]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
      </group>

      {/* 
        ==============================
        DETAILED CAB SECTION 
        ==============================
      */}
      {/* 5th Wheel Coupling (Connecting Cab to Trailer) */}
      <mesh position={[-0.2, 0.45, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      {/* Tractor Mudflaps (Behind cab wheels) */}
      <mesh position={[-1.2, 0.3, 0.75]}>
        <boxGeometry args={[0.05, 0.6, 0.8]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[-1.2, 0.3, -0.75]}>
        <boxGeometry args={[0.05, 0.6, 0.8]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Main Extruded Cab Body */}
      <mesh position={[0.5, 0.25, -0.9]}>
        <extrudeGeometry args={[cabShape, cabExtrudeSettings]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" threshold={20} />
      </mesh>

      {/* Door Seams / Outlines */}
      <mesh position={[1.1, 0.9, 0.91]}>
        <boxGeometry args={[1, 1.2, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.1, 0.9, -0.91]}>
        <boxGeometry args={[1, 1.2, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Door Handles */}
      <mesh position={[0.7, 1.1, 0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[0.7, 1.1, -0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Cab Steps (To get into the truck) */}
      <mesh position={[1.1, 0.1, 0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.1, -0.1, 0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.1, 0.1, -0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.1, -0.1, -0.95]}>
        <boxGeometry args={[0.6, 0.05, 0.2]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Roof Deflector (Aerodynamic top) */}
      <mesh position={[0.5, 2.05, -0.9]}>
        <extrudeGeometry args={[deflectorShape, cabExtrudeSettings]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" threshold={20} />
      </mesh>

      {/* Clearance Lights (3 on roof deflector) */}
      {[-0.4, 0, 0.4].map((z, i) => (
        <mesh key={`light-${i}`} position={[1.2, 2.3, z]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[0.08, 0.05, 0.15]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
      ))}

      {/* Massive Front Bumper */}
      <mesh position={[2.75, 0.25, 0]}>
        <boxGeometry args={[0.15, 0.4, 1.9]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      {/* Bumper Cutouts (Fog lights / Vents) */}
      <mesh position={[2.8, 0.25, 0.6]}>
        <boxGeometry args={[0.06, 0.15, 0.3]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[2.8, 0.25, -0.6]}>
        <boxGeometry args={[0.06, 0.15, 0.3]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      {/* License Plate on Bumper */}
      <mesh position={[2.83, 0.15, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.4]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Front Grill Outline (Chrome Frame) */}
      <mesh position={[2.7, 0.75, 0]}>
        <boxGeometry args={[0.05, 0.7, 1.3]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Grill Horizontal Slats */}
      {[0.5, 0.6, 0.7, 0.8, 0.9, 1.0].map((y, idx) => (
        <mesh key={`grill-slat-${idx}`} position={[2.72, y, 0]}>
          <boxGeometry args={[0.02, 0.03, 1.2]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
      ))}
      
      {/* Grill Vertical Details (Behind the horizontal slats) */}
      {[-0.4, -0.2, 0, 0.2, 0.4].map((z, idx) => (
        <mesh key={`grill-vert-${idx}`} position={[2.71, 0.75, z]}>
          <boxGeometry args={[0.02, 0.65, 0.02]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
      ))}

      {/* Teardrop Headlights */}
      <mesh position={[2.68, 0.65, 0.75]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.1, 0.3, 0.35]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[2.68, 0.65, -0.75]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.1, 0.3, 0.35]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      
      {/* Side Turn Signals */}
      <mesh position={[2.6, 0.6, 0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[2.6, 0.6, -0.93]}>
        <boxGeometry args={[0.15, 0.05, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Split Windshield */}
      <mesh position={[1.68, 1.6, 0.46]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.05, 0.65, 0.8]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.68, 1.6, -0.46]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.05, 0.65, 0.8]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.7, 1.6, 0]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.06, 0.65, 0.05]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Side Mirrors */}
      <mesh position={[1.4, 1.4, 1.05]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.3]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.4, 1.5, 1.2]}>
        <boxGeometry args={[0.1, 0.4, 0.15]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.4, 1.4, -1.05]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.3]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh position={[1.4, 1.5, -1.2]}>
        <boxGeometry args={[0.1, 0.4, 0.15]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Exhaust Pipe */}
      <mesh position={[0.4, 1.8, 0.95]}>
        <cylinderGeometry args={[0.08, 0.08, 2.5, 8]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* Fuel Tanks */}
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0.9, 0.2, 0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0.9, 0.2, -0.8]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <Edges color="#111111" />
      </mesh>

      {/* 
        ==============================
        DETAILED WHEELS & AXLES
        ==============================
      */}
      {/* Front Axle (Steering - Single Wheels) */}
      <group position={[1.9, -0.1, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2.25, 8]} />
          <meshBasicMaterial color="#ffffff" />
          <Edges color="#111111" />
        </mesh>
        <Wheel position={[0, 0, 1.125]} dual={false} />
        <Wheel position={[0, 0, -1.125]} dual={false} />
      </group>

      {/* Drive Axles (Duals - Under Rear of Cab) */}
      {[-0.2, 0.7].map((x) => (
        <group key={`drive-${x}`} position={[x, -0.1, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.8, 8]} />
            <meshBasicMaterial color="#ffffff" />
            <Edges color="#111111" />
          </mesh>
          <Wheel position={[0, 0, 0.95]} dual={true} />
          <Wheel position={[0, 0, -0.95]} dual={true} />
        </group>
      ))}

      {/* Trailer Axles (Duals - Very back of Flatbed) */}
      {[-6.0, -6.9].map((x) => (
        <group key={`trailer-${x}`} position={[x, -0.1, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.8, 8]} />
            <meshBasicMaterial color="#ffffff" />
            <Edges color="#111111" />
          </mesh>
          <Wheel position={[0, 0, 0.95]} dual={true} />
          <Wheel position={[0, 0, -0.95]} dual={true} />
        </group>
      ))}
    </group>
  );
}

import { createNoise2D } from 'simplex-noise';

// Initialize noise generator for camera shake
const noise2D = createNoise2D();

// Camera Choreography Component
function CinematicCamera({ setHyperdrive }) {
  const scroll = useScroll();

  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1
    
    // Target position for camera
    const pos = new THREE.Vector3();
    // Target look at
    const lookAt = new THREE.Vector3(0, 1, 0);

    if (offset < 0.2) {
      // Act I: Fly in from distance to side
      const progress = offset / 0.2;
      pos.set(
        THREE.MathUtils.lerp(15, 0, progress),
        THREE.MathUtils.lerp(10, 2, progress),
        THREE.MathUtils.lerp(20, 12, progress)
      );
      setHyperdrive(false);
    } else if (offset < 0.4) {
      // Act II: Tracking Side
      pos.set(0, 2, 12);
      setHyperdrive(false);
    } else if (offset < 0.7) {
      // Act III: Orbit to Front
      const progress = (offset - 0.4) / 0.3;
      const angle = progress * (Math.PI / 2);
      pos.set(
        12 * Math.sin(angle),
        2,
        12 * Math.cos(angle)
      );
      setHyperdrive(false);
    } else {
      // Act IV: Hyperdrive (Push in on front)
      const progress = (offset - 0.7) / 0.3; // 0 to 1
      
      // Calculate camera shake based on high-frequency noise
      const time = state.clock.elapsedTime;
      // Shake intensity ramps up with progress
      const shakeIntensity = 0.15 * progress;
      const shakeX = noise2D(time * 15, 0) * shakeIntensity;
      const shakeY = noise2D(0, time * 15) * shakeIntensity;

      pos.set(12 + shakeX, 2 + shakeY, 0);
      lookAt.set(
        THREE.MathUtils.lerp(0, -10, progress),
        1,
        0
      );
      setHyperdrive(true);
    }

    // Smoothly interpolate camera position
    state.camera.position.lerp(pos, 0.1);
    state.camera.lookAt(lookAt);
  });

  return null;
}

// Procedural Wireframe Cityscape
function Scenery({ active }) {
  const count = 100;
  const meshRef = useRef();
  const dummy = React.useMemo(() => new THREE.Object3D(), []);

  const buildings = React.useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const side = Math.random() > 0.5 ? 1 : -1;
      return {
        x: Math.random() * 300 - 100, // Distributed along the road
        y: 0,
        z: side * (Math.random() * 40 + 15), // Push away from the center road
        width: Math.random() * 5 + 2,
        height: Math.random() * 30 + 5,
        depth: Math.random() * 5 + 2,
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    buildings.forEach((b, i) => {
      // Move past the camera much faster if hyperdrive is active
      const speedMultiplier = active ? 120 : 20;
      b.x -= speedMultiplier * delta;
      
      // Recycle buildings behind the camera back to the horizon
      if (b.x < -50) {
        b.x = 150 + Math.random() * 50;
      }
      
      dummy.position.set(b.x, b.height / 2 - 0.51, b.z);
      dummy.scale.set(b.width, b.height, b.depth);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* Low opacity wireframes to create a "data city" vibe */}
      <meshBasicMaterial color="#cccccc" wireframe={true} transparent opacity={0.3} />
    </instancedMesh>
  );
}

// Moving Grid to simulate velocity
function InfiniteGrid() {
  const scroll = useScroll();
  const gridRef = useRef();

  useFrame((state, delta) => {
    const offset = scroll.offset;
    let speed = 20 * delta;
    if (offset > 0.7) speed *= 4;

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
        sectionColor="#999999" 
        cellColor="#bbbbbb" 
        cellSize={1} 
        sectionSize={10} 
      />
    </group>
  );
}

// 3D Wind Particles (Optimized with InstancedMesh)
function WindParticles({ active }) {
  const meshRef = useRef();
  const dummy = React.useMemo(() => new THREE.Object3D(), []);
  
  // Create thin geometric speed lines
  const particles = React.useMemo(() => {
    return Array.from({ length: 150 }).map(() => ({
      x: Math.random() * 80 - 40,
      y: Math.random() * 15 + 0.2, 
      z: Math.random() * 40 - 20, 
      speed: Math.random() * 1.5 + 1.0,
      length: Math.random() * 4 + 1,
    }));
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Smoothly fade in/out based on active state
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
    
    // Move lines past the truck and update matrices
    particles.forEach((p, i) => {
      // Wind moves in -X direction extremely fast
      p.x -= p.speed * delta * 80;
      
      // Reset if it goes too far behind the truck
      if (p.x < -40) {
        p.x = 40 + Math.random() * 20;
      }
      
      // Update dummy object to calculate matrix
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.set(p.length, 1, 1);
      dummy.updateMatrix();
      
      // Apply to instance
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    // Notify Three.js that instances need re-rendering
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, 150]} scale={0} visible={false}>
      {/* Base geometry is 1 unit long, scaled individually by instances */}
      <boxGeometry args={[1, 0.04, 0.04]} />
      {/* Solid black lines to match the 2D sketch aesthetic */}
      <meshBasicMaterial color="#111111" />
    </instancedMesh>
  );
}

export default function DemoPage() {
  const [hyperdrive, setHyperdrive] = useState(false);

  return (
    <div className="demo-container">
      <Link href="/">
        <button className="btn-back">← Back to Site</button>
      </Link>

      <div className="canvas-wrapper">
        {/* flat prop disables tone mapping, ensuring #ffffff renders as pure white! */}
        <Canvas flat camera={{ position: [15, 10, 20], fov: 45 }}>
          <color attach="background" args={['#ffffff']} />
          <ScrollControls pages={5} damping={0.1}>
            <CinematicCamera setHyperdrive={setHyperdrive} />
            <Truck />
            <InfiniteGrid />
            <WindParticles active={hyperdrive} />
            
            {/* Greyish Ground Plane */}
            <mesh position={[0, -0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[500, 500]} />
              <meshBasicMaterial color="#f0f0f0" />
            </mesh>
          </ScrollControls>
        </Canvas>
      </div>
      
      <div className="scroll-instruction">Scroll Down</div>
    </div>
  );
}
