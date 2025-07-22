import { useState } from "react";
import cities from "../data/Cities";
import { Html } from "@react-three/drei";

function cordToVector3(lat, lon, radius = 2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}


export default function Marker({ lat, lon, onClick }) {

  const [x, y, z] = cordToVector3(lat, lon);
  const [hovered, setHovered] = useState(false);


  return (
    <mesh
      position={[x, y, z]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      
    >
      <sphereGeometry args={[0.14, 12, 12]} />
      <meshStandardMaterial
        transparent={false}
        opacity={0}
      />
      {hovered && (
        <Html>
          <div>
            <h1></h1>
          </div>
        </Html>
      )}
    </mesh>
  );
}