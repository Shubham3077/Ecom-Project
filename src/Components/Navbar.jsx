import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png'

const Navbar = () => {
  const [menuToggle, setMenutoggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [islogin, setIsLogin] = useState(false)

  // scroll addEvent for fixed header
  window.addEventListener("scroll", () => {
    if(window.screenY > 200){
      setFixedHeader(true);
    } else {
      setFixedHeader(false)
    }
  })

  return (
    <header className={`header-section style-4 ${fixedHeader ? "header-fixed fadeInUp": ""}`}>
      {/* {header top starts} */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""} `}>
        <div className="container">
          <div className='header-top-area'>
            <Link to={"/signup"} className='lab-btn me-3'><span>Create account</span></Link>
            <Link to={"/login"}><span>Login</span></Link>
          </div>
        </div>
      </div>

      {/* {header botton} */}
      <div className='header-bottom'>
        <div className='container'>
          <div className='header-wrapper'>
            {/* {logo} */}
            <div className='logo-search-acte '>
              <div className='logo'>
                <Link to={"/"}>
                  <img src={logo} alt="logo.png" />
                </Link>
              </div>
            </div>

            {/* {menu area} */}
            <div className='menu-area'>
              <div className='menu'>
                <ul className={`lab-ul ${menuToggle ? "active": ""}`}>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/shop"}>Shop</Link></li>
                  <li><Link to={"/about"}>About</Link></li>
                  <li><Link to={"/blog"}>Blog</Link></li>
                  <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
                
              </div>
              {/* {sign in & login} */}
              <Link to={"/signup"} className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
              <Link to={"/login"} className=' d-none d-md-block'>Log In</Link>

              {/* {menu-toggler} */}
              <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenutoggle(!menuToggle)}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* {social toggle} */}
              <div className='ellepsis-bar d-m-none' onClick={() => setSocialToggle(!socialToggle)}>
                <i class="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
