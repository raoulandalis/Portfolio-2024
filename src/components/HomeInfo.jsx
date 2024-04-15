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
      Hi, I am <span className='font-semibold'>Raoul</span>!
      <br />
      A Software Engineer from Florida
    </h1>
  ),
  2: (
    <InfoBox
      text='Worked with many companies and worked with many companies along the way'
      link='/about'
      btnText='Learn more about me'
    />
  ),
  3: (
    <InfoBox
      text='Led multiple projects to success over the years. Curious about the impact?'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
