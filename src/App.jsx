import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MarqueeDemo } from './components/magicui/MarqueeDemo'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Home/>
    <MarqueeDemo/>
    </>
  )
}

export default App
