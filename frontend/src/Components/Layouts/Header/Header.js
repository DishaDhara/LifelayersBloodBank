import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
function Header() {
   
    return (
      <div>
         {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top">

    <div className="container d-flex align-items-center justify-content-between">
    <Link to="/" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></Link>
      <h1 className="logo"><a href="index.html">LifeLayers</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/" className="nav-link scrollto active">Home</Link></li>
          <li><Link to="/about" className="nav-link scrollto">About</Link></li>
          <li><Link to="/service" className="nav-link scrollto">Services</Link></li>
          <li><Link to="#portfolio" className="nav-link scrollto">Portfolio</Link></li>
          <li><Link to="#team" className="nav-link scrollto">Team</Link></li>
          <li className="dropdown"><Link to="#"><span>Register Here</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li className="dropdown"><Link to="#"><span>Registration</span> <i className="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="/dreg">Donor Registration</Link></li>
                  <li><Link to="/hreg">Hospital Registration</Link></li>
                  <li><Link to="/preg">patients Registration</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><Link to="/contact" className="nav-link scrollto">Contact</Link></li>
          <li><Link to="/dreg" className="getstarted scrollto">Be a Donor</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
    {/* <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div> */}
  </header>
  {/* <!-- End Header --> */}
      </div>
        
    )
}
      export default Header;




      