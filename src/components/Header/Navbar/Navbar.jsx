import React from 'react';
import image from  '../../../assests/images/logo-bookmark.svg'

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between '>
        <img src={image} alt="logo" />
        <ul className=' flex items-center justify-between'>
            <li className=' px-8 font-semibold'>Features</li>
            <li className=' px-8 font-semibold'>Pricing</li>
            <li className=' px-8 font-semibold'>Contact</li>
            <li>
                <button className=' bg-Soft-Red rounded-lg text-white px-6 py-2 font-semibold'>LOGIN</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar