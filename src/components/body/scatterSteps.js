import React from 'react'

function ScatterSteps() {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex flex-col justify-center items-center'>
        <img className='w-5 h-5' src='https://www.gatherdao.com/static/media/steps-icon2.b09fbf71d4029bbae24759030880177e.svg' alt=''></img>
        <p className='font-light text-gray-500 text-xs'>Prepare</p>
      </div>
      <div className='flex justify-center items-center w-1/3'><hr className='w-full'/></div>
      <div className='flex flex-col justify-center items-center'>
        <img className='w-5 h-5' src='https://www.gatherdao.com/static/media/steps-icon2-gray.2bb3cc6ed6ed718ab1853401f649f757.svg' alt=''></img>
        <p className='font-light text-gray-500 text-xs'>Approve</p>
      </div>
      <div className='flex justify-center items-center w-1/3'><hr className='w-full'/></div>
      <div className='flex flex-col justify-center items-center'>
        <img className='w-5 h-5' src='https://www.gatherdao.com/static/media/steps-icon2-gray.2bb3cc6ed6ed718ab1853401f649f757.svg' alt=''></img>
        <p className='font-light text-gray-500 text-xs'>Scatter</p>
      </div>
    </div>
  )
}

export default ScatterSteps
