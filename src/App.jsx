import React from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'

const App = () => {
  return (
    <>
     <Navbar/>
    <div className='container my-3 mt-3'>
   <Shop/>
    </div>
    </>
  )
}

export default App
