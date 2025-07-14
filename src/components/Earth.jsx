import * as THREE from 'three'
import React from 'react'
import { useLoader, useFrame } from '@react-three/fiber'

export default function Earth() {
  const [
    colorMap,
    bumpMap,
    specularMap,
    lightMap,
    cloudmap,
    cloudmaptrans
  ] = useLoader(THREE.TextureLoader, [
    '/textures/00_earthmap1k.jpg',
    '/textures/01_earthbump1k.jpg',
    '/textures/02_earthspec1k.jpg',
    '/textures/03_earthlights1k.jpg',
    '/textures/04_earthcloudmap.jpg',
    '/textures/05_earthcloudmaptrans.jpg'
  ])

  const Earth = React.useRef()

  useFrame(() => {
    Earth.current.rotation.y +=0.001
  })

  return (
    <group ref={Earth}>
      <mesh >
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.08}
          specularMap={specularMap}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshBasicMaterial
          map={lightMap}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={Clouds}>
        <sphereGeometry args={[2.03, 64, 64]} />
        <meshBasicMaterial
          map={cloudmap}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          alphaMap={cloudmaptrans}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial
          color="#4fc3f7"
          transparent={true}
          opacity={0.008}
          side={THREE.BackSide} // Renderiza solo el interior de la esfera
        />
      </mesh>
    </group>
  )
}
