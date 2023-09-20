import React from 'react'
import Aside from '../components/navbar/aside';
import Footer from '../components/footer/footer';
import Body from '../components/body/body';
import Header from '../components/header/header';
import Logo from '../components/navbar/logo';



function Layout() {
  return (
    <div className='w-full h-full font-poppins'>
        <section className='w-full flex flex-col bg-[#f0f2f5] min-h-0'>
            <section className='w-full min-w-1/4 max-full flex flex-col md:flex-row'>
                <Aside/>
                <div className='md:hidden flex justify-start'> <Logo /></div>
                <section className='w-full flex flex-col gap-0'>
                 <Header/>
                 <Body/>
                </section>
            </section>
            <Footer/>
        </section>
    </div>
  )
}

export default Layout
