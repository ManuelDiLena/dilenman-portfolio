import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Works from './components/Works'

function App() {
  return (
    <div className='bg-gray-900 body-font bg-gray text-light'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
    </div>
  )
}

export default App
