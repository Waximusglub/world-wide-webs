import { useState } from "react";

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

  return (

    <mesh
      onClick={onClick}
      position={[x, y, z]}

    >
      <sphereGeometry args={[0.05, 6, 6]} />
      <meshStandardMaterial
        color={"red"}
      />
    </mesh>

  );
}