import React from 'react'

const renderContent = {
  1: (
    <h1 className='text-red-500'>1</h1>
  ),
  2: (
    <h1 className='text-red-500'>2</h1>
  ),
  3: (
    <h1 className='text-red-500'>3</h1>
  ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
