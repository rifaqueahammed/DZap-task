import React from 'react'
import Aside from '../components/navbar/aside';
import Footer from '../components/footer/footer';
import Body from '../components/body/body';
import Header from '../components/header/header';



function Layout() {
  return (
    <div className='w-full h-full font-poppins'>
        <section className='w-full flex flex-col bg-[#f0f2f5] min-h-0'>
            <section className='w-full min-w-1/4 max-w-1/4 flex flex-row'>
                <Aside/>
                <section className='w-4/5 flex flex-col gap-0'>
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
