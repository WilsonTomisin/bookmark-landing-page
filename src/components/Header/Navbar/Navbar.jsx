import React from 'react';
import './Navbar.css'
import image from  '../../../assests/images/logo-bookmark.svg'

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between '>
        <img src={image} alt="logo" />
        <ul className=' flex items-center justify-between cursor-pointer laptop:block mobile:hidden'>
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

            <ul className=' hamburger-menulinks'>
                  <li className=' font-semibold transition-all duration-300 hover:text-Soft-Red'>Features</li>
                  <li className=' font-semibold transition-all duration-300 hover:text-Soft-Red'>Pricing</li>
                  <li className=' font-semibold transition-all duration-300 hover:text-Soft-Red'>Contact</li>
                  <li>
                      <button className=''>
                        LOGIN
                      </button>
                  </li>
              </ul>
          </div>
          
        </div>
    </nav>
  )
}

export default Navbar