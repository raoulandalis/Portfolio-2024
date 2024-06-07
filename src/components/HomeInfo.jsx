import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Nice to meet you, I'm <span className='font-semibold'>Raoul</span>!
      <br />
      <p className='text-sm'>⬇️ click & drag ⬇️</p>
    </h1>
  ),
  2: (
    <InfoBox
      text='I am a Software Engineer, but I was known to be something else before...'
      link='/about'
      btnText='Learn more about me'
    />
  ),
  3: (
    <InfoBox
      text="Want to know how I've been developing my skills?"
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
