import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='flex flex-row justify-around m-36 p-52 bg-blue-50'>
        <div>Past</div>
        <div>Second div</div>
      </div>
      <div className='flex flex-row justify-around m-36 p-52 gap bg-red-50'>
        <div>Second div</div>
        <div>Present</div>
      </div>
      <div className='flex flex-row justify-around m-36 p-52 bg-green-50'>
        <div>Future</div>
        <div>Second div</div>
      </div>
    </div>
  )
}

export default About
