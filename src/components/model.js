import React from "react"
import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Model({ url }) {
  const aGltf = useLoader(GLTFLoader, url)
  console.log("yyyyy", aGltf)
  return aGltf ? <primitive object={aGltf.scene} /> : null
}

export default Model
