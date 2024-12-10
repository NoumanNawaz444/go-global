import React from 'react'
import Contact from './contact'
import Footer from './Footer'

const MainFooter = () => {
  return (
    <main>
        <div className='relative sm:top-28 top-8 z-10 md:w-full w-[95%] mx-auto'>
            <Contact />
        </div>
        <div className='-z-10'>
            <Footer />
        </div>
    </main>
  )
}

export default MainFooter