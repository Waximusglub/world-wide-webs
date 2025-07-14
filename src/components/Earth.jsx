import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

export default function Earth() {
  const [
    colorMap,
    bumpMap,
    specularMap,
    lightMap,
    cloudmap,
    cloudmaptrans
  ] = useLoader(THREE.TextureLoader, [
    'src/assets/textures/00_earthmap1k.jpg',
    'src/assets/textures/01_earthbump1k.jpg',
    'src/assets/textures/02_earthspec1k.jpg',
    'src/assets/textures/03_earthlights1k.jpg',
    'src/assets/textures/04_earthcloudmap.jpg',
    'src/assets/textures/05_earthcloudmaptrans.jpg'
  ])


  return (
    <group >
      <mesh >
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.04}
          specularMap={specularMap}
        />
      </mesh>

      {/* Lights Layer */}
      <mesh>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshBasicMaterial
          map={lightMap}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Clouds Layer */}
      <mesh >
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshBasicMaterial
          map={cloudmap}
          transparent={true}
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          alphaMap={cloudmaptrans}

        />
      </mesh>

    </group>
  )
}
