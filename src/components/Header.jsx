import { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
            <li><a className="nav-link scrollto" href="#contact" onClick={(e) => handleClick(e, '/portfolio_front/#contact')}>Contact</a></li>
            <li><Link className="nav-link scrollto" to={'/blog'}>Blog</Link></li>
            <li><Link className="nav-link scrollto" to={'/admin'}>Admin</Link></li>
            {/* <li><a className="nav-link scrollto" href="https://bakend-portfolio-whl9.onrender.com/admin">Admin</a></li> */}
            {/* <li><a className="nav-link scrollto" href="/portfolio_front/resume">Resume</a></li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </div>
    </header>
  )
}

export default Header