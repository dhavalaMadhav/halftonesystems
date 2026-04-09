import React, { useRef, useEffect, useMemo } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import modelPath from '../assets/bb8_animated.glb?url'

export default function BB8Model(props) {
    const group = useRef()
    const gltf = useLoader(GLTFLoader, modelPath)
    const { nodes, animations } = gltf

    // Reference for animations
    const mixer = useRef()

    useEffect(() => {
        if (!gltf.scene) return;
        console.log('BB8 Nodes:', nodes)

        if (animations && animations.length > 0) {
            mixer.current = new THREE.AnimationMixer(gltf.scene)
            try {
                const action = mixer.current.clipAction(animations[0])
                if (action) action.play()
            } catch (e) {
                console.warn("Animation failed to play:", e)
            }
        }
        return () => mixer.current?.stopAllAction()
    }, [gltf.scene, animations, nodes])

    useFrame((state, delta) => {
        if (mixer.current) mixer.current.update(delta)
        if (!group.current || !nodes) return

        const { x, y } = state.mouse

        // Safety check for head node
        const head = nodes.head || nodes.Head || nodes.BB8_Head || nodes.Cube_001 // Fallback names

        if (head) {
            // eslint-disable-next-line react-hooks/immutability
            head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, x * 0.5, 0.1)
            // eslint-disable-next-line react-hooks/immutability
            head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, -y * 0.3, 0.1)
        }
    })

    if (!nodes) return null

    // Most GLTs have a Scene or scene
    const sceneObject = gltf.scene

    return (
        <group ref={group} {...props} dispose={null}>
            {sceneObject ? <primitive object={sceneObject} /> : null}
        </group>
    )
}
