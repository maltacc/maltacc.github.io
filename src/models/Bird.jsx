import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const {  actions } = useAnimations(animations, birdRef);

  // start animation
  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  // make bird move up and down
  useFrame(({ clock, camera }) => {
    // update y position to simulate sin flight path
    // move bird over elapsed time
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.25;
    
    // change direction of bird if bird has left camera view
    if (birdRef.current.position.x > camera.position.x+10) {
        // rotate bird
        birdRef.current.rotation.y = Math.PI; 
    } else if (birdRef.current.position.x < camera.position.x-10) {
        // move forward if still in screen
        birdRef.current.rotation.y = 0;
    }

    // move bird forward
    if (birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01; 
        birdRef.current.position.z -= 0.01; 
    } else {
        // move backwards
        birdRef.current.position.x -= 0.01; 
        birdRef.current.position.z += 0.01; 
    }
  });

  return (
    <mesh position={[-5,2,1]} scale={[0.003,0.003,0.003]} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird