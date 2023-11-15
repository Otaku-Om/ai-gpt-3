import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png"

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#features">Open AI</a></p>
    <p><a href="#possibility">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign In</p>
        <button type="submit">Sign Up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
        ?<RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        :<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <Menu />
              <div className="navbar-menu-container-links-sign">
                <p>Sign In</p>
                <button type="submit">Sign Up</button>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </div>
  )
}

export default Navbar
