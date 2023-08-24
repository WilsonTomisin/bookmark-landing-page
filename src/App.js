import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'
const App = () => {
  return (
    <div className=' mobile:overflow-x-hidden w-full h-auto body '>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App