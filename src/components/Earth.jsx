import * as THREE from 'three'
import React from 'react'
import { useLoader, useFrame } from '@react-three/fiber'

import Marker from './Marker'

import cities from '../data/Cities.js'


export default function Earth() {
  const [
    colorMap,
    bumpMap,
    specularMap,
    lightMap,
    cloudmap,
    cloudmaptrans
  ] = useLoader(THREE.TextureLoader, [
    '/src/assets/textures/00_earthmap1k.jpg',
    '/src/assets/textures/01_earthbump1k.jpg',
    '/src/assets/textures/02_earthspec1k.jpg',
    '/src/assets/textures/03_earthlights1k.jpg',
    '/src/assets/textures/04_earthcloudmap.jpg',
    '/src/assets/textures/05_earthcloudmaptrans.jpg'
  ])



  const Earth = React.useRef()
  const Clouds = React.useRef()

  useFrame(() => {
    Earth.current.rotation.y += 0.001
    Clouds.current.rotation.y += 0.001

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
        <sphereGeometry args={[2.05, 64, 64]} />
        <meshBasicMaterial
          map={cloudmap}
          transparent={true}
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          alphaMap={cloudmaptrans}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.12, 64, 64]} />
        <meshBasicMaterial
          color="#4fc3f7"
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {cities.map((city) => (
        <Marker
          key={city.name}
          lat={city.lat}
          lon={city.lon}
          label={city.name}
          onClick={() => window.open(city.url, '_blank')}
        />
      ))}
    </group>
  )
}
