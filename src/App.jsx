import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {

  return (
    <>
    <div className='bg-[#1C2B35]'>
     <Header></Header>
    </div>
     <Shop></Shop>
    </>

  )
}

export default App
