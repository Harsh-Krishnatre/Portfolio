import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-b from-indigo-500 via-purple-800 to-black'>
        <Navbar />
        <About />
        <Skills />
        <Footer />
      </div>
      
    </>
  )
}

export default App
