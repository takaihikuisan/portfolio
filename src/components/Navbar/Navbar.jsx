import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            My Portfolio
          </Link>
          <div className="menu-icon">
            {!click && (
              <span className="menu-icon" onClick={handleClick}>
                <AiOutlineMenu />
              </span>
            )}
            {click && (
              <span className="close-icon" onClick={() => setClick(false)}>
                <IoMdClose />
              </span>
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <AnchorLink href="#about" className="nav-links" onClick={closeMobileMenu}>
                <span>01.</span>About
              </AnchorLink>
              {/* <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                <span>01.</span>About
              </Link> */}
            </li>
            <li className="nav-items">
              <AnchorLink href="#experience" className="nav-links" onClick={closeMobileMenu}>
                <span>02.</span>Experience
              </AnchorLink>
              {/* <Link to="" className="nav-links" onClick={closeMobileMenu}>
                <span>02.</span>Experience
              </Link> */}
            </li>
            <li className="nav-items">
              <AnchorLink href="#works" className="nav-links" onClick={closeMobileMenu}>
                <span>03.</span>Work
              </AnchorLink>
              {/* <Link to="" className="nav-links" onClick={closeMobileMenu}>
                <span>03.</span>Work
              </Link> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
