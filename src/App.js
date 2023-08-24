import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className=' overflow-x-hidden w-full h-auto '>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App