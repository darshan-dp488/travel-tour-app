import { NavigationBar } from './Components/NavigationBar';
// import { BackgroundCarousel } from './Components/BackgroundCarousel'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Destinations from './Pages/Destinations';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div >
      <Footer />
    </>
  )
}

export default App;
