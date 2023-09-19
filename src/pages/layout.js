import React from 'react'
// import { AppstoreFilled,FullscreenExitOutlined,BranchesOutlined } from '@ant-design/icons';
import Dropdown from '../components/dropdown';
import Disperse from '../components/disperse';
import Aside from '../components/navbar/aside';



function Layout() {
  return (
    <div className='w-full h-full font-poppins'>
        <section className='w-full flex flex-col bg-[#f0f2f5] min-h-0'>
            <section className='w-full min-w-1/4 max-w-1/4 flex flex-row'>
                {/* <aside className='w-1/5 bg-[#fff]'>
                    <div className='w-full h-full'>
                        <div className='w-full h-1/6 flex justify-center items-center border'>
                          <img className='w-40' src='https://www.gatherdao.com/static/media/gd-new-logo-light.44e866ff69c1ad3d75879f9741b657ee.svg' alt=''></img>
                        </div>
                        <ul className='w-full h-5/6 flex flex-col items-center gap-3 m-2'>
                            <li className='w-4/5 text-gray-500  text-sm font-bold px-12 py-2 rounded-md flex hover:bg-[#2042a8] hover:text-white cursor-pointer'><span className='mr-5'><AppstoreFilled style={{ fontSize: '24px'} } /></span>Dashbord</li>
                            <li className='w-4/5  text-gray-500  text-sm font-bold px-12 py-2 rounded-md flex  hover:bg-[#2042a8] hover:text-white cursor-pointer'><span className='mr-5'><FullscreenExitOutlined style={{ fontSize: '24px'} } /></span>gatherpool</li>
                            <li className='w-4/5  text-gray-500  text-sm font-bold px-12 py-2 rounded-md  flex hover:bg-[#2042a8] hover:text-white cursor-pointer'><span className='mr-5'><BranchesOutlined style={{ fontSize: '24px'} }/></span>Scatter</li>
                        </ul>
                    </div>
                </aside> */}
                <Aside/>
                <section className='w-4/5'>
                    <header className='w-auto h-32 flex justify-normal gap-5 items-center ml-10'>
                        <Dropdown/>
                        <button className='bg-violet-800 text-white py-4 px-8 rounded-full'>Connect wallet</button>
                    </header>
                    <Disperse/>
                </section>
            </section>
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
        </section>
    </div>
  )
}

export default Layout
