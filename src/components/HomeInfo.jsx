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

const StageDots = ({ currentStage, extraTop }) => (
  <div className={`${extraTop ? 'mt-10' : 'mt-4'} flex justify-center gap-2`} aria-label={`Stage ${currentStage} of 4`}>
    {[1, 2, 3, 4].map((n) => (
      <span
        key={n}
        className={`h-2 w-2 rounded-full ${n === currentStage ? 'bg-blue-500' : 'bg-white/40'}`}
      />
    ))}
  </div>
)

const HomeInfo = ({ currentStage }) => {
  const stage = stages[currentStage]
  if (!stage) return null

  let card = null

  if (stage.type === 'intro') {
    card = (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        {stage.kicker} <span className='font-semibold'>{stage.name}</span>!
        <br />
        {stage.subtitle}
        <p className='text-sm'>↓ {stage.hint} ↓</p>
      </h1>
    )
  }

  if (stage.type === 'cta') {
    card = (
      <InfoBox
        text={stage.text}
        link={stage.link}
        btnText={stage.btnText}
      />
    )
  }

  if (!card) return null

  return (
    <div className='flex flex-col items-center'>
      {card}
      <StageDots currentStage={currentStage} extraTop={stage.type === 'cta'} />
    </div>
  )
}

export default HomeInfo
