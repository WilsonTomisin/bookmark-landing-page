import React, { useState} from 'react'
import {AiFillFacebook,AiOutlineTwitter } from 'react-icons/ai'
import logo from '../../assests/images/logo-bookmark.svg'

const Footer = () => {
  const [email, setemail] = useState({ data: '', valid: true})
  const isValidEmail = email.data.match(/^\S+@\S+\.\S+$/)

  const notValid = !email.valid ? ' border-red-500' : 'border-green-500';

  function handleSubmit() {
    
    
  }

  const ErrorMessage = ()=>{
    return(
      <p className="text-red-500 text-sm mt-1">
      invalid email address
      </p>
    );
}
  return (
    <div>
      <div className=' bg-Soft-Blue py-20 px-72 text-center'>
            <h1 className=' text-white font-semibold text-xl mb-3'> 35,000+ Already Joined</h1>
            <h1 className=' text-white font-bold text-3xl '>Stay up-to-date with What we're doing</h1>
            <form action="" className=' mt-4' onSubmit={handleSubmit}>
                <input type="email" 
                placeholder='enter your email address' 
                value={email.data}
                className={` py-2 pl-4 pr-28 mr-3 rounded-md border-2 border-gray-300 
                 ${notValid}`}
                 onChange={(e)=> setemail({...email, data: e.target.value})} />
                 
                <button className=' bg-Soft-Red text-white font-semibold py-2 px-4 rounded-md
                 transition-all duration-300 ease-in-out border-2 border-Soft-Red
                 hover:border-Soft-Red
                  hover:bg-white
                   hover:text-Soft-Red'
                   onClick={()=>{
                      if ( !isValidEmail) {
                        setemail(preval=>({...preval , valid: false}))
                      } else{
                        setemail(preval=>({...preval , valid: true}))
                        alert('submitted successfully')
                      }
                   }}
                   >
                  Contact us
                </button>
                { !email.valid  && <ErrorMessage/>}
            </form>
      </div>
      <div className=' px-24 py-10 bg-Very-Dark-Blue flex justify-between'>
            <div className=' flex justify-between'>
                <img src={logo} alt=" footer logo"  className=' bg-white px-3 py-2'/>
                <ul className=' flex justify-between text-slate-400 font-semibold'>
                    <li className=' px-8 transition-all duration-300 hover:text-Soft-Red'>FEATURES</li>
                    <li className=' px-8 transition-all duration-300 hover:text-Soft-Red'>PRICING</li>
                    <li className=' px-8 transition-all duration-300 hover:text-Soft-Red'>CONTACT</li>
                </ul>
            </div>
            <ul className=' flex justify-between text-3xl text-white'>
                <li className=' transition-all duration-300 hover:text-Soft-Red'> <AiFillFacebook/></li>
                <li className=' ml-6 transition-all duration-300 hover:text-Soft-Red'> <AiOutlineTwitter/></li>
            </ul>
      </div>
    </div>
  )
}

export default Footer
