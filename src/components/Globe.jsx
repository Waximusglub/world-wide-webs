import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Earth from './Earth'

export default function Globe() {
  return (
    <Canvas

      camera={{ fov: 75, position: [0, 0, 5] }}
      fallback={null}
      className='canvas'

    >

      <ambientLight intensity={0.1} />
      <directionalLight position={[-2, 0.5, 1.5]} intensity={4.5} />
      <OrbitControls enableZoom={false} enablePan={false} />

      <Earth />

    </Canvas>
  )
}
