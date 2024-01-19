import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import about from '../../assets/img/home-banner/1.jpg';

export default function About() {

  // page title
  useEffect(() => {
    document.title='About | Byduo';
  });

  return (
    <>
      <PageHeader />
      
      {/* about us start */}
      <section className="about-us-area pt-60 pb-60">
        <Container>
          <Row className='align-items-center'>
            <Col md={6} className='mb-3'>
              <div className="about-img">
                <img src={about} alt="about" className="img-fluid rounded" />
              </div>
            </Col>
            <Col md={6} className='mb-3'>
              <div className="about-content">
                <h3 className="text-red mb-3">HOW WE ARE BEST FOR TRAVEL !</h3>
                <p className="text-ash">
                  Dictumst voluptas qui placeat omnis repellendus, est assumenda dolores facilisis, nostra, inceptos. Ullam laudantium deserunt duis platea. Fermentum diam, perspiciatis cupidatat justo quam voluptate, feugiat, quaerat. Delectus aute scelerisque blanditiis venenatis aperiam rem. Tempore porttitor orci eligendi velit vel scelerisque minus scelerisque? Dis! Aenean! Deleniti esse aperiam adipiscing, sapiente?
                  <br />
                  Ratione conubia incididunt nullam! Sodales, impedit, molestias consectetuer itaque magni ut neque, lobortis expedita corporis voluptatem natus praesent mollis quidem auctor curae, mattis laboris diamlorem iure nullam esse? Pariatur primis.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* about us end */}
    </>
  )
}
