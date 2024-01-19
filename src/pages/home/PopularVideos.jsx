import React from 'react';
import { Link } from "react-router-dom";
import {Col, Container, Row, Card, Placeholder} from 'react-bootstrap';

// icons
import { BsPlayCircle } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home({ videos, videoLoding }) {

  return (
    <>
      {/* video blogs start */}
      <section className="tour-videos-area pt-100 pb-80">
        <Container>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={7}>
              <h5 className="text-center text-orange mb-3">Popular Videos</h5>
              <h2 className='text-center mb-4 mb-md-5'>Our Latest Video Article <br /> For Travellers</h2>
            </Col>
          </Row>
          
          {/* place items */}
          <Row>

            {/* video item */}
            { videoLoding ?
              <Row>
                <Col>
                  <Placeholder animation="glow">
                    <Placeholder md={12} style={{height: '10rem'}} className="rounded" />
                  </Placeholder>
                </Col>
                <Col>
                  <Placeholder animation="glow">
                    <Placeholder md={12} style={{height: '10rem'}} className="rounded" />
                  </Placeholder>
                </Col>
                <Col>
                  <Placeholder animation="glow">
                    <Placeholder md={12} style={{height: '10rem'}} className="rounded" />
                  </Placeholder>
                </Col>
              </Row>
              :
              videos && videos.slice(0, 3).map((video) => (
                <Col md={4} className='mb-3 px-md-4' key={video.id}>
                  <Link to={`/video-details/${video.id}`}>
                    <Card className='h-100 shadow border-0'>
                      <div className="card-img-wrapper position-relative">
                        <Card.Img variant="top" src={video.img} />
                        <BsPlayCircle className='play-icon text-white position-absolute' />
                        <div className="overlay position-absolute"></div>
                      </div>
                      <Card.Body>
                        <h4>{ video.name }</h4>
                        <p className="text-ash">
                          <FaMapMarkerAlt className='text-orange me-1' /> { video.location }
                        </p>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      {/* video blogs end */}
    </>
  )
}
