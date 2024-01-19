import React from 'react';
import { Link } from "react-router-dom";
import {Col, Container, Row, Card, Placeholder } from 'react-bootstrap';

// icons
import { BsArrowRightShort } from 'react-icons/bs';

export default function Home({ places, placeLoding }) {

  return (
    <>
      {/* tour places start */}
      <section className="tour-places-area pt-80">
        <Container>
          {/* section heading */}
          <Row className='justify-content-center'>
            <Col md={7}>
              <h5 className="text-center text-orange mb-3">Popular Destinations</h5>
              <h2 className='text-center mb-4 mb-md-5'>Travel Most Popular Place In <br /> The World</h2>
            </Col>
          </Row>
          
          {/* place items */}
          <Row>

            {/* destination item */}
            { placeLoding ? 
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
              places && places.slice(0, 6).map( (place, i) => (
                <Col md={4} className='mb-3' key={ i }>
                  <Card className='h-100 shadow border-0'>
                    <Card.Img variant="top" src={place.img} />
                    <Card.Body>
                      <Row className='align-items-center'>
                        <Col xs={9}>
                          <h4 className='mb-1'>{ place.name }</h4>
                          <p className='text-ash'>{ place.location }</p>
                        </Col>
                        <Col xs={3}>
                          <Link to={`/place-details/${place.id}`} className="btn rounded-circle"><BsArrowRightShort /></Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>
      {/* tour places end */}
    </>
  )
}
