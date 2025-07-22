import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Earth from './Earth'

export default function Globe() {
  return (
    <Canvas
      // style={{ height: '90vh', width: '100vw' }}
      camera={{ fov: 75, position: [0, 0, 5] }}
      fallback={null}
      className='canvas'

    >

      <ambientLight intensity={0.1} />
      <directionalLight position={[-2, 0.5, 1.5]} intensity={4.5} />
      <OrbitControls enableZoom={false} />

      <Earth />

    </Canvas>
  )
}
