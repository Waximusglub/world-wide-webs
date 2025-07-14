import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


import Marker from './Marker'
import Earth from './Earth'


import cities from '../data/Cities.js'



export default function Globe() {
  return (
    <Canvas
      style={{ height: '90vh', width: '100vw' }}
      camera={{ fov: 75,  position: [0, 0, 5] }}
      fallback={null}

    >

      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 0.5, 1.5]} intensity={1.5} />
      <OrbitControls enableZoom={false} />

      <Earth />

      {/* {cities.map((city) => (
        <Marker
          key={city.name}
          lat={city.lat}
          lon={city.lon}
          label={city.name}
          onClick={() => window.open(city.url, '_blank')}
        />
      ))} */}


    </Canvas>
  )
}
