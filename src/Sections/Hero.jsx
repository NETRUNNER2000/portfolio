
import { PerspectiveCamera } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import GamingPC from '../components/GamingPC'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'

const Hero = () => {
  const controls = useControls("GamingPC", {
    rotationX: {
      value: 2.5,
      min: -10,
      max:30
    },
    scaleX:{
      value:25,
      min: 0,
      max: 50
    },
    scaleY:{
      value:25,
      min: 0,
      max: 50
    },
    scaleZ: {
      value:25,
      min: 0,
      max: 50
    },
      posX:{
        value:0,
        min: 0,
        max: 50
      },
      posY:{
        value:1.5,
        min: 0,
        max: 50
      },
      posZ: {
        value:0,
        min: 0,
        max: 50
      
      },      
      rotX:{
        value:-0.16,
        min: -1,
        max: 1
      },
      rotY:{
        value:-0.06,
        min: -1,
        max: 1
      },
      rotZ: {
        value:0.04,
        min: 0,
        max: 2
      
      }
  })
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col z-40 sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-center text-white font-generalsans"> 
            Hi I'm Shaahid
            <span className="waving-hand">🫡</span>
        </p>
        <p className="hero_tag text-gray_gradient">
            Software Developer and Computer Wizard
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
      <Leva/>
        <Canvas className = "w-full h-full">
          <Suspense fallback={CanvasLoader}>
          
          <PerspectiveCamera makeDefault position={[-1,40,20]} rotation={[0,0.24,0]}/>
          <ambientLight intensity={1}/>
          <GamingPC 
            scale={[controls.scaleX,controls.scaleY,controls.scaleZ]}
            // scale = {25}
            position={[controls.posX,controls.posY,controls.posZ]} 
            rotation={[controls.rotX,controls.rotY,controls.rotZ]} />
          
          </Suspense>
   
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
