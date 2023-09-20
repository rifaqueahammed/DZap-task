import React from 'react'
import Disperse from './disperse'
import ScatterSteps from './scatterSteps'

function Body() {
  return (
    <div className='rounded-3xl bg-white m-4 md:m-8 p-4 md:p-10 flex flex-col gap-5 '>
      <ScatterSteps/>
      <Disperse/>
    </div>
  )
}

export default Body
