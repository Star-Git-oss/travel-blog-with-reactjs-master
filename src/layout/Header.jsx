import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap';

export default function Header() {

  // state
  const [scroll, setScroll] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [isMobile] = useState(window.innerWidth < 992);

  let location = useLocation();

  // hook
  useEffect(() => {
    // scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      }
      else {
        setScroll(false);
      }
    });

    // goto top when route change
    window.scrollTo(0, 0);
  }, [location]);

  // hide offCanvas on click link
  const toggleOffCanvas = () => {
    setShowOffCanvas( (showOffCanvas) => !showOffCanvas );
  }

  return (
    <header className={`position-fixed ${scroll ? "white-variant" : ""} `}>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Link to="/" className='navbar-brand'>
            <p className='logo' style={{fontSize: "35px", fontStyle: "italic"}}><b>Byduo</b></p>
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={toggleOffCanvas} />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" placement="end"
            show={ isMobile ? showOffCanvas : '' } onHide={toggleOffCanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Byduo
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Link to="/" className='nav-link' onClick={toggleOffCanvas}>Home</Link>
                <Link to="/places" className='nav-link' onClick={toggleOffCanvas}>Places</Link>
                <Link to="/videos" className='nav-link' onClick={toggleOffCanvas}>Videos</Link>
                <Link to="/gallery" className='nav-link' onClick={toggleOffCanvas}>Gallery</Link>
                <Link to="/about" className='nav-link' onClick={toggleOffCanvas}>About</Link>
                <Link to="/contact" className='nav-link' onClick={toggleOffCanvas}>Contact</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}