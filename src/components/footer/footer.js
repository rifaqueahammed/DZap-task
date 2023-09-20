import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='border border-[#f1f4f6] w-full bg-[#fff]'>
             <div className='flex flex-row flex-wrap'>
                <div className='box-border w-full h-full px-36 py-16  text-lg'>
                    <img className='w-72 mb-8' src='https://www.gatherdao.com/static/media/gd-new-logo-light.44e866ff69c1ad3d75879f9741b657ee.svg' alt=''></img>
                    <div>
                        <p className='mb-8'>Full Stack Decentralized Fundraising <br/>Platform</p>
                    </div>
                    <hr className='w-24 mb-10 h-0.5 bg-gradient-to-r from-[#04eaf6] to-[#e527a0]'/>
                    <p className=''>© All Rights Reserved 2023</p>
                </div>
             </div>
        </footer>
    </div>
  )
}

export default Footer
