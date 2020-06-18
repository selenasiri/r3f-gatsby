import React, { useRef } from "react"
import { useThree, useFrame, extend } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

const Controls = props => {
  const { camera, gl, scene } = useThree()
  const ref = useRef()

  useFrame(() => {
    ref.current && ref.current.update()
    scene.scale.set(0.25, 0.25, 0.25)
  })

  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

export default Controls
