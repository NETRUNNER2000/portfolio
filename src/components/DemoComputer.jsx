/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: RaflyNaHa (https://sketchfab.com/RaflyNaHa)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asus-rog-strix-scar-17-2023-g733-gaming-laptop-51eca7b2e5884c4087f3499e523d5184
Title: Asus ROG Strix Scar 17 (2023) G733 Gaming Laptop
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'

const DemoComputer = (props) =>{
  const { nodes, materials } = useGLTF(import.meta.env.BASE_URL+'/models/asus.glb')
  const txt = useVideoTexture(props.texture ? props.texture : '/textures/default/default.mp4')
  return (
    <group {...props} dispose={null}>
      <group name="Empty_51" position={[0, 3.395, -0.325]} scale={2.299}>
        <group
          name="Curve_2"
          position={[0.368, -0.441, -0.295]}
          rotation={[0, -0.747, 0]}
          scale={0.06}>
          <mesh
            name="Object_9"
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Merah}
          />
          <mesh
            name="Object_10"
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.material}
          />
          <mesh
            name="Object_11"
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Lightbar}
          />
          <mesh
            name="Object_12"
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Lightbar}
          />
        </group>
        <group
          name="Monitor_7"
          position={[0.765, -0.447, -0.486]}
          rotation={[-0.175, 0, 0]}
          scale={[0.435, 0.668, 0.435]}>
          <group
          
            name="Plane_5"
            position={[-1.76, 0.892, -0.001]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 1, 0.651]}>
            <mesh
              name="Object_19"
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Layar}
              
            >
                <meshBasicMaterial map={txt}/>
            </mesh>
            
            <mesh
              name="Object_20"
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.Touchpad}
            />
            <mesh
              name="Object_21"
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.Metal_1}
            />
            <mesh
              name="Object_22"
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Logo}
            />
            <mesh
              name="Object_23"
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.Web_Cam}
            />
          </group>
          <mesh
            name="Object_17"
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.Metal_1}
            position={[-3.381, 0.111, 0.016]}
            scale={[1.035, 0.68, 1]}
          />
          <mesh
            name="Object_25"
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials.Logo_Text}
            position={[-3.042, 0.158, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.057, 0.057, 0.037]}
          />
        </group>
        <group name="Plane001_8" position={[0, -0.446, -0.009]} scale={0.435}>
          <mesh
            name="Object_27"
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials.Metal_1}
          />
          <mesh
            name="Object_28"
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.Touchpad}
          />
          <mesh
            name="Object_29"
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.Metal_2}
          />
          <mesh
            name="Object_30"
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.Lightbar}
          />
        </group>
        <group name="Plane027_34" position={[0.6, -0.441, -0.091]} scale={0.032}>
          <mesh
            name="Object_82"
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials.Keyboard}
          />
          <mesh
            name="Object_83"
            castShadow
            receiveShadow
            geometry={nodes.Object_83.geometry}
            material={materials.Bawah}
          />
        </group>
        <group
          name="Plane038_43"
          position={[0, -0.517, -0.003]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.435}>
          <mesh
            name="Object_101"
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Object_102"
            castShadow
            receiveShadow
            geometry={nodes.Object_102.geometry}
            material={materials.Metal_1}
          />
          <mesh
            name="Object_103"
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials.Hole}
          />
        </group>
        <group name="Plane039_44" position={[-0.62, -0.499, 0.44]} scale={0.435}>
          <mesh
            name="Object_105"
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials.Metal_1}
          />
          <mesh
            name="Object_106"
            castShadow
            receiveShadow
            geometry={nodes.Object_106.geometry}
            material={materials.Bawah}
          />
        </group>
        <group
          name="Plane062_45"
          position={[0.872, -0.443, 0.49]}
          rotation={[-Math.PI, 0.684, 0]}
          scale={[0.765, 0.435, 0.001]}>
          <mesh
            name="Object_108"
            castShadow
            receiveShadow
            geometry={nodes.Object_108.geometry}
            material={materials.Logo}
          />
          <mesh
            name="Object_109"
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={materials.material_0}
          />
        </group>
        <mesh
          name="Object_5"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Logo_AMD}
          position={[-0.636, -0.445, 0.153]}
          scale={0.045}
        />
        <mesh
          name="Object_7"
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material}
          position={[0.612, -0.441, -0.357]}
          scale={0.008}
        />
        <mesh
          name="Object_14"
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Teks_Bawah}
          position={[-0.653, -0.524, -0.441]}
          rotation={[0, 0, Math.PI]}
          scale={0.105}
        />
        <mesh
          name="Object_32"
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Keyboard}
          position={[-0.476, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          name="Object_34"
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Keyboard}
          position={[-0.512, -0.441, -0.092]}
          scale={0.032}
        />
        <mesh
          name="Object_36"
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Keyboard}
          position={[-0.531, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          name="Object_38"
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          name="Object_40"
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          name="Object_42"
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.091]}
          scale={0.032}
        />
        <mesh
          name="Object_44"
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.Keyboard}
          position={[-0.596, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          name="Object_46"
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          name="Object_48"
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.Keyboard}
          position={[-0.549, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          name="Object_50"
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.Keyboard}
          position={[-0.328, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          name="Object_52"
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Keyboard}
          position={[0.044, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          name="Object_54"
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.Keyboard}
          position={[0.119, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          name="Object_56"
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.Keyboard}
          position={[0.343, -0.441, -0.091]}
          scale={0.032}
        />
        <mesh
          name="Object_58"
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Keyboard}
          position={[0.288, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          name="Object_60"
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.Keyboard}
          position={[0.305, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          name="Object_62"
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.Keyboard}
          position={[0.352, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          name="Object_64"
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.Keyboard}
          position={[-0.642, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          name="Object_66"
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.Keyboard}
          position={[-0.494, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          name="Object_68"
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.Keyboard}
          position={[-0.174, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          name="Object_70"
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.Keyboard}
          position={[0.146, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          name="Object_72"
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.Keyboard}
          position={[0.381, -0.441, 0.093]}
          scale={0.032}
        />
        <mesh
          name="Object_74"
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.Keyboard}
          position={[0.303, -0.441, 0.044]}
          scale={0.032}
        />
        <mesh
          name="Object_76"
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.Keyboard}
          position={[0.478, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          name="Object_78"
          castShadow
          receiveShadow
          geometry={nodes.Object_78.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, 0.055]}
          scale={0.032}
        />
        <mesh
          name="Object_80"
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          name="Object_85"
          castShadow
          receiveShadow
          geometry={nodes.Object_85.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          name="Object_87"
          castShadow
          receiveShadow
          geometry={nodes.Object_87.geometry}
          material={materials.Keyboard}
          position={[0.6, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          name="Object_89"
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials.Keyboard}
          position={[0.442, -0.441, -0.31]}
          scale={0.032}
        />
        <mesh
          name="Object_91"
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials.Keyboard}
          position={[0.661, -0.441, -0.237]}
          scale={0.032}
        />
        <mesh
          name="Object_93"
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials.Keyboard}
          position={[0.661, -0.441, -0.164]}
          scale={0.032}
        />
        <mesh
          name="Object_95"
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials.Keyboard}
          position={[0.661, -0.441, -0.019]}
          scale={0.032}
        />
        <mesh
          name="Object_97"
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials.Keyboard}
          position={[-0.494, -0.441, -0.372]}
          scale={0.032}
        />
        <mesh
          name="Object_99"
          castShadow
          receiveShadow
          geometry={nodes.Object_99.geometry}
          material={materials.Keyboard}
          position={[0.612, -0.441, -0.357]}
          scale={0.034}
        />
        <mesh
          name="Object_111"
          castShadow
          receiveShadow
          geometry={nodes.Object_111.geometry}
          material={materials.Logo_RTX}
          position={[-0.51, -0.445, 0.153]}
          scale={0.045}
        />
        <mesh
          name="Object_113"
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials.Logo_ROG}
          position={[-0.423, -0.43, -0.538]}
          rotation={[2.918, 0, Math.PI]}
          scale={0.435}
        />
        <mesh
          name="Object_115"
          castShadow
          receiveShadow
          geometry={nodes.Object_115.geometry}
          material={materials.Merah}
          position={[0.621, -0.441, -0.387]}
          scale={0.025}
        />
        <mesh
          name="Object_117"
          castShadow
          receiveShadow
          geometry={nodes.Object_117.geometry}
          material={materials.Indikator}
          position={[0.148, -0.441, -0.412]}
          scale={0.025}
        />
        <mesh
          name="Object_119"
          castShadow
          receiveShadow
          geometry={nodes.Object_119.geometry}
          material={materials.Teks_Bawah}
          position={[0.686, -0.524, -0.468]}
          scale={[-0.021, 0.021, 0.021]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/asus.glb')
export default DemoComputer;
