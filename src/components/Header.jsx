import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/portfolio_front/');
    }
    setTimeout(() => {
      window.location.href = href;
    }, 100);
  }, [navigate, location]);
  
  return (
    <header id="header" className="fixed-top" >
      <div className="container d-flex align-items-center justify-content-between">

        <h1 className="logo"><a href="/portfolio_front/"><img src="img/logo_final.png" alt="logo" /></a></h1>


        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto" href="#hero" onClick={(e) => handleClick(e, '/portfolio_front/#hero')}>Home</a></li>
            <li><a className="nav-link scrollto" href="#about" onClick={(e) => handleClick(e, '/portfolio_front/#about')}>About</a></li>
            <li><a className="nav-link scrollto" href="#services" onClick={(e) => handleClick(e, '/portfolio_front/#services')}>Services</a></li>
            <li><a className="nav-link scrollto" href="#work" onClick={(e) => handleClick(e, '/portfolio_front/#work')}>Work</a></li>
            <li><a className="nav-link scrollto" href="#blog" onClick={(e) => handleClick(e, '/portfolio_front/#blog')}>Blog</a></li>
            <li><a className="nav-link scrollto" href="/portfolio_front/resume">Resume</a></li>
            {/* <li className="dropdown"><a href="/portfolio_front/resume"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </div>
    </header>
  )
}

export default Header