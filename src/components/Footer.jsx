import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-subcontainer">
        <div className="links">
          <h3>USEFUL LINKS</h3>
          <ul className="sub-links">
            <li>Home</li>
            <li>Page 1</li>
            <li>Page 2</li>
          </ul>
        </div>

        <div className="newsletter">
          <h3>NEWSLETTER</h3>
          <div className="form-input">
            <input type="text" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="contact">
          <h3>CONTACT</h3>
          <div className="address">
            123, XYZ Road,
            <br />
            London, England, UK
          </div>
        </div>
      </div>
      <p>&copy; 2024 Your Website. All rights reserved.</p>
    </div>
  );
};

export default Footer;
