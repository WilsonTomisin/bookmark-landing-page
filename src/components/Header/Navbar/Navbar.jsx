import React from 'react';
import './Navbar.css'
import image from  '../../../assests/images/logo-bookmark.svg'
import {AiFillFacebook,AiOutlineTwitter } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between '>
        <img src={image} alt="logo" />
        <ul className=' laptop:flex items-center justify-between cursor-pointer mobile:hidden'>
            <li className=' px-8 font-semibold transition-all duration-300 hover:text-Soft-Red'>Features</li>
            <li className=' px-8 font-semibold transition-all duration-300 hover:text-Soft-Red'>Pricing</li>
            <li className=' px-8 font-semibold transition-all duration-300 hover:text-Soft-Red'>Contact</li>
            <li>
                <button className=' bg-Soft-Red rounded-lg text-white px-6 py-2 
                font-semibold transition-all duration-300 ease-in-out  border-2  border-Soft-Red
                hover:border-Soft-Red
                 hover:bg-white
                  hover:text-Soft-Red'>
                  LOGIN
                </button>
            </li>
        </ul>
        <div className=' laptop:hidden mobile:block hamburger-menu'>
          <div className=' hamburger-menu-btn'>
            <input type="checkbox" />
            <div></div>
            <div></div>
            <div></div>

            <ul className=' hamburger-menulinks w-full h-full text-white text-center px-56'>
                  <li className=' border-t border-white font-normal transition-all duration-300 hover:text-Soft-Red py-3'>
                    Features
                  </li>
                  <li className=' border-t border-white font-normal transition-all duration-300 hover:text-Soft-Red py-3'>
                    Pricing
                  </li>
                  <li className=' border-t border-white font-normal transition-all duration-300 hover:text-Soft-Red py-3'>
                    Contact
                  </li>
                  <li className=' border-t border-white'>
                      <button className=' border-2 border-white 
                      mt-3 w-full py-2 transition-all duration-300 hover:bg-white hover:text-black '>
                        LOGIN
                      </button>
                  </li>
                  <li className=' flex justify-center items-center text-3xl mt-24'>
                    <span className=' mr-3'> <AiFillFacebook/> </span>
                    <span> <AiOutlineTwitter/> </span>
                  </li>
            </ul>
          </div>
          
        </div>
    </nav>
  )
}

export default Navbar