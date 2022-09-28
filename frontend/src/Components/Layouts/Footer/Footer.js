import React from 'react'
import './Footer.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          <h1><b><i>CONNECT WITH US</i></b></h1>
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button variant="outline-light"><b><i><h5>Subscribe</h5></i></b></Button>{' '}
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><i>About Us</i></h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2><i>Contact Us</i></h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><i>Videos</i></h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2><i>Social Media</i></h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      
        
        <div className="social-links">
          <Link to='/' className="twitter"><i className="bx bxl-twitter"></i></Link>
          <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
          <Link to='/' className="instagram"><i className="bx bxl-instagram"></i></Link>
          <Link to='/' className="google-plus"><i className="bx bxl-skype"></i></Link>
          <Link to='/' className="linkedin"><i className="bx bxl-linkedin"></i></Link>
        </div>
        
      
    </div>
  )
}
