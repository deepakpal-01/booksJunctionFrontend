import React from 'react'
import './Styles/Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer>
        <div id="contact" className="contact">
            <h5>Contact</h5><br />
            <p>Address:- Gurgaon,India</p>
            <p>Phone:- +91123456123 +11001410014</p>
            <p>E-mail:- <a href="https://www.gmail.com">booksJunction@email.com</a></p>
        </div>
        
        <div id="about" className="about-footer">
            <h5>About</h5><br />
            <p><NavLink to="/">About Us</NavLink></p>
            <p><NavLink to="/">Privacy Policy</NavLink></p>
            <p><NavLink to="/">Terms & Conditions</NavLink></p>
        </div>

        <div className="third-section">          
        <h5>Follow Us </h5><br />
        <div className="social-media">          
                <NavLink to="https://www.facebook.com/login/"><i className="fa-brands fa-facebook fa-xl"></i></NavLink>
                <NavLink to="https://www.instagram.com/"><i className="fa-brands fa-instagram fa-xl"></i></NavLink>
                <NavLink to="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"><i className="fa-brands fa-twitter fa-xl"></i></NavLink>
                <NavLink to="https://www.youtube.com/"><i className="fa-brands fa-youtube fa-xl"></i></NavLink>
            </div>   
                 
        </div>
        

        
        
    </footer>
    </>
  )
}
