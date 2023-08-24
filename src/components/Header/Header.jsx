import React from 'react'
import Navbar from './Navbar/Navbar';
import './Header.css'
import image2 from '../../assests/images/illustration-hero.svg'
import image3 from '../../assests/images/illustration-features-tab-2.svg'

const Header = () => {
  return (
    <div className='laptop:px-24 mobile:px-8 py-8'>
        <Navbar/>

        <div className=' flex justify-between pt-40 mobile:flex-col-reverse laptop:flex-row'>
            <div className=' mobile:text-center laptop:text-left  '>
                <h1  className=' text-5xl font-bold '>A Simple Bookmark manager</h1>
                <p className=' text-slate-500 leading-9 font-medium text-lg mt-3 mb-7'>
                    A clean and simple interface to organize your favourite
                    websites.Open a new browser tab and see your sites loaded 
                    instantly. Try it for free
                </p>
                <div className=' flex mobile:justify-evenly laptop:justify-start mobile:text-sm'>
                    <button className=' bg-Soft-Blue rounded-md text-white font-semibold laptop:px-6 mobile:px-3 py-2
                    transition-all duration-300 border-2  border-Soft-Blue
                    hover:bg-white
                    hover:text-Soft-Blue
                    hover:border-Soft-Blue'>
                        Get it on chrome
                    </button>
                    <button className=' bg-slate-200 shadow-md shadow-slate-400 rounded-md font-semibold
                    laptop:px-6 mobile:px-3 py-2 ml-2 transition-all duration-300 border-2
                    hover:bg-white
                    hover:text-Very-Dark-Blue
                        hover:border-Very-Dark-Blue'>
                        Get it on firefox
                    </button>
                </div>
            </div>
            <div className='main-container2 w-full laptop:h-72 mobile:h-48 mt-12'>
                <img src={image2} alt="" />
                
            </div>

        </div>
    </div>
  )
}

export default Header