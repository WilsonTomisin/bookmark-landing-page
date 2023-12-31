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

    const dropdown = [
        { question: 'What is Bookmark?' },
        {question: 'How can I request a new browser?'},
        {question: 'Is there a mobile app?'},
        {question: 'What about other Chromium browsers?'}
    ]
    const cards =[
        { text:"Add to chrome",image:chrome, altText:'chrome-image', version:'Minimum Version 62',},
        { text:"Add to firefox",image:firefox, altText:'firefox-image', version:'Minimum Version 55',},
        { text:"Add to Opera",image:opera, altText:'opera-image', version:'Minimum Version 46',}

    ]
    const [dropDownData, setdropDownData] = useState(dropdown.map((item,index)=>{
        return { ...item, clicked: false}
    }))

    const handleClick =(itemText)=>{
        const updatedData = dropDownData.map((item, index)=>{
            return item.question === itemText ? {...item, clicked: !item.clicked}: item
        })
        setdropDownData(updatedData)
    }
  return (
    <div className=' mt-24 laptop:px-24 mobile:px-3 mb-14'>
        <div className=' text-center'>
            <h1 className=' text-3xl font-bold mb-5'>Features</h1>
            <p className=' laptop:text-lg mobile:text-sm laptop:font-semibold mobile:font-medium text-slate-400 w-1/2 m-auto '>
                Our aim is to make it quick and easy for you
                to access your favourite websites.Your bookmarks
                sync between your devices so you can access them on the go
            </p>
        </div>
        <div className='  py-20 laptop:px-20 mobile:px-10'>
            <ul className=' border-b border-slate-400 flex mobile:flex-col laptop:flex-row items-center justify-between font-semibold text-slate-600 text-lg '>
                { datalinks.map((item, index)=>{
                    const padding = index == 1 ? 'laptop:pr-14': ''
                    const activeText = SelectedLink == item.text ? 'selected': ''
                    return(
                        <li key={index} className={` mb-5 ${padding} ${activeText} transition-all duration-300 hover:text-Soft-Red laptop:border-none mobile:border-t mobile:border-slate-400 mobile:w-full mobile:text-center`} onClick={()=>setSelectedLink(item.text)}>
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
                <p className=' font-semibold leading-7 text-slate-400 tablet:px-64 mobile:px-5'>
                    we've got more browsers in the pipeline.Please let us
                    know if you've got a favourite you'd like us to priortize.
                </p>
            </div>
            <div className=' tablet:px-2 flex items-center tablet:flex-row mobile:flex-col justify-between text-center mt-5'>
                
                { cards.map((item,index)=>{
                    const card3 = index == 2 ? 'tablet:mt-40' : ''
                    const card2 = index == 1 ? 'tablet:mt-20' : ''

                    return(
                            <div className= {` ${card2} ${card3} rounded-lg laptop:py-8 tablet:py-4
                             mobile:py-8 laptop:shadow-lg tablet:shadow-none mobile:shadow-lg shadow-slate-400 
                             tablet:mb-0 mobile:mb-11 `} key={index}>
                                <img src={item.image} alt={item.altText} className=' mx-auto px-8 pb-8' />
                                <h1 className=' text-xl font-bold px-8 mb-3'>{item.text}</h1>
                                <p className=' text-slate-400 px-8 mb-6 text-sm font-medium'>{item.version}</p>
                                <img src={border} alt="dotted border" className=' mb-4'/>
                                <button className=' text-white font-semibold  bg-Soft-Blue laptop:px-10 mobile:px-2  mobile:py-2 text-sm rounded-lg laptop:mx-8 tablet:mx-5
                                transition-all duration-300 ease-in-out
                                border-2 border-Soft-Blue
                                hover:bg-white
                                 hover:text-Soft-Blue
                                hover:border-Soft-Blue'>
                                    Add and install extension
                                </button>
                            </div>

                    )
                })}
            </div>
        </div>
        <div className=' mt-40'>
            <div className=' text-center'>
                <h1 className=' text-3xl font-bold mb-7'>Frequently Asked questions</h1>
                <p className=' text-slate-400 font-semibold tablet:px-64 '>
                    Here are some our FAQs.if you have any other
                    questions you'd like answered please feel free
                    to email us.
                </p>
            </div>
            <div className=' mt-11 laptop:px-64 mobile:px-10 mx-auto'>
               
                { dropDownData.map((item,index)=>{
                    const translate = item.clicked ? ' rotate-180 text-Soft-Red' : ' text-blue-500'
                    const display = item.clicked? ' opacity-100' : 'opacity-0'
                    const topB = index === 0 ? 'border-t border-slate-400': ''

                    return(
                        <div className={` ${topB} border-b border-slate-400 py-3 cursor-pointer`} key={index}>
                            <div className=' flex justify-between' onClick={()=>( handleClick(item.question))}>
                                <span className=' font-semibold transition-colors duration-500 ease-in-out hover:text-Soft-Red'> {item.question} </span>
                                <span className={` transition-transform duration-500 ease-in-out ${translate} origin-center font-bold text-xl `}> <IoIosArrowDown/></span>
                            </div>
                            { item.clicked && <div className={` transition-opacity duration-1000 ease-in-out opacity-70 font-semibold leading-7 mt-10`}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Vitae quae eligendi eos quis, quia repellat non doloribus 
                                asperiores nihil aspernatur praesentium veritatis magni neque 
                                dolorem? Perferendis fuga iusto fugiat perspiciatis.
                            </div> }

                        </div>
                    )
                })}
                <button className=' rounded-lg bg-Soft-Blue font-semibold
                 text-white mt-11 laptop:ml-48  p-3 transition-all duration-300 border-2 border-Soft-Blue
                 hover:bg-white
                  hover:text-Soft-Blue
                   hover:border-Soft-Blue'> 
                    More info
                </button>
            </div>
        </div>
    </div>
  )
}



export default Main