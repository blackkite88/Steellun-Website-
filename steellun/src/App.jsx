import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import wallpaper from './assets/wallpaper.mp4'
import Events from './components/Events.jsx'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    <video id='background-video' loop autoPlay muted playsInline>
  <source src={wallpaper} type="video/mp4" />
  Your browser does not support the video tag.
</video>
    <Navbar />
    <HomePage />
    <About />
    <Events />
    <Team />
    </>
  )
}

export default App
