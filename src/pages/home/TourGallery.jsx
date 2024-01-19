import React from 'react';
import {Col, Container, Row, Placeholder} from 'react-bootstrap';

// slick slider 
import Slider from "react-slick";
import "../../assets/plugins/slick/slick.css"; 
import "../../assets/plugins/slick/slick.theme.css";

export default function Home({ gallery, galleryLoding }) {

  // slick slider
  const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* photo gallery start */}
      <section className="photo-gallery-area pt-80">
        <Container fluid>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={6}>
              <h5 className="text-center text-orange mb-3">Tour Gallery</h5>
              <h2 className='text-center mb-4 mb-md-5'>Best Tourist's Shared <br /> Photos</h2>
            </Col>
          </Row>
        </Container>
        <Container fluid className='px-0'>
          {/* slider */}
          <Slider {...slickSettings}>
            { galleryLoding ?
              <Placeholder animation="glow">
                <Placeholder md={12} style={{height: '10rem'}} />
              </Placeholder>
              :
              gallery.map((galleryItem) => (
                <div className='slider-item position-relative' key={ galleryItem.id }>
                  <img src={ galleryItem.img } className='img-fluid' alt="img" />
                  <small className="place-name position-absolute bg-white text-orange">{ galleryItem.location }</small>
                </div>
              ))
            }
          </Slider>
        </Container>
      </section>
      {/* photo gallery end */}
    </>
  )
}
