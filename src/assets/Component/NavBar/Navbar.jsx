import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import '../Pages/Home'
import '../Pages/Projects'
import '../Pages/Numbergame'



export default function Navbar() {
  return (
    <Router>
      <nav className='navbar'>
        <div className='logo'>MyPortfolio</div>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/numbergame'>NumberGame</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/numbergame' element={<NumberGame />} />
      </Routes>
    </Router>
  )
}
