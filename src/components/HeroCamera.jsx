import React, { useRef } from 'react';
import {useFrame} from "@react-three/fiber";
import { easing } from 'maath';

const HeroCamera= ({children})=> {

    const groupRef = useRef();

    useFrame((state, delta)=>{
        easing.dampE(groupRef.current.rotation, [state.pointer.y/40,state.pointer.x,0],
            0.25 ,delta
        )
        // easing.dampE(groupRef.current.position, [state.viewport.distance,state.viewport.distance,0],
        //     0.25 ,delta
        // )
    })
  return (
    <group ref = {groupRef}>{children}</group>
  )
}
export default HeroCamera;