import React, { useState} from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import './Main.css';
import { SimpleBookmark, Easysharing, Speedysharing } from './Routes';
import chrome from '../../assests/images/logo-chrome.svg';
import opera from '../../assests/images/logo-opera.svg';
import firefox from '../../assests/images/logo-firefox.svg';
import border from '../../assests/images/bg-dots.svg'
import {IoIosArrowDown} from 'react-icons/io';


const Main = () => {
    const [SelectedLink, setSelectedLink] = useState('Simple bookmarking')
    const [isOpen, setisOpen] = useState(false)

    const datalinks= [
        {text: 'Simple bookmarking', Link:'/'},
        {text: 'Speedy sharing', Link:'/speedysharing'},
        {text: 'Easy sharing', Link: '/easysharing'}
    ]
  return (
    <div className=' mt-24 px-24 mb-14'>
        <div className=' text-center'>
            <h1 className=' text-3xl font-bold mb-5'>Features</h1>
            <p className=' text-lg font-semibold text-slate-400 w-1/2 m-auto'>
                Our aim is to make it quick and easy for you
                to access your favourite websites.Your bookmarks
                sync between your devices so you can access them on the go
            </p>
        </div>
        <div className='  py-20 px-20'>
            <ul className=' border-b border-slate-400 flex items-center justify-between font-semibold text-slate-600 text-lg '>
                { datalinks.map((item, index)=>{
                    const padding = index == 1 ? 'pr-14': ''
                    const activeText = SelectedLink == item.text ? 'selected': ''
                    return(
                        <li key={index} className={` mb-5 ${padding} ${activeText}`} onClick={()=>setSelectedLink(item.text)}>
                            <Link to={item.Link}> {item.text}</Link>
                        </li>
                    )
                })}
            </ul>
            
        </div>
        <Routes>
                <Route path='/' element={<SimpleBookmark/>}/>
                <Route path='/speedysharing' element={<Speedysharing/>}/>
                <Route path='/easysharing' element={<Easysharing/>}/>
        </Routes>
        <div>
            <div className=' text-center'>
                <h1 className=' text-3xl font-bold m-auto mb-7 '> Download the Extension</h1>
                <p className=' font-semibold leading-7 text-slate-400 px-64'>
                    we've got more browsers in the pipeline.Please let us
                    know if you've got a favourite you'd like us to priortize.
                </p>
            </div>
            <div className=' flex items-center justify-between text-center mt-20'>
                <div className=' rounded-lg py-8 shadow-lg shadow-slate-400'>
                    <img src={chrome} alt="chrome image" className=' mx-auto px-8 pb-8' />
                    <h1 className=' text-xl font-bold px-8 mb-3'>Add to chrome</h1>
                    <p className=' text-slate-400 px-8 mb-6 text-sm font-medium'>Minimum Version 62</p>
                    <img src={border} alt="dotted border" className=' mb-4'/>
                    <button className=' text-white font-semibold bg-blue-600 px-10 py-2 text-sm rounded-lg mx-8'>Add and install extension</button>
                </div>
                <div className=' rounded-lg py-8 shadow-lg shadow-slate-400 mt-20'>
                    <img src={firefox} alt="firefox image" className='mx-auto px-8 pb-8' />
                    <h1 className=' text-xl font-bold px-8 mb-3'>Add to firefox</h1>
                    <p className=' text-slate-400  px-8  mb-6 text-sm font-medium'>Minimum Version 55</p>
                    <img src={border} alt="dotted border" className=' mb-4'/>
                    <button className=' text-white font-semibold bg-blue-600 px-10 py-2 text-sm rounded-lg mx-8'>Add and install extension</button>
                </div>
                <div className=' rounded-lg py-8 shadow-lg shadow-slate-400 mt-40'>
                    <img src={opera} alt="opera image" className='mx-auto px-8 pb-8' />
                    <h1 className=' text-xl font-bold px-8 mb-3'>Add to Opera</h1>
                    <p className=' text-slate-400 px-8 mb-6 text-sm font-medium'>Minimum Version 46</p>
                    <img src={border} alt="dottedborder" className=' mb-4'/>
                    <button className=' text-white font-semibold bg-blue-600 px-10 py-2 text-sm rounded-lg mx-8'>Add and install extension</button>
                </div>
            </div>
        </div>
        <div className=' mt-56'>
            <div className=' text-center'>
                <h1 className=' text-3xl font-bold mb-7'>Frequently Asked questions</h1>
                <p className=' text-slate-400 font-semibold px-64 '>
                    Here are some our FAQs.if you have any other
                    questions you'd like answered please feel free
                    to email us.
                </p>
            </div>

            <div className=' mt-11 border-b-2 border-t-2 border-slate-400 px-64 mx-auto'>
                <div className=' border-b-2 border-slate-400 py-3 cursor-pointer'>
                   <div className=' flex justify-between'>
                    <span className=' font-semibold'> What is a bookmark? </span>
                    <span> <IoIosArrowDown/></span>
                   </div>
                    {isOpen && <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae quae eligendi eos quis, quia repellat non doloribus 
                        asperiores nihil aspernatur praesentium veritatis magni neque 
                        dolorem? Perferendis fuga iusto fugiat perspiciatis.
                    </div> }
                </div>
                <div className=' border-b-2 border-slate-400 py-3 cursor-pointer'>
                   <div className=' flex justify-between'>
                    <span className=' font-semibold'> How can i request a new browser? </span>
                    <span> <IoIosArrowDown/></span>
                   </div>
                   {isOpen && <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae quae eligendi eos quis, quia repellat non doloribus 
                        asperiores nihil aspernatur praesentium veritatis magni neque 
                        dolorem? Perferendis fuga iusto fugiat perspiciatis.
                    </div> }
                </div>
                <div className='border-b-2 border-slate-400 py-3 cursor-pointer'>
                   <div className=' flex justify-between'>
                    <span className=' font-semibold'> Is there a mobile app? </span>
                    <span> <IoIosArrowDown/></span>
                   </div>
                   {isOpen && <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae quae eligendi eos quis, quia repellat non doloribus 
                        asperiores nihil aspernatur praesentium veritatis magni neque 
                        dolorem? Perferendis fuga iusto fugiat perspiciatis.
                    </div> }
                </div>
                <div className=' border-b-2 border-slate-400 py-3 cursor-pointer'>
                   <div className=' flex justify-between '>
                        <span className=' font-semibold'> What about other Chromium browsers? </span>
                        <span> <IoIosArrowDown/></span>
                   </div>
                   {isOpen && <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae quae eligendi eos quis, quia repellat non doloribus 
                        asperiores nihil aspernatur praesentium veritatis magni neque 
                        dolorem? Perferendis fuga iusto fugiat perspiciatis.
                    </div> }
                </div>
            </div>
        </div>
    </div>
  )
}



export default Main