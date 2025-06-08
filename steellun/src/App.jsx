import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import wallpaper from './assets/wallpaper.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <video id='background-video' loop autoPlay muted playsInline>
  <source src={wallpaper} type="video/mp4" />
  Your browser does not support the video tag.
</video>
    <Navbar />
    </>
  )
}

export default App
