import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return <header>
      <h1>Blog App</h1>
      <NavLink activeClassName='active' className="me-3" to="/" exact>Home</NavLink>
      <NavLink activeClassName='active' className="me-3" to="/blogs">Blogs</NavLink>
      <NavLink activeClassName='active' className="me-3" to="/create">Create</NavLink>
      <NavLink activeClassName='active' className="me-3" to="/contact">Contact</NavLink>
  </header>;
};

export default Header;
