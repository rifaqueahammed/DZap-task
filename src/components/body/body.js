import React from 'react'
import Disperse from './disperse'
import ScatterSteps from './scatterSteps'

function Body() {
  return (
    <div className='rounded-3xl bg-white m-8 p-10 flex flex-col gap-5'>
      <ScatterSteps/>
      <Disperse/>
    </div>
  )
}

export default Body
