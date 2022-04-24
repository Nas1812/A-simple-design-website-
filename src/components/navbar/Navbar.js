import React , {useState} from "react";
import "./navbar.css";
import logo1 from "../../assets/logo1.svg";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  
  return (
    <nav className={color ? "navbar navbar-bg" : "navbar"}>
    
        <NavLink to="/">
          <img className="trefoil__logo__svg" src={logo1} alt="logo" />
        </NavLink>

       
      <ul className={click ? 'nav__menu active' : 'nav__menu'}>
          <NavLink to='/'>
            <li>Home</li>  
          </NavLink>
            <NavLink to="/about">
               <li>About</li>
            </NavLink>
            <NavLink to="blogs">
               <li>Blogs</li>
            </NavLink>
            <NavLink to="/contact">
                <li>Contact Us</li>
            </NavLink>
        </ul>
        <div className="triLine" onClick={handleClick}>
          {click ? (<RiCloseLine  size = '30' style={{ color: '#fff' }} />) : (<RiMenu3Line size = '30' style={{ color: '#fff' }} />)}
        
      </div>
      
      
    </nav>
  );
};

export default Navbar;
