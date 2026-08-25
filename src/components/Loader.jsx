import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        <Html center>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 animate-spin' />
                <p className='text-white text-sm'>Loading the city</p>
                <p className='text-blue-500 text-sm'>Drag to look around</p>
            </div>
        </Html>
    )
}

export default Loader
