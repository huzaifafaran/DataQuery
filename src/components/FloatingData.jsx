import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder, Sphere } from '@react-three/drei'

const FloatingData = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
      groupRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.01
        child.rotation.x += 0.01
        child.rotation.z += 0.005
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Data Cubes */}
      <Box 
        position={[-3, 0, 0]} 
        args={[0.5, 0.5, 0.5]}
        material-color="#3b82f6"
        material-transparent
        material-opacity={0.7}
      />
      
      <Box 
        position={[3, 1, -1]} 
        args={[0.3, 0.3, 0.3]}
        material-color="#0ea5e9"
        material-transparent
        material-opacity={0.6}
      />
      
      <Box 
        position={[-2, -1, 2]} 
        args={[0.4, 0.4, 0.4]}
        material-color="#1d4ed8"
        material-transparent
        material-opacity={0.8}
      />

      {/* Data Cylinders */}
      <Cylinder 
        position={[2, -0.5, 1]} 
        args={[0.2, 0.2, 0.8]}
        material-color="#7dd3fc"
        material-transparent
        material-opacity={0.5}
      />
      
      <Cylinder 
        position={[-1, 1.5, -2]} 
        args={[0.15, 0.15, 0.6]}
        material-color="#38bdf8"
        material-transparent
        material-opacity={0.7}
      />

      {/* Data Spheres */}
      <Sphere 
        position={[0, 2, 0]} 
        args={[0.25]}
        material-color="#0ea5e9"
        material-transparent
        material-opacity={0.6}
      />
      
      <Sphere 
        position={[1, -2, -1]} 
        args={[0.2]}
        material-color="#3b82f6"
        material-transparent
        material-opacity={0.8}
      />
    </group>
  )
}

export default FloatingData
