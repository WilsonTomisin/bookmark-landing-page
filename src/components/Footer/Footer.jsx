import React from 'react'
import {AiFillFacebook,AiOutlineTwitter } from 'react-icons/ai'
import logo from '../../assests/images/logo-bookmark.svg'

const Footer = () => {
  return (
    <div>
      <div className=' bg-Soft-Blue py-20 px-72 text-center'>
            <h1 className=' text-white font-semibold text-xl mb-3'> 35,000+ Already Joined</h1>
            <h1 className=' text-white font-bold text-3xl '>Stay up-to-date with What we're doing</h1>
            <form action="" className=' mt-4'>
                <input type="email" placeholder='enter your email address' className=' py-2 pl-4 pr-28 mr-3 rounded-md' />
                <button className=' bg-Soft-Red text-white font-semibold py-2 px-4 rounded-md'>Contact us</button>
            </form>
      </div>
      <div className=' px-24 py-10 bg-Very-Dark-Blue flex justify-between'>
            <div className=' flex justify-between'>
                <img src={logo} alt=" footer logo"  className=' bg-white px-3 py-2'/>
                <ul className=' flex justify-between text-slate-400 font-semibold'>
                    <li className=' px-8'>FEATURES</li>
                    <li className=' px-8'>PRICING</li>
                    <li className=' px-8'>CONTACT</li>
                </ul>
            </div>
            <ul className=' flex justify-between text-3xl text-white'>
                <li> <AiFillFacebook/></li>
                <li className=' ml-6'> <AiOutlineTwitter/></li>
            </ul>
      </div>
    </div>
  )
}

export default Footer
