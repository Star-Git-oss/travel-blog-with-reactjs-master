import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Col, Container, Row} from 'react-bootstrap';

// components
import DetailsArea from './DetailsArea';
import PlaceRight from './PlaceRight';
import RelatedPlaces from './RelatedPlaces';

export default function PlaceDetails({ places, gallery }) {

  // state
  const [placeDetails, setPlaceDetails] = useState({});

  // get id
  const params = useParams();

  useEffect(() => {
    places.map((place) => {
      if(place.id === params.id) {
        return (setPlaceDetails(place));
      }
      else return '';
    });
    
  }, [params, places]);

  return (
    <>
      {/* dynamic page title */}
      <p className="d-none">{document.title=`${placeDetails.name} | Byduo`}</p>

      {/* page header */}
      <section className='page-header-area'>
        <Container fluid className='px-0'>
          <div className="img-wrapper position-relative">
            <img src={placeDetails.img} alt="page header" />
            <div className="heading-text position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
              <h2 className='text-white pt-5'>{ placeDetails.name }</h2>
            </div>
          </div>
        </Container>
      </section>
      
      {/* place details start */}
      <section className="place-details-area pt-40 pb-40">
        <Container>
          <Row>
            {/* left details */}
            <Col md={8} className='mb-3'>
              <DetailsArea placeDetails={placeDetails} />
            </Col>
            {/* right others */}
            <Col md={4}>
              <PlaceRight gallery={gallery} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* place details end */}

      <RelatedPlaces places={places} />
    </>
  )
}
