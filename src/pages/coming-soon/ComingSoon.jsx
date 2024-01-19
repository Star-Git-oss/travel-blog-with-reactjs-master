import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../../layout/PageHeader';

// image
import flower from '../../assets/img/flower.png';

export default function ComingSoon() {
  return (
    <>
      <PageHeader />
      
      <section className="coming-soon-area pt-30 pb-30">
        <Container>
          <div className="text-center">
            <img src={ flower } alt="flower" className="img-fluid mb-30" />
            <h3 className="text-red">This page will updated soon.</h3>
          </div>
        </Container>
      </section>
    </>
  )
}
