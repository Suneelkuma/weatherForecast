import React from 'react'
import { Link } from 'react-router-dom'
import "./favouriteplaces.css"
const NavBar = () => {
  return (
    <>
    <nav className="navbar text-white navbar-expand-lg navbar-dark bg-primary p-3">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic " to="/">Weather App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link ml-3 fs-4" to="/search">Search Weather</Link>
        </li>
       </ul>
          
       
     
    </div>
  </div>
</nav>
      
    </>
  )
}

export default NavBar
