import React from "react";

export const Footer = () => {
  return (

    
    <footer>
       <nav style={{ backgroundColor: 'lightblue' }}>
      <div className="container">
        <div className="footer-wrapper">
         
          <div className="content">
            <img src="/images" alt="" />
          </div>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
         
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      </nav> 
    </footer>
  );
};
