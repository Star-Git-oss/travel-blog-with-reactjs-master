import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      {/* footer top start */}
      <footer className='footer-area bg-dark pt-60 pb-55'>
        <Container>
          <Row>
            <Col md={4} className='mb-3'>
              <div className="logo-area">
                <Link to="/">
                  <p className='logo' style={{fontSize: "35px", fontStyle: "italic", color: "white"}}><b>Byduo</b></p>
                </Link>
                <p className="text-white">Byduo will serve you Wonderful Travel Blog.</p>
              </div>
            </Col>
            <Col md={3} className='mb-3'>
              <div className="links-area">
                <h4 className="text-white mb-2 mb-md-3">Quick Links</h4>
                <ul>
                  <li className='mb-1'>
                    <Link to="/" className='text-ash'>Home</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/contact" className='text-ash'>Contact US</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Terms & conditions</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Privacy & Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} className='mb-3'>
              <div className="links-area">
                <h4 className="text-white mb-2 mb-md-3">About Us</h4>
                <ul>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Our story</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Working with us</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Tour guide</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Be our partner</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} className='mb-3'>
              <div className="links-area">
                <h4 className="text-white mb-2 mb-md-3">Support</h4>
                <ul>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Customer Support</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Terms & conditions</Link>
                  </li>
                  <li className='mb-1'>
                    <Link to="/coming-soon" className='text-ash'>Privacy & Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* footer bottom start */}
      <div className="footer-bottom py-3">
        <Container>
          <p className="text-center text-white">&copy; { new Date().getFullYear() } - All rights reserved by Byduo.</p>
        </Container>
      </div>
    </>
  )
}
