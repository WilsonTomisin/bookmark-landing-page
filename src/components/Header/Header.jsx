import React from 'react'
import Navbar from './Navbar/Navbar';
import './Header.css'
import image2 from '../../assests/images/illustration-hero.svg'
import image3 from '../../assests/images/illustration-features-tab-2.svg'

const Header = () => {
  return (
    <div className='px-24 py-8'>
        <Navbar/>

        <div className=' flex justify-between pt-40'>
            <div>
                <h1  className=' text-5xl font-bold '>A Simple Bookmark manager</h1>
                <p className=' text-slate-500 leading-9 font-medium text-lg mt-3 mb-7'>
                    A clean and simple interface to organize your favourite
                    websites.Open a new browser tab and see your sites loaded 
                    instantly. Try it for free
                </p>
                <button className=' bg-blue-700 rounded-md text-white font-semibold px-6 py-2'>Get it on chrome</button>
                <button className=' bg-slate-300 shadow-md shadow-slate-400 rounded-md font-semibold px-6 py-2 ml-2'>Get it on firefox</button>
            </div>
            <div className=' main-container2 w-full h-72 mt-12'>
                <img src={image2} alt="" />
                {/* <img src={image3} alt='' width={'300px'} height={'500px'} /> */}
            </div>

        </div>
    </div>
  )
}

export default Header