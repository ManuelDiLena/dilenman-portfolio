import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-gray-900 body-font bg-gray text-light'>
        <Navbar />
        <Home />
        <About />
    </div>
  )
}

export default App
