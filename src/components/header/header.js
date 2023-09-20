import Dropdown  from './dropdown'
import React from 'react'

function Header() {
  return (
      <header className='hidden w-auto h-32 md:flex justify-normal gap-5 items-center ml-10 '>
            <Dropdown/>
            <button className='bg-violet-800 text-white py-4 px-8 rounded-full'>Connect wallet</button>
     </header>
    )
}

export default Header
