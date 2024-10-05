import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MarqueeDemo } from './components/magicui/MarqueeDemo'

function App() {

  return (
    <>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <MarqueeDemo/>
    </>
  )
}

export default App
