import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import City from '../models/City'
import HomeInfo from '../components/HomeInfo'

const Home = () => {

  const [isRotating, setIsRotating]  = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustCityForScreenSize = () => {
    let screenScale = null
    let screenPosition = [-20, -50, -550]
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.75, 0.75, 0.75];
    } else {
      screenScale = [0.85, 0.85, 0.85];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [cityScale, cityPosition, cityRotation] = adjustCityForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo currentStage={currentStage} />
      </div>
      <Canvas
        className={`w-full h-screen relative bg-gray-800 ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

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
