import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import wallpaper from './assets/wallpaper.mp4';
import { Analytics } from "@vercel/analytics/react"
import Events from './components/Events.jsx';
import HomePage from './components/HomePage.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
// import Report from './components/Report.jsx'; // Uncomment only if file exists

function App() {
  return (
    <div className='scroll-smooth'>
      {/* Background video */}
      <video id="background-video" className='
  opacity-45' loop autoPlay muted playsInline>
        <source src={wallpaper} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Router Setup */}
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
