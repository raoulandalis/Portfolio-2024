import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import Loader from '../components/Loader'

import City from '../models/City'
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}
//install threejs fiber - react renderer for threejs (allows you to use threejs in react)
//all 3d scenes and lights are rendered within the Canvas component
//suspense is a wrapper that displays a "fallback" that will display until the children are finished loading
//download glb gile from sketchfab -> gltf.pmnd.rs (converts glb files to react three components)
//install react spring which works in conjuction with threejs to animate models
const Home = () => {

  const adjustCityForScreenSize = () => {
    let screenScale = null
    let screenPosition = [-20, -6.5, -400]
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
      <Canvas
        className='w-full h-screen relative bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0}/>
          <ambientLight intensity={0.5}/>
          <spotLight />
          <hemisphereLight/>

          <City
            position={cityPosition}
            scale={cityScale}
            rotation ={cityRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
