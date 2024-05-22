import React from 'react'
import {Link} from "react-router-dom"
import "./Header.scss"

const Header = () => {
return (
  <div className='siteHeader'>
    <div className="headerTop">
      <div className="headerTopLeft">
        <ul>
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>
      <div className="headerTopRight">
        <div className="headerTopRightNum">
          <i class="fa-solid fa-phone"></i>
          <span>(+1) 234 5678 9101</span>
        </div>
        <div className="headerTopRightMail">
          <i class="fa-solid fa-envelope"></i>
          <span>shop@mail.com</span>
        </div>
      </div>
    </div>
    <div className="headerBottom">
      <div className="headerBottomLeft">
        <h2>Selling <span>.</span></h2>
      </div>
      <div className="headerBottomRight">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="basket">Basket</Link>
          </li>

          <li>About Us</li>
          <li>Special</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
);
}

export default Header
                            