import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Text } from '@react-three/drei';
import { Vector3 } from 'three';

const CameraMovement = ({ positions }) => {
  const cameraRef = useRef();
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const speed = 0.02; // Adjust this to control the smoothness of the movement

  useFrame(() => {
    const camera = cameraRef.current;
    const target = positions[currentTargetIndex];

    // Smoothly move camera to target position
    camera.position.lerp(new Vector3(...target), speed);

    // If camera reaches near the target, update to the next position
    if (camera.position.distanceTo(new Vector3(...target)) < 0.1) {
      setCurrentTargetIndex((currentTargetIndex + 1) % positions.length);
    }

    // Ensure the camera looks at a specific point, e.g., center of the scene
    camera.lookAt(0, 0, 0);
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 5, 10]} fov={75} />;
};

const PopupText = ({ point, text }) => {
  const [showText, setShowText] = useState(false);

  useFrame((state) => {
    const cameraPosition = state.camera.position;
    const distance = cameraPosition.distanceTo(new Vector3(...point));

    // Show text when the camera is within a certain distance of the point
    setShowText(distance < 2); // Adjust the distance threshold for text display
  });

  return showText ? (
    <Text position={point} fontSize={0.5} color="white">
      {text}
    </Text>
  ) : null;
};


export default CameraMovement;