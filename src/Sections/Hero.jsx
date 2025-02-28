
import { PerspectiveCamera } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import GamingPC from '../components/GamingPC'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import CameraMovement from '../components/CameraMovement'
import { useMediaQuery } from 'react-responsive'
import HeroCamera from '../components/HeroCamera'
const Hero = () => {

  const isMobile = useMediaQuery({maxWidth: 768})
  // Usage
const positions = [
    [0, 5, 10],
    [0, 10, 15],
    [0, 5, 10]
  ];
  const controls = useControls("GamingPC", {
    
  })
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col z-40 sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-center text-white font-generalsans"> 
            Hi, I'm Shaahid
            <span className="waving-hand">🫡</span>
        </p>
        <p className="hero_tag text-gray_gradient">
            Software Developer & Computer Wizard
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
      <Leva/>
        <Canvas className = "w-full h-full">
          <Suspense fallback={CanvasLoader}>
            <PerspectiveCamera makeDefault position={[-1,40,20]} rotation={[0,0.255,0]}/>
            {/* <CameraMovement positions={positions}/>  */}
            
            <ambientLight intensity={1}/>
            <HeroCamera>
            <GamingPC 
              scale={[25, 25, 25]}
              // scale = {25}
              position={[0, 1.5, 0]} 
              rotation={[-0.16,-0.06,0.04]} />
            </HeroCamera>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
