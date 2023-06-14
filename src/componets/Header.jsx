import React, { useState } from 'react';

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav style={{ backgroundColor: 'white' }}>
      <div className="container">
        
        <div className="links">
        <a style={{ color: 'blue' }} href="#">Home</a>
          <a style={{ color: 'blue' }} href="#">Shop</a>
          <a style={{ color: 'blue' }} href="#">Admin</a>
          <a style={{ color: 'blue' }} href="#">Blog</a>
        </div>

        <div className="icons">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>

          <div className="icon">
            <span className="number">3</span>
            <i className="far fa-heart"></i>
          </div>

          <div className="icon">
            <span className="number">5</span>
            <i className="fas fa-shop"></i>
            <div className="menu">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>

        <div className={`mobile-nav ${mobileNav ? "active" : ""}`}>
          <div className="links">
            <a onClick={() => setMobileNav(!mobileNav)} href="#">
              Home
            </a>
            <a onClick={() => setMobileNav(!mobileNav)} href="#">
              Shop
            </a>
            <a onClick={() => setMobileNav(!mobileNav)} href="#">
              Blog
            </a>
            <a onClick={() => setMobileNav(!mobileNav)} href="#">
              Admin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
