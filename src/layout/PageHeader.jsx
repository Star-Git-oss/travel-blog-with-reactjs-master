import React from 'react';
import { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';

// images
import bg1 from '../assets/img/home-banner/1.jpg';
import bg2 from '../assets/img/places/2.jpg';
import bg3 from '../assets/img/places/3.jpg';
import bg5 from '../assets/img/places/4.jpg';

export default function PageHeader() {

  // state
  const [page, setPage] = useState({
    pageName: '',
    bgImage: ''
  });

  // every render
  useEffect(() => {
    let lastPart = window.location.href.split("/").pop();
    // condition for page header
    switch(lastPart) {
      case 'places':
        setPage({
          pageName: 'All Tour Places',
          bgImage: bg1
        })
        break;
      case 'videos':
        setPage({
          pageName: 'All Tour Videos',
          bgImage: bg3
        })
        break;
      case 'gallery':
        setPage({
          pageName: 'Photo Collections',
          bgImage: bg2
        })
        break;
      case 'about':
        setPage({
          pageName: 'Know About Us',
          bgImage: bg5
        })
        break;
      case 'contact':
        setPage({
          pageName: 'Contact with Us',
          bgImage: bg2
        })
        break;
      case 'coming-soon':
        setPage({
          pageName: 'Welcome!',
          bgImage: bg3
        })
        break;
      default:
    }
  }, []);

  return (
    <>
      {
        page.pageName && 
        <section className='page-header-area'>
          <Container fluid className='px-0'>
            <div className="img-wrapper position-relative">
              <img src={page.bgImage} alt="page header" />
              <div className="heading-text position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
                <h2 className='text-white pt-5'>{ page.pageName }</h2>
              </div>
            </div>
          </Container>
        </section>
      }
    </>
  )
}
