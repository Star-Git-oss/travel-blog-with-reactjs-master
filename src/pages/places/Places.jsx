import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row, Card} from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// icons
import { BsArrowRightShort } from 'react-icons/bs';

export default function Places({ places }) {

  // page title
  useEffect(() => {
    document.title='Places | Byduo';
  });

  return (
    <>
      <PageHeader />

      {/* tour places start */}
      <section className="tour-places-area pt-40 pb-40">
        <Container>
          {/* place items */}
          <Row>

            {/* destination item */}
            {
              places && places.map( (place, i) => (
                <Col md={4} className='mb-3' key={ i }>
                  <Card className='h-100 shadow border-0'>
                    <Card.Img variant="top" src={ place.img } />
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
