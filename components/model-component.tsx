"use client"

import { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import { useGLTF, Center } from "@react-three/drei"

type Props = { url: string }

export default function ModelComponent({ url }: Props) {
  const gltf = useGLTF(url)
  const { camera } = useThree()

  useEffect(function resetCamera() {
    camera.position.set(0, 0, 5)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  }, [url, camera])

  return (
    <Center>
      <primitive object={gltf.scene} scale={1.5} />
    </Center>
  )
}