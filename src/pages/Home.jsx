import { useState, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import Loader from '../components/Loader'

import City from '../models/City'
import HomeInfo from '../components/HomeInfo'
//install threejs fiber - react renderer for threejs (allows you to use threejs in react)
//all 3d scenes and lights are rendered within the Canvas component
//suspense is a wrapper that displays a "fallback" that will display until the children are finished loading
//download glb gile from sketchfab -> gltf.pmnd.rs (converts glb files to react three components)
//install react spring which works in conjuction with threejs to animate models
const Home = () => {

  const [isRotating, setIsRotating]  = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustCityForScreenSize = () => {
    let screenScale = null
    let screenPosition = [-20, -50, -550]
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [cityScale, cityPosition, cityRotation] = adjustCityForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-red-100'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen relative bg-blue-200 ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#00000' intensity={1} />

          <City
            position={cityPosition}
            scale={cityScale}
            rotation={cityRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
