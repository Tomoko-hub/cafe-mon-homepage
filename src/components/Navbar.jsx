import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid row">
            <a className="navbar-brand col-md-8" href="#">音楽と喫茶　門</a>
            {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
  </button>*/}
            <ul className="menuNav col-md-4">
                <li className="nav-item r-4">
                    <Link to="/drinks">Drinks</Link>
                    <Link to="/foods">Foods</Link>
                    <Link to="espresso">Espressso</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
