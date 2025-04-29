"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text, Float, Stars, Environment, Html } from "@react-three/drei"
import * as THREE from "three"

// Animated Sphere Component
function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3

      // Add pulsing effect
      const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.05 + 1
      sphereRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <Sphere args={[1, 64, 64]} ref={sphereRef}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </Sphere>
  )
}

// Floating Text Component
function FloatingText() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[0, -2.5, 0]}>
      <Text
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#6366f1"
      >
        PORTFOLIO
      </Text>
    </Float>
  )
}

// NextJS Logo Component
function NextJSLogo({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <Text position={[0, 0, 0.51]} fontSize={0.4} color="white" anchorX="center" anchorY="middle">
        N
      </Text>
    </group>
  )
}

// Orbiting Particles Component
function OrbitingParticles() {
  const particlesRef = useRef<THREE.Group>(null)
  const particles = useRef<THREE.Mesh[]>([])

  useEffect(() => {
    // Capture the initial value of particlesRef.current
    const currentParticlesRef = particlesRef.current

    if (currentParticlesRef) {
      // Initialize particles array
      particles.current = []
      const particleCount = 20

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
          new THREE.SphereGeometry(0.05, 16, 16),
          new THREE.MeshBasicMaterial({ color: new THREE.Color(0x6366f1) })
        )

        const angle = (i / particleCount) * Math.PI * 2
        const radius = 2 + Math.random() * 0.5

        particle.position.x = Math.cos(angle) * radius
        particle.position.z = Math.sin(angle) * radius
        particle.position.y = (Math.random() - 0.5) * 2

        currentParticlesRef.add(particle)
        particles.current.push(particle)
      }
    }

    // Cleanup function that uses the captured ref
    return () => {
      // Clean up by using the captured ref instead of particlesRef.current
      if (currentParticlesRef) {
        particles.current.forEach((particle) => {
          currentParticlesRef.remove(particle)
        })
      }
    }
  }, []) // Empty dependency array ensures this runs only once

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.2

      particles.current.forEach((particle, i) => {
        const offset = i * 0.1
        particle.position.y = Math.sin(clock.getElapsedTime() + offset) * 1
      })
    }
  })

  return <group ref={particlesRef} />
}

// Loading Bar Component
function LoadingBar({ progress }: { progress: number }) {
  return (
    <Html center position={[0, -3.5, 0]}>
      <div className="w-64 bg-gray-700 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-white text-center mt-2">Loading NextJS Experience... {progress}%</div>
    </Html>
  )
}

// Main Loading Animation Component
export default function LoadingAnimation({ progress = 0 }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
      <div className="w-72 h-72 mb-12">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />

          <AnimatedSphere />
          <OrbitingParticles />
          <FloatingText />
          <NextJSLogo position={[2, 1.5, -1]} />
          <NextJSLogo position={[-2, -1.5, -1]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="city" />
          <LoadingBar progress={progress} />

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={3}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-8"
      >
        Akshay Bondre
      </motion.h1>

      <div className="text-gray-400 mt-4 text-center max-w-md px-4">
        <p className="mb-2">Building immersive web experiences with Next.js</p>
        <p className="text-sm opacity-70">Server Components • App Router • Dynamic Imports • 3D Rendering</p>
      </div>
    </div>
  )
}
