import { useState } from 'react';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/Componentes/Home'; // Importa el componente Home
import Projects from './assets/Componentes/Projects'; // Importa el componente Projects

function App() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <Router>
      <nav className='navbar'>
        <div className='navbar-logo'>MyPortfolio</div>
        <div className='menu' onClick={toggleMenu}>
          <div className='menu-icon'></div>
          <div className='menu-icon'></div>
          <div className='menu-icon'></div>
        </div>
        <ul className={isMenuOpen? 'navbar-links active' : 'navbar-links '}>
          <li>
            <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={toggleMenu}>Projects</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
