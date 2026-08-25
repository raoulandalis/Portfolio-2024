import React from 'react'
import { Link } from 'react-router-dom'
import { stages } from '../content/stages'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
    </Link>
  </div>
)

const HomeInfo = ({ currentStage }) => {
  const stage = stages[currentStage]
  if (!stage) return null

  if (stage.type === 'intro') {
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        {stage.kicker} <span className='font-semibold'>{stage.name}</span>!
        <br />
        {stage.subtitle}
        <p className='text-sm'>⬇️ {stage.hint} ⬇️</p>
      </h1>
    )
  }

  if (stage.type === 'cta') {
    return (
      <InfoBox
        text={stage.text}
        link={stage.link}
        btnText={stage.btnText}
      />
    )
  }

  return null
}

export default HomeInfo
