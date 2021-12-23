import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

class Nav extends Component {
    render() {
        return (
            <div>
                      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
     
        <Dropdown dropitem="BMW" modelone="X5" modeltwo="X6" />
        <Dropdown dropitem="Mercedes" modelone="S500" modeltwo="S600"/>
        <Dropdown dropitem="Audi" modelone="A4" modeltwo="Q7"/>
        <Dropdown  dropitem="Lada" modelone="07" modeltwo="niva"/>
       
      </ul>
     
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Nav
