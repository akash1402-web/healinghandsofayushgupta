import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";


const Navbar = () => {
  return (
    <>
                    <nav className="navbar">
                                    <ul>
                                        <li>
                                            <NavLink activeClassName="menu_active" exact  aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="menu_active" exact  aria-current="page" to="/">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="menu_active" exact  aria-current="page" to="/">Our services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="menu_active" exact  aria-current="page" to="/">Anant Oorja</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="menu_active" exact  aria-current="page" to="/">Publication</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="menu_active" exact  aria-current="page" to="/">Gallery</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="menu_active" exact  aria-current="page" to="/">Contact us</NavLink>
                                        </li>
                                    </ul>
                      
                    </nav>
    </>
  )
}

export default Navbar
